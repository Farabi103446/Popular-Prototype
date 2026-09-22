"use client";

import type { Product } from "@/lib/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  { id: "indications", label: "Indications" },
  { id: "dosage", label: "Dosage & Administration" },
  { id: "contraindications", label: "Contraindications" },
  { id: "side-effects", label: "Side Effects" },
  { id: "storage", label: "Storage & Packaging" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ProductTabs({ product }: { product: Product }) {
  const content: Record<TabId, React.ReactNode> = {
    indications: <p className="leading-relaxed text-muted-foreground">{product.indications}</p>,
    dosage: <p className="leading-relaxed text-muted-foreground">{product.dosageAdmin}</p>,
    contraindications: (
      <p className="leading-relaxed text-muted-foreground">{product.contraindications}</p>
    ),
    "side-effects": <p className="leading-relaxed text-muted-foreground">{product.sideEffects}</p>,
    storage: (
      <div className="space-y-3">
        <p className="leading-relaxed text-muted-foreground">{product.storage}</p>
        <div className="rounded-lg bg-accent p-4 text-sm">
          <p className="font-bold text-primary">Packaging</p>
          <p className="mt-1 text-muted-foreground">{product.packSize}</p>
          <p className="mt-2 font-bold text-primary">Available strengths</p>
          <ul className="mt-1 list-inside list-disc text-muted-foreground">
            {product.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <Tabs defaultValue="indications" className="w-full">
      <TabsList className="no-scrollbar h-auto w-full justify-start overflow-x-auto rounded-lg p-1">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="whitespace-nowrap px-4 py-2 data-[state=active]:text-primary"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-0 rounded-b-lg p-6 sm:p-8">
          {content[tab.id]}
        </TabsContent>
      ))}
      <p className="rounded-b-lg border border-t-0 bg-muted/50 px-6 py-3 text-[11px] leading-relaxed text-muted-foreground sm:px-8">
        This information is a prototype placeholder and does not replace the full approved
        prescribing information. Always consult the physician's reference before prescribing.
      </p>
    </Tabs>
  );
}
