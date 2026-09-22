export type TherapeuticClass =
  | "Antibiotics & Anti-infectives"
  | "Cardiovascular"
  | "Diabetes & Endocrinology"
  | "CNS & Neurology"
  | "Gastroenterology"
  | "Respiratory & Allergy"
  | "Vitamins & Minerals"
  | "Analgesics & Anti-inflammatory"
  | "Urology"
  | "Oncology"
  | "Immunology"
  | "Hormones"
  | "Animal Health"
  | "IV Fluids & Parenteral Nutrition";

export type DosageForm =
  | "Tablet"
  | "Capsule"
  | "Injection"
  | "Syrup"
  | "Inhaler"
  | "IV Infusion"
  | "Cream & Ointment"
  | "Ophthalmic"
  | "Effervescent Tablet"
  | "Sachet";

export interface Product {
  id: string;
  slug: string;
  brandName: string;
  genericName: string;
  strengths: string[];
  dosageForm: DosageForm;
  therapeuticClass: TherapeuticClass;
  packSize: string;
  indications: string;
  dosageAdmin: string;
  contraindications: string;
  sideEffects: string;
  storage: string;
  registeredMarkets: string[];
}

const P = (
  brandName: string,
  genericName: string,
  dosageForm: DosageForm,
  therapeuticClass: TherapeuticClass,
  strengths: string[],
  packSize: string,
  indications: string,
  dosageAdmin: string,
  contraindications: string,
  sideEffects: string,
  registeredMarkets: string[]
): Product => ({
  id: brandName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  slug: brandName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  brandName,
  genericName,
  dosageForm,
  therapeuticClass,
  strengths,
  packSize,
  indications,
  dosageAdmin:
    dosageAdmin ??
    "As directed by the physician. Dose may be adjusted according to patient response and clinical condition.",
  contraindications:
    contraindications ??
    "Contraindicated in patients with known hypersensitivity to the active substance or to any of the excipients.",
  sideEffects:
    sideEffects ??
    "Generally well tolerated. Adverse reactions, if any, are usually mild and transient. Consult the full prescribing information before use.",
  storage: "Store below 30°C, protected from light and moisture. Keep out of reach of children.",
  registeredMarkets,
});

const GL = ["Bangladesh", "Nepal", "Kenya", "Philippines"];
const EXP = ["Bangladesh", "Nigeria", "Vietnam", "Myanmar", "Sri Lanka"];

export const PRODUCTS: Product[] = [
  // ——— New launches (featured in the homepage "New Product Launch" banner) ———
  P("Jakloc 5", "Tofacitinib 5 mg", "Tablet", "Immunology", ["5 mg"], "2×7's alu-alu pack", "Moderate to severe rheumatoid arthritis in adults who have had an inadequate response to methotrexate; psoriatic arthritis, ulcerative colitis.", "5 mg once daily, with or without food.", "Active serious infection, chronic/recurrent infection, severe hepatic impairment, lymphocyte count < 500 cells/mm³.", "Upper respiratory tract infection, nasopharyngitis, headache, hyperlipidaemia.", ["Bangladesh", "Nepal"]),
  P("Cefobac 250", "Cefuroxime Axetil 250 mg", "Tablet", "Antibiotics & Anti-infectives", ["250 mg", "500 mg"], "2×6's alu-alu pack", "Pharyngitis, tonsillitis, sinusitis, bronchitis, pneumonia, uncomplicated gonorrhoea, Lyme disease.", "250–500 mg twice daily with food for 5–10 days.", "Hypersensitivity to cephalosporins; history of penicillin anaphylaxis with caution.", "Diarrhoea, nausea, vomiting, headache, candidiasis.", GL),
  P("Gemiflox", "Gemifloxacin Mesylate 320 mg", "Tablet", "Antibiotics & Anti-infectives", ["320 mg"], "1×5's blister pack", "Community-acquired pneumonia and acute bacterial exacerbation of chronic bronchitis.", "320 mg once daily for 5–7 days.", "Hypersensitivity to quinolones; epilepsy history; tendon disorder history; myasthenia gravis.", "Rash, diarrhoea, nausea, headache, QT prolongation (rare).", ["Bangladesh", "Vietnam", "Myanmar"]),
  P("Fexoral", "Fexofenadine Hydrochloride", "Tablet", "Respiratory & Allergy", ["120 mg", "180 mg"], "2×10's blister pack", "Seasonal allergic rhinitis and chronic idiopathic urticaria.", "120–180 mg once daily with water.", "Hypersensitivity to fexofenadine.", "Headache, drowsiness (uncommon), nausea, dizziness.", GL),
  // ——— Packshot showcase (homepage "Explore Our Products" grid) ———
  P("Ambrosol", "Ambroxol Hydrochloride", "Syrup", "Respiratory & Allergy", ["30 mg/5 ml (100 ml)"], "100 ml PET bottle", "Productive cough associated with acute and chronic bronchitis, bronchiectasis and cystic fibrosis.", "Adults 10 ml three times daily; children per paediatric chart, with plenty of fluids.", "Hypersensitivity to ambroxol; use with caution in peptic ulceration.", "Nausea, diarrhoea, mild gastrointestinal discomfort.", GL),
  P("Aquacal-D", "Calcium Carbonate + Vitamin D3", "Tablet", "Vitamins & Minerals", ["500 mg + 200 IU"], "3×10's blister pack", "Calcium and vitamin D supplementation in osteoporosis, pregnancy, lactation and deficiency states.", "One tablet once to twice daily with meals.", "Hypercalcaemia, nephrolithiasis, severe renal impairment.", "Constipation, flatulence, hypercalcaemia (with overdose).", GL),
  P("Astamax", "Astaxanthin", "Capsule", "Vitamins & Minerals", ["4 mg"], "2×10's alu-alu pack", "Potent antioxidant support for eye, skin, muscle and cardiovascular health.", "One capsule daily after a meal.", "Hypersensitivity to astaxanthin.", "Rare: skin pigmentation changes with excessive doses.", GL),
  P("Bilastin", "Bilastine", "Tablet", "Respiratory & Allergy", ["20 mg"], "1×10's alu-alu pack", "Symptomatic treatment of allergic rhinoconjunctivitis and chronic idiopathic urticaria.", "20 mg once daily on an empty stomach — one hour before or two hours after food.", "Hypersensitivity to bilastine.", "Headache, drowsiness (uncommon), abdominal pain.", GL),
  P("Candicon", "Itraconazole", "Capsule", "Antibiotics & Anti-infectives", ["100 mg", "200 mg"], "2×7's alu-alu pack", "Systemic and superficial fungal infections: onychomycosis, candidiasis, aspergillosis, histoplasmosis.", "200 mg once daily with food; course duration per infection type.", "Pregnancy, ventricular dysfunction, co-administration with cisapride or HMG-CoA reductase inhibitors.", "Nausea, headache, elevated liver enzymes, rash.", GL),
  P("Cox-E", "Etoricoxib", "Tablet", "Analgesics & Anti-inflammatory", ["60 mg", "90 mg", "120 mg"], "2×7's alu-alu pack", "Osteoarthritis, rheumatoid arthritis, acute gouty arthritis, ankylosing spondylitis and acute pain.", "60–120 mg once daily; use the lowest effective dose for the shortest duration.", "Active peptic ulceration, severe hepatic impairment, ischaemic heart disease, peripheral arterial disease, stroke.", "Dyspepsia, peripheral oedema, hypertension, headache.", GL),
  P("Doxofyl", "Doxofylline", "Tablet", "Respiratory & Allergy", ["400 mg"], "2×10's blister pack", "Chronic asthma, chronic obstructive pulmonary disease and chronic bronchitis with bronchospasm.", "400 mg twice daily, or 400 mg once daily at bedtime.", "Hypersensitivity to xanthine derivatives; acute myocardial infarction.", "Nausea, vomiting, epigastric pain, headache — lower side-effect profile than theophylline.", GL),
  P("Nabumax", "Nabumetone", "Tablet", "Analgesics & Anti-inflammatory", ["500 mg"], "2×10's blister pack", "Symptomatic management of osteoarthritis and rheumatoid arthritis pain.", "1000 mg once daily with food; may increase to 1500–2000 mg daily.", "Active peptic ulcer, severe renal impairment, aspirin-sensitive asthma.", "Diarrhoea, dyspepsia, abdominal pain, rash.", GL),
  // ——— Core catalog ———
  P("Nutra-Insulin", "Human Insulin (rDNA)", "Injection", "Diabetes & Endocrinology", ["100 IU/ml (10 ml vial)", "100 IU/ml cartridge (3 ml)"], "10 ml vial / 3 ml cartridge", "Diabetes mellitus requiring insulin therapy for glycaemic control.", "Individualised dosing by physician based on blood glucose monitoring; administered subcutaneously.", "Contraindicated during episodes of hypoglycaemia and in hypersensitivity to human insulin or excipients.", "Hypoglycaemia, injection-site reactions, lipodystrophy, allergic skin rash.", GL),
  P("Nutralog", "Metformin Hydrochloride", "Tablet", "Diabetes & Endocrinology", ["500 mg", "850 mg", "1000 mg"], "5×10's blister pack", "Type 2 diabetes mellitus, especially in overweight patients when diet alone fails.", "500–1000 mg once to twice daily with meals, titrated per renal function and glycaemic response.", "Severe renal impairment, diabetic ketoacidosis, acute conditions with risk of lactic acidosis.", "Gastrointestinal upset, metallic taste, lactic acidosis (rare).", GL),
  P("Sitagli", "Sitagliptin", "Tablet", "Diabetes & Endocrinology", ["25 mg", "50 mg", "100 mg"], "2×10's blister pack", "Type 2 diabetes mellitus as monotherapy or add-on to metformin or other glucose-lowering agents.", "100 mg once daily, with or without food.", "Hypersensitivity to sitagliptin; not for type 1 diabetes or diabetic ketoacidosis.", "Nasopharyngitis, upper respiratory infection, headache.", GL),
  P("Cardivex", "Atorvastatin Calcium", "Tablet", "Cardiovascular", ["10 mg", "20 mg", "40 mg"], "3×10's blister pack", "Hypercholesterolaemia and mixed dyslipidaemia; prevention of cardiovascular events.", "10–20 mg once daily; range 10–80 mg based on LDL-C response.", "Active liver disease, unexplained persistent serum aminotransferase elevation, pregnancy.", "Headache, myalgia, arthralgia, constipation, raised transaminases.", GL),
  P("Prelax-AM", "Amlodipine Besylate", "Tablet", "Cardiovascular", ["5 mg", "10 mg"], "3×10's blister pack", "Hypertension and chronic stable angina.", "5 mg once daily, may increase to 10 mg depending on response.", "Severe hypotension, hypersensitivity to amlodipine.", "Peripheral oedema, flushing, palpitation, dizziness.", GL),
  P("Rhonolol", "Bisoprolol Fumarate", "Tablet", "Cardiovascular", ["2.5 mg", "5 mg"], "3×10's blister pack", "Hypertension, angina pectoris, stable chronic heart failure.", "2.5–5 mg once daily; titrate cautiously in heart failure.", "Cardiogenic shock, overt cardiac failure, sinus bradycardia, AV block.", "Fatigue, bradycardia, cold extremities, dizziness.", EXP),
  P("Clopisan", "Clopidogrel Bisulfate", "Tablet", "Cardiovascular", ["75 mg"], "2×10's blister pack", "Prevention of atherothrombotic events in myocardial infarction, stroke and peripheral arterial disease.", "75 mg once daily with or without food.", "Active pathological bleeding, severe hepatic impairment.", "Bleeding disorders, GI haemorrhage, neutropenia (rare).", EXP),
  P("Populox", "Cefixime Trihydrate", "Capsule", "Antibiotics & Anti-infectives", ["200 mg", "400 mg"], "2×6's alu-alu pack", "Uncomplicated urinary tract infection, otitis media, pharyngitis, bronchitis, gonorrhoea.", "400 mg once daily or 200 mg twice daily.", "Hypersensitivity to cephalosporins; history of penicillin anaphylaxis with caution.", "Diarrhoea, nausea, abdominal pain, headache.", GL),
  P("Cepotum", "Ceftriaxone Sodium", "Injection", "Antibiotics & Anti-infectives", ["250 mg", "500 mg", "1 g"], "Vial with ampoule of diluent", "Lower respiratory tract, skin, urinary tract, biliary tract infections; septicaemia; meningitis.", "1–2 g once daily IV/IM; up to 4 g daily in severe infections.", "Hypersensitivity to cephalosporins; neonates with hyperbilirubinaemia.", "Eosinophilia, rash, diarrhoea, injection-site pain.", GL),
  P("Aximil", "Azithromycin Dihydrate", "Tablet", "Antibiotics & Anti-infectives", ["250 mg", "500 mg"], "3×10's blister pack", "Respiratory tract, skin, and genitourinary infections caused by susceptible organisms.", "500 mg once daily for 3 days, or 500 mg on day 1 then 250 mg days 2–5.", "Hypersensitivity to macrolides.", "Nausea, abdominal discomfort, diarrhoea, elevated liver enzymes.", GL),
  P("Levonix", "Levofloxacin", "Tablet", "Antibiotics & Anti-infectives", ["250 mg", "500 mg"], "2×7's blister pack", "Community-acquired pneumonia, sinusitis, complicated UTI, pyelonephritis.", "250–500 mg once daily for 7–14 days.", "Epilepsy history with quinolones, tendon disorder history, hypersensitivity.", "Tendinopathy (rare), insomnia, headache, GI upset.", EXP),
  P("Meronol", "Meropenem Trihydrate", "Injection", "Antibiotics & Anti-infectives", ["500 mg", "1 g"], "Vial pack", "Severe infections including nosocomial pneumonia, complicated intra-abdominal and urinary infections.", "500 mg–1 g every 8 hours IV, adjusted for renal function.", "Hypersensitivity to carbapenems; serious hypersensitivity to beta-lactams.", "Thrombophlebitis, rash, pruritus, diarrhoea.", GL),
  P("Fluzol", "Fluconazole", "Capsule", "Antibiotics & Anti-infectives", ["50 mg", "150 mg", "200 mg"], "1×10's blister pack", "Candidiasis (oropharyngeal, vaginal, systemic), cryptococcal meningitis.", "150 mg single dose (vaginal candidiasis) to 200–400 mg daily (systemic).", "Co-administration with cisapride or terfenadine; hypersensitivity.", "Headache, rash, abdominal pain, nausea.", GL),
  P("Neuronyl", "Pregabalin", "Capsule", "CNS & Neurology", ["25 mg", "50 mg", "75 mg", "150 mg"], "2×10's blister pack", "Neuropathic pain, postherpetic neuralgia, adjunctive therapy for partial-onset seizures.", "75–150 mg twice daily, titrated to response.", "Hypersensitivity to pregabalin.", "Dizziness, somnolence, dry mouth, weight gain.", GL),
  P("Citalor", "Escitalopram Oxalate", "Tablet", "CNS & Neurology", ["5 mg", "10 mg", "20 mg"], "2×10's blister pack", "Depressive episodes, panic disorder, generalised anxiety disorder.", "10 mg once daily; maximum 20 mg daily.", "Concomitant MAO inhibitors; hypersensitivity to escitalopram.", "Nausea, insomnia, somnolence, sweating.", GL),
  P("Donepil", "Donepezil Hydrochloride", "Tablet", "CNS & Neurology", ["5 mg", "10 mg"], "2×10's blister pack", "Symptomatic treatment of mild to moderate Alzheimer's dementia.", "5 mg once daily at bedtime; may increase to 10 mg after 4–6 weeks.", "Hypersensitivity to donepezil or piperidine derivatives.", "Nausea, diarrhoea, muscle cramps, vivid dreams.", EXP),
  P("Rabekin", "Rabeprazole Sodium", "Capsule", "Gastroenterology", ["20 mg"], "2×10's alu-alu pack", "GERD, duodenal and gastric ulcer, H. pylori eradication combination therapy.", "20 mg once daily before breakfast.", "Hypersensitivity to rabeprazole or substituted benzimidazoles.", "Headache, diarrhoea, abdominal pain, flatulence.", GL),
  P("Omepra", "Omeprazole", "Capsule", "Gastroenterology", ["20 mg"], "3×10's blister pack", "Gastric and duodenal ulcer, reflux oesophagitis, Zollinger-Ellison syndrome.", "20 mg once daily for 4–8 weeks.", "Hypersensitivity to omeprazole.", "Headache, nausea, diarrhoea, constipation.", GL),
  P("Motigut", "Domperidone Maleate", "Tablet", "Gastroenterology", ["10 mg"], "10×10's blister pack", "Functional dyspepsia, nausea and vomiting of functional origin.", "10 mg three times daily before meals; maximum 30 mg/day.", "Prolactinoma, cardiac conduction disorders; not for long-term use.", "Dry mouth, abdominal cramps, headache.", EXP),
  P("Hepatovit", "Silymarin + B-Complex", "Tablet", "Gastroenterology", ["70 mg + B-complex"], "5×10's blister pack", "Supportive therapy in chronic liver disease, toxic hepatic damage.", "One tablet twice daily after meals.", "Hypersensitivity to any component.", "Mild GI discomfort, allergic skin reactions (rare).", GL),
  P("Venticare", "Montelukast Sodium", "Tablet", "Respiratory & Allergy", ["4 mg", "5 mg", "10 mg"], "2×7's blister pack", "Prophylaxis and chronic treatment of asthma, allergic rhinitis.", "10 mg once daily in the evening (adults); 4–5 mg chewable for children.", "Hypersensitivity to montelukast.", "Headache, abdominal pain, behavioural changes (rare).", GL),
  P("Asthalin-H", "Salbutamol", "Inhaler", "Respiratory & Allergy", ["100 mcg/puff (200 metered doses)"], "MDI canister with actuator", "Relief of bronchospasm in asthma and COPD.", "1–2 puffs as required, up to 4 times daily.", "Hypersensitivity to salbutamol; tachyarrhythmia caution.", "Fine tremor, tachycardia, palpitation, muscle cramps.", GL),
  P("Sustacort", "Methylprednisolone Acetate", "Injection", "Hormones", ["40 mg/ml", "80 mg/ml"], "1 ml / 2 ml vial", "Inflammatory and allergic conditions, arthropathies, dermatologic diseases.", "10–80 mg IM/intra-articular per physician judgement.", "Systemic fungal infection, hypersensitivity to corticosteroids.", "Fluid retention, hyperglycaemia, muscle weakness, adrenal suppression.", GL),
  P("Ostecare-D", "Calcium Carbonate + Vitamin D3", "Tablet", "Vitamins & Minerals", ["500 mg + 200 IU"], "5×10's blister pack", "Osteoporosis, calcium & vitamin D deficiency, pregnancy and lactation supplementation.", "1–2 tablets daily with meals.", "Hypercalcaemia, nephrolithiasis, severe renal impairment.", "Constipation, flatulence, hypercalcaemia (with overdose).", GL),
  P("Ferrovit", "Ferrous Sulphate + Folic Acid", "Tablet", "Vitamins & Minerals", ["150 mg + 0.4 mg"], "10×10's blister pack", "Iron deficiency anaemia, megaloblastic anaemia of pregnancy.", "One tablet once to twice daily after meals.", "Haemochromatosis, haemosiderosis; active peptic ulcer caution.", "Dark stools, constipation, epigastric discomfort.", EXP),
  P("Zyncovit", "Vitamin C + Zinc", "Effervescent Tablet", "Vitamins & Minerals", ["500 mg + 10 mg"], "1×10's tube", "Vitamin C and zinc supplementation; support during infections and recovery.", "One tablet daily, dissolved in a glass of water.", "Hypersensitivity to any component; oxalate kidney stone history caution.", "Mild GI upset, nausea with high doses.", GL),
  P("Nuberol-Forte", "Paracetamol + Orphenadrine", "Tablet", "Analgesics & Anti-inflammatory", ["450 mg + 35 mg"], "10×10's blister pack", "Musculoskeletal pain, tension headache, post-traumatic pain with muscle spasm.", "1 tablet up to 3 times daily.", "Glaucoma, prostatic hypertrophy, hypersensitivity.", "Dry mouth, drowsiness, tachycardia (paradoxical).", GL),
  P("Xoril", "Piroxicam", "Capsule", "Analgesics & Anti-inflammatory", ["10 mg", "20 mg"], "2×10's blister pack", "Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis.", "20 mg once daily with food.", "Active peptic ulcer, severe renal/hepatic impairment, aspirin-sensitive asthma.", "Dyspepsia, GI bleeding risk, oedema, dizziness.", EXP),
  P("Tramadin", "Tramadol Hydrochloride", "Capsule", "Analgesics & Anti-inflammatory", ["50 mg"], "2×10's blister pack", "Moderate to severe pain where opioids are appropriate.", "50–100 mg every 4–6 hours; maximum 400 mg/day.", "Concurrent MAO inhibitors, epilepsy uncontrolled, hypersensitivity.", "Nausea, dizziness, somnolence, constipation, dependence risk.", GL),
  P("Urisol", "Tamsulosin Hydrochloride", "Capsule", "Urology", ["400 mcg"], "2×10's alu-alu pack", "Benign prostatic hyperplasia (BPH) associated lower urinary tract symptoms.", "400 mcg once daily after the same meal each day.", "Orthostatic hypotension history, severe hepatic impairment.", "Dizziness, ejaculation disorder, rhinitis, hypotension.", GL),
  P("Solifen", "Solifenacin Succinate", "Tablet", "Urology", ["5 mg", "10 mg"], "1×10's blister pack", "Overactive bladder with urge incontinence, urgency and frequency.", "5 mg once daily; may increase to 10 mg.", "Urinary retention, severe GI motility disorders, narrow-angle glaucoma.", "Dry mouth, constipation, blurred vision.", GL),
  P("Oncoxel", "Capecitabine", "Tablet", "Oncology", ["150 mg", "500 mg"], "2×10's blister pack", "Metastatic colorectal and breast cancer; adjuvant colorectal cancer.", "1250 mg/m² twice daily within 30 minutes after food, 2-week cycles.", "Severe renal impairment, known DPD deficiency, pregnancy.", "Diarrhoea, hand-foot syndrome, stomatitis, myelosuppression.", GL),
  P("Ondapop", "Ondansetron", "Injection", "Oncology", ["2 mg/ml (4 ml ampoule)"], "Ampoule pack", "Prevention of nausea and vomiting induced by cytotoxic chemotherapy and radiotherapy.", "8 mg slow IV immediately before chemotherapy, then 8 mg every 12 hours.", "Hypersensitivity to ondansetron; concomitant apomorphine.", "Headache, constipation, flushing, injection-site reaction.", GL),
  P("Popular-NS", "Normal Saline (Sodium Chloride 0.9%)", "IV Infusion", "IV Fluids & Parenteral Nutrition", ["500 ml", "1000 ml"], "PP bottle", "Fluid and electrolyte replenishment, vehicle for IV drug dilution.", "IV infusion at a rate and volume determined by clinical need.", "Hyperchloraemia, fluid overload states, oedema caution.", "Fluid overload, hyponatraemia with prolonged use (rare).", GL),
  P("Popular-RL", "Ringer's Lactate (Hartmann's Solution)", "IV Infusion", "IV Fluids & Parenteral Nutrition", ["500 ml", "1000 ml"], "PP bottle", "Fluid replacement after burns, surgery, blood loss; dehydration with acidosis.", "IV infusion per clinical assessment of fluid and electrolyte status.", "Severe liver disease (lactate metabolism), hyperkalaemia, fluid overload.", "Oedema, electrolyte imbalance with overinfusion.", GL),
  P("Popular-G5", "Dextrose 5% IV", "IV Infusion", "IV Fluids & Parenteral Nutrition", ["500 ml", "1000 ml"], "PP bottle", "Source of water and calories; treatment of hypoglycaemia; diluent.", "IV infusion per clinical requirement; monitor blood glucose.", "Diabetic patients require insulin cover; fluid overload caution.", "Hyperglycaemia, vein irritation, fluid overload.", GL),
  P("Peridal-IV", "Dialysis Fluid", "IV Infusion", "IV Fluids & Parenteral Nutrition", ["5 L bag"], "5 L jumbo bag", "Peritoneal dialysis fluid for renal failure patients.", "Peritoneal dialysis exchange per nephrologist protocol.", "Acutely ill patients unsuitable for peritoneal dialysis.", "Peritonitis risk, protein loss, hyperglycaemia.", GL),
  P("Optha-Flo", "Moxifloxacin Ophthalmic", "Ophthalmic", "Antibiotics & Anti-infectives", ["0.5% (5 ml)"], "5 ml dropper bottle", "Bacterial conjunctivitis caused by susceptible organisms.", "One drop three times daily for 7 days.", "Hypersensitivity to moxifloxacin or quinolones.", "Eye irritation, conjunctival hyperaemia, reduced vision.", GL),
  P("Timol-POP", "Timolol Maleate Ophthalmic", "Ophthalmic", "Cardiovascular", ["0.25%", "0.5% (5 ml)"], "5 ml dropper bottle", "Chronic open-angle glaucoma, ocular hypertension.", "One drop twice daily in affected eye(s).", "Asthma, COPD, bradycardia, overt cardiac failure.", "Transient burning, blurred vision, bradycardia (systemic).", GL),
  P("Ketolac-Eye", "Ketorolac Tromethamine Ophthalmic", "Ophthalmic", "Analgesics & Anti-inflammatory", ["0.5% (5 ml)"], "5 ml dropper bottle", "Postoperative ocular inflammation following cataract extraction.", "One drop four times daily as directed.", "Active ocular infection, hypersensitivity to NSAIDs.", "Transient stinging, conjunctival irritation.", GL),
  P("Clobefate", "Clobetasol Propionate", "Cream & Ointment", "Analgesics & Anti-inflammatory", ["0.05% (15 g tube)"], "15 g tube", "Short-term treatment of resistant dermatoses: psoriasis, eczema unresponsive to milder steroids.", "Apply thin layer 1–2 times daily; max 2 weeks.", "Skin infections untreated, rosacea, acne vulgaris, perioral dermatitis.", "Skin atrophy, striae, telangiectasia with prolonged use.", GL),
  P("Micoderm", "Clotrimazole", "Cream & Ointment", "Antibiotics & Anti-infectives", ["1% (20 g tube)"], "20 g tube", "Fungal skin infections: tinea pedis, corporis, cruris; candidiasis.", "Apply thin layer 2–3 times daily for 2–4 weeks.", "Hypersensitivity to clotrimazole.", "Local burning, erythema, pruritus.", GL),
  P("Pantopop-IV", "Pantoprazole Sodium", "Injection", "Gastroenterology", ["40 mg vial"], "Vial with diluent", "GERD, peptic ulcer haemorrhage prophylaxis where oral therapy unavailable.", "40 mg IV once daily, reconstituted per instructions.", "Hypersensitivity to pantoprazole.", "Headache, diarrhoea, injection-site thrombophlebitis.", GL),
  P("Cephimox", "Cefpodoxime Proxetil", "Tablet", "Antibiotics & Anti-infectives", ["100 mg", "200 mg"], "2×7's alu-alu pack", "Upper and lower respiratory, urinary and skin infections; ENT infections.", "100–200 mg twice daily for 5–14 days.", "Hypersensitivity to cephalosporins.", "Nausea, headache, loose stools, rash.", GL),
  P("Rosuvex", "Rosuvastatin Calcium", "Tablet", "Cardiovascular", ["5 mg", "10 mg", "20 mg"], "3×10's blister pack", "Hyperlipidaemia; prevention of major cardiovascular events in at-risk patients.", "5–10 mg once daily; max 40 mg with monitoring.", "Active liver disease, pregnancy, lactation.", "Myalgia, headache, asthenia, constipation.", EXP),
  P("Valsacomb", "Valsartan + Hydrochlorothiazide", "Tablet", "Cardiovascular", ["80/12.5 mg", "160/12.5 mg"], "3×10's blister pack", "Hypertension not controlled on monotherapy.", "One tablet once daily; titrate after 2–4 weeks.", "Anuria, severe hepatic/renal impairment, pregnancy.", "Dizziness, hypotension, fatigue, hyperuricaemia.", GL),
  P("Thyroset", "Levothyroxine Sodium", "Tablet", "Diabetes & Endocrinology", ["25 mcg", "50 mcg", "100 mcg"], "10×10's blister pack", "Hypothyroidism, thyroid hormone replacement therapy.", "25–50 mcg once daily on empty stomach, titrated by TSH.", "Untreated adrenal insufficiency, acute myocardial infarction.", "Symptoms of hyperthyroidism with overdose: palpitation, tremor, weight loss.", GL),
  P("Cinacalc", "Cinacalcet Hydrochloride", "Tablet", "Diabetes & Endocrinology", ["30 mg"], "1×10's blister pack", "Secondary hyperparathyroidism in chronic kidney disease on dialysis.", "30 mg once daily, titrated 2–4 weekly.", "Hypocalcaemia at baseline, hypersensitivity.", "Nausea, vomiting, hypocalcaemia, paraesthesia.", GL),
  P("Humatox", "Recombinant Human Erythropoietin", "Injection", "Diabetes & Endocrinology", ["2000 IU", "4000 IU", "10000 IU"], "Pre-filled syringe", "Anaemia of chronic renal failure; chemotherapy-induced anaemia.", "50–150 IU/kg three times weekly SC/IV, adjusted by haemoglobin.", "Uncontrolled hypertension, PNH, hypersensitivity.", "Hypertension, headache, arthralgia, injection-site pain.", GL),
  P("Femolan", "Clomiphene Citrate", "Tablet", "Diabetes & Endocrinology", ["25 mg", "50 mg"], "1×10's blister pack", "Ovulation induction in anovulatory infertility.", "50 mg daily for 5 days from day 2–5 of cycle.", "Pregnancy, liver disease, ovarian cysts, unexplained vaginal bleeding.", "Hot flushes, abdominal discomfort, ovarian hyperstimulation (rare).", GL),
  P("Enflox-V", "Enrofloxacin", "Injection", "Animal Health", ["10% (100 ml)"], "100 ml vial", "Bacterial infections in poultry, cattle, swine and companion animals.", "2.5–5 mg/kg body weight once daily by veterinarian prescription.", "Animals with hypersensitivity to quinolones; not for layers in production.", "Transient injection-site reaction in animals.", ["Bangladesh"]),
  P("Vaxi-Pop", "Polyvalent Vaccine", "Injection", "Animal Health", ["100 dose vial"], "100 dose vial", "Active immunisation of poultry against specified viral diseases.", "As per national vaccination schedule under veterinary supervision.", "Clinically ill or immunocompromised flocks.", "Transient mild post-vaccination reaction in flock.", ["Bangladesh"]),
  P("Orsaline-Pop", "Oral Rehydration Salts", "Sachet", "Gastroenterology", ["Sachet 20.5 g"], "Sachet pack of 5", "Treatment of dehydration due to diarrhoea of any cause.", "Dissolve one sachet in 1 litre of safe water; drink per age-based schedule.", "Severe vomiting, intestinal obstruction, unconscious patients (use IV instead).", "Usually none; vomiting if drunk too quickly.", GL),
  P("Albuterol-Syr", "Salbutamol Syrup", "Syrup", "Respiratory & Allergy", ["2 mg/5 ml (100 ml)"], "100 ml bottle", "Bronchospasm relief in children with asthma.", "Age-based dosing 3 times daily per paediatric chart.", "Hypersensitivity to salbutamol.", "Fine tremor, tachycardia, hyperactivity in children.", GL),
  P("Ceporex-Susp", "Cefalexin Suspension", "Syrup", "Antibiotics & Anti-infectives", ["125 mg/5 ml (60 ml)", "250 mg/5 ml (60 ml)"], "60 ml bottle", "Paediatric bacterial infections: ENT, respiratory, urinary, skin.", "25–50 mg/kg/day in divided doses per paediatric chart.", "Hypersensitivity to cephalosporins.", "Diarrhoea, nausea, rash.", GL),
  P("Paracin-Susp", "Paracetamol Suspension", "Syrup", "Analgesics & Anti-inflammatory", ["120 mg/5 ml (60 ml)", "250 mg/5 ml (60 ml)"], "60 ml bottle", "Fever and mild to moderate pain in paediatric patients.", "10–15 mg/kg every 4–6 hours; max 4 doses daily.", "Severe hepatic impairment; hypersensitivity.", "Rare: rash, thrombocytopenia.", GL),
  P("Uroxa-Cath", "Nitrofurantoin", "Capsule", "Urology", ["50 mg", "100 mg"], "2×10's blister pack", "Acute uncomplicated lower urinary tract infection.", "50–100 mg four times daily with food for 5–7 days.", "eGFR <45, third trimester of pregnancy, infants <1 month.", "Nausea, headache, pulmonary reactions (rare, chronic use).", GL),
  P("Gemtabin", "Gemcitabine Hydrochloride", "Injection", "Oncology", ["200 mg", "1 g"], "Vial pack", "Non-small cell lung, pancreatic, breast and ovarian cancer.", "1000 mg/m² IV weekly per protocol cycles.", "Pregnancy, hypersensitivity to gemcitabine; myelosuppression caution.", "Myelosuppression, nausea, flu-like symptoms, rash.", GL),
];

export const THERAPEUTIC_CLASSES: TherapeuticClass[] = [
  "Antibiotics & Anti-infectives",
  "Cardiovascular",
  "Diabetes & Endocrinology",
  "CNS & Neurology",
  "Gastroenterology",
  "Respiratory & Allergy",
  "Vitamins & Minerals",
  "Analgesics & Anti-inflammatory",
  "Urology",
  "Oncology",
  "Immunology",
  "Hormones",
  "Animal Health",
  "IV Fluids & Parenteral Nutrition",
];

export const DOSAGE_FORMS: DosageForm[] = [
  "Tablet",
  "Capsule",
  "Injection",
  "Syrup",
  "Inhaler",
  "IV Infusion",
  "Cream & Ointment",
  "Ophthalmic",
  "Effervescent Tablet",
  "Sachet",
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByClass(cls: TherapeuticClass): Product[] {
  return PRODUCTS.filter((p) => p.therapeuticClass === cls);
}
