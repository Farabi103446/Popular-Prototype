export interface ExportCountry {
  name: string;
  region: "Asia" | "Africa" | "Central & South America" | "Europe" | "CIS" | "Oceania";
  /** Capital / commercial-city longitude (degrees). */
  lon: number;
  /** Capital / commercial-city latitude (degrees). */
  lat: number;
}

/**
 * Export destinations with TRUE geographic marker positions (capital-city
 * lon/lat). Projected onto the map with EQUIRECT.x()/EQUIRECT.y() from
 * worldMap.ts — same projection as the country polygons, so markers always
 * land on their country.
 */
export const EXPORT_COUNTRIES: ExportCountry[] = [
  // Asia
  { name: "Philippines", region: "Asia", lon: 121.0, lat: 14.6 },  // Manila
  { name: "Vietnam", region: "Asia", lon: 105.8, lat: 21.0 },      // Hanoi
  { name: "Cambodia", region: "Asia", lon: 104.9, lat: 11.5 },     // Phnom Penh
  { name: "Macau", region: "Asia", lon: 113.5, lat: 22.2 },
  { name: "Mongolia", region: "Asia", lon: 106.9, lat: 47.9 },     // Ulaanbaatar
  { name: "Sri Lanka", region: "Asia", lon: 79.9, lat: 6.9 },      // Colombo
  { name: "Pakistan", region: "Asia", lon: 73.1, lat: 33.7 },      // Islamabad
  { name: "Myanmar", region: "Asia", lon: 96.1, lat: 19.7 },       // Naypyidaw
  { name: "Afghanistan", region: "Asia", lon: 69.2, lat: 34.5 },   // Kabul
  { name: "Jordan", region: "Asia", lon: 35.9, lat: 31.9 },        // Amman
  { name: "Yemen", region: "Asia", lon: 44.2, lat: 15.4 },         // Sanaa
  { name: "UAE", region: "Asia", lon: 54.4, lat: 24.5 },           // Abu Dhabi
  { name: "Turkey", region: "Asia", lon: 32.9, lat: 39.9 },        // Ankara
  // Africa
  { name: "Kenya", region: "Africa", lon: 36.8, lat: -1.3 },       // Nairobi
  { name: "Nigeria", region: "Africa", lon: 7.5, lat: 9.1 },       // Abuja
  { name: "South Sudan", region: "Africa", lon: 31.6, lat: 4.9 },  // Juba
  { name: "Chad", region: "Africa", lon: 15.0, lat: 12.1 },        // N'Djamena
  { name: "Somalia", region: "Africa", lon: 45.3, lat: 2.0 },      // Mogadishu
  { name: "Uganda", region: "Africa", lon: 32.6, lat: 0.3 },       // Kampala
  { name: "South Africa", region: "Africa", lon: 28.2, lat: -25.7 }, // Pretoria
  // Central & South America
  { name: "Belize", region: "Central & South America", lon: -88.7, lat: 17.3 },     // Belmopan
  { name: "Jamaica", region: "Central & South America", lon: -76.8, lat: 18.1 },    // Kingston
  { name: "Guatemala", region: "Central & South America", lon: -90.5, lat: 14.6 },  // Guatemala City
  { name: "Mexico", region: "Central & South America", lon: -99.1, lat: 19.4 },     // Mexico City
  { name: "Venezuela", region: "Central & South America", lon: -66.9, lat: 10.5 },  // Caracas
  { name: "Colombia", region: "Central & South America", lon: -74.1, lat: 4.7 },    // Bogotá
  { name: "Chile", region: "Central & South America", lon: -70.7, lat: -33.4 },     // Santiago
  { name: "Bolivia", region: "Central & South America", lon: -68.1, lat: -16.5 },   // La Paz
  { name: "Ecuador", region: "Central & South America", lon: -78.5, lat: -0.2 },    // Quito
  // Europe
  { name: "Poland", region: "Europe", lon: 21.0, lat: 52.2 },      // Warsaw
  { name: "France", region: "Europe", lon: 2.3, lat: 48.9 },       // Paris
  { name: "Romania", region: "Europe", lon: 26.1, lat: 44.4 },     // Bucharest
  // CIS
  { name: "Armenia", region: "CIS", lon: 44.5, lat: 40.2 },        // Yerevan
  // Oceania
  { name: "East Timor", region: "Oceania", lon: 125.6, lat: -8.9 }, // Dili
];

export const REGIONS = [
  "Asia",
  "Africa",
  "Central & South America",
  "Europe",
  "CIS",
  "Oceania",
] as const;

/**
 * Maps export-market names to country names as they appear in the
 * Natural Earth dataset (worldMap.ts COUNTRY_PATHS), so the map can tint
 * the actual polygons of each export market.
 */
export const MARKET_COUNTRY_IDS: Record<string, string[]> = {
  Philippines: ["Philippines"],
  Vietnam: ["Vietnam"],
  Cambodia: ["Cambodia"],
  "Sri Lanka": ["Sri Lanka"],
  Pakistan: ["Pakistan"],
  Myanmar: ["Myanmar"],
  Mongolia: ["Mongolia"],
  Kenya: ["Kenya"],
  Nigeria: ["Nigeria"],
  "South Africa": ["South Africa", "Lesotho", "eSwatini"],
  Uganda: ["Uganda"],
  Somalia: ["Somalia"],
  "South Sudan": ["S. Sudan"],
  Chad: ["Chad"],
  Mexico: ["Mexico"],
  Guatemala: ["Guatemala"],
  Belize: ["Belize"],
  Jamaica: ["Jamaica"],
  Colombia: ["Colombia"],
  Venezuela: ["Venezuela"],
  Ecuador: ["Ecuador"],
  Bolivia: ["Bolivia"],
  Chile: ["Chile", "Argentina"], // Patagonia fill keeps the highlight readable
  Poland: ["Poland"],
  France: ["France"],
  Romania: ["Romania"],
  Turkey: ["Turkey"],
  Armenia: ["Armenia"],
  UAE: ["United Arab Emirates"],
  Jordan: ["Jordan"],
  Yemen: ["Yemen"],
  Afghanistan: ["Afghanistan"],
  "East Timor": ["Timor-Leste"],
  Macau: [], // city market — no country polygon
};

export const PARTNER_MARKETS = {
  intro:
    "Popular Pharmaceuticals PLC is a WHO cGMP certified manufacturer with a number of regional GMP compliance certifications in Asia and Africa, audited and approved by local and foreign MOH / DRA bodies. More than 100 products are already registered in different countries, supplied through strong in-market distribution partners as well as direct supply to government bodies and NGOs.",
  bullets: [
    "WHO cGMP certified finished-formulation manufacturing",
    "ISO 9001:2015 certified quality management system",
    "100+ product registrations across Asia, Africa, Latin America and Europe",
    "Official supplier to government bodies and NGOs in Asia and Africa",
    "Dedicated international business and registration support team",
  ],
};
