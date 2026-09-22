"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

type Category = "general" | "product" | "export";

export default function ContactFormWrapper() {
  const [category, setCategory] = useState<Category>("general");
  const [product, setProduct] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get("category");
    if (c === "product" || c === "export" || c === "general") {
      setCategory(c);
    }
    const p = params.get("product");
    if (p) setProduct(p.slice(0, 120));
  }, []);

  const defaultMessage = product
    ? `I would like more information about ${product}.`
    : "";

  return <ContactForm key={`${category}-${product}`} defaultCategory={category} defaultMessage={defaultMessage} />;
}
