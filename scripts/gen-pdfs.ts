/**
 * Generates placeholder PDFs for the prototype:
 *   public/pdf/<product-slug>.pdf  (one per product)
 *   public/catalog.pdf             (full catalog cover sheet)
 *
 * Minimal valid single-page PDFs written with raw PDF syntax (no deps).
 * Placeholders only — real prescribing information comes from the CMS later.
 */
import fs from "fs";
import path from "path";
import { PRODUCTS, type Product } from "../src/lib/products";

function pdfEscape(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function makePdf(title: string, lines: string[]): string {
  const pageW = 595;
  const pageH = 842; // A4
  const content: string[] = [];
  content.push(`BT /F1 20 Tf 50 780 Td (${pdfEscape(title)}) Tj ET`);
  let y = 750;
  for (const line of lines) {
    content.push(`BT /F2 10 Tf 50 ${y} Td (${pdfEscape(line)}) Tj ET`);
    y -= 16;
    if (y < 50) break;
  }
  const objects: string[] = [];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  objects.push(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW} ${pageH}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`
  );
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const stream = content.join("\n");
  objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [];
  objects.forEach((obj, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const off of offsets) {
    pdf += String(off).padStart(10, "0") + " 00000 n \n";
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return pdf;
}

function wrap(text: string, width: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > width) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur += " " + w;
    }
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

function productLines(p: Product): string[] {
  const lines: string[] = [];
  const push = (label: string, value: string) => lines.push(`${label}: ${value}`);
  push("Brand Name", p.brandName);
  push("Generic Name", p.genericName);
  push("Therapeutic Class", p.therapeuticClass);
  push("Dosage Form", p.dosageForm);
  push("Strength(s)", p.strengths.join(", "));
  push("Pack Size", p.packSize);
  lines.push("");
  lines.push("INDICATIONS");
  lines.push(...wrap(p.indications, 92));
  lines.push("");
  lines.push("DOSAGE & ADMINISTRATION");
  lines.push(...wrap(p.dosageAdmin, 92));
  lines.push("");
  lines.push("CONTRAINDICATIONS");
  lines.push(...wrap(p.contraindications, 92));
  lines.push("");
  lines.push("SIDE EFFECTS");
  lines.push(...wrap(p.sideEffects, 92));
  lines.push("");
  lines.push("STORAGE");
  lines.push(...wrap(p.storage, 92));
  lines.push("");
  lines.push("Registered markets: " + p.registeredMarkets.join(", "));
  lines.push("");
  lines.push("(Prototype placeholder PDF - not for clinical use.)");
  return lines;
}

function main() {
  const pdfDir = path.join(__dirname, "..", "public", "pdf");
  fs.mkdirSync(pdfDir, { recursive: true });

  for (const p of PRODUCTS) {
    fs.writeFileSync(
      path.join(pdfDir, `${p.slug}.pdf`),
      makePdf(`${p.brandName} - Prescribing Information`, productLines(p)),
      "binary"
    );
  }

  const classes = Array.from(new Set(PRODUCTS.map((p) => p.therapeuticClass))).sort();
  const catalogLines = [
    "Popular Pharmaceuticals PLC - We care for life",
    "",
    "Full Product Catalog (Prototype Placeholder)",
    "",
    `${PRODUCTS.length} representative products across ${classes.length} therapeutic classes:`,
    ...classes.map((c) => `- ${c}`),
    "",
    "The complete portfolio comprises 362 brands & 600 dosage forms.",
    "Contact info@popularbd.com for the full printed catalog.",
  ];
  fs.writeFileSync(
    path.join(__dirname, "..", "public", "catalog.pdf"),
    makePdf("Popular Pharmaceuticals - Product Catalog", catalogLines),
    "binary"
  );

  console.log(`Generated ${PRODUCTS.length} product PDFs + catalog.pdf in public/pdf.`);
}

main();
