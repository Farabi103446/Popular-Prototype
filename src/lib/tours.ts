export interface Tour {
  id: string;
  title: string;
  description: string;
  /** Wide panorama image rendered in the drag-to-look viewer. */
  image: string;
  /** Thumbnail shown on the tour card. */
  thumb: string;
}

/**
 * Facilities virtual tours — rendered with a drag-to-look panoramic viewer.
 * Uses the six real Popular Pharmaceuticals facility photographs
 * (harvested from their official site) as panorama backgrounds.
 */
export const TOURS: Tour[] = [
  {
    id: "factory-overview",
    title: "Factory Overview",
    description: "Aerial view of the Dhamrai manufacturing campus.",
    image: "/images/about/facility-1.webp",
    thumb: "/images/about/facility-1.webp",
  },
  {
    id: "production-corridor",
    title: "Production Corridor",
    description: "Inside the general manufacturing block.",
    image: "/images/about/facility-2.webp",
    thumb: "/images/about/facility-2.webp",
  },
  {
    id: "quality-control",
    title: "Quality Control Laboratory",
    description: "Where every batch is tested and released.",
    image: "/images/about/facility-3.webp",
    thumb: "/images/about/facility-3.webp",
  },
  {
    id: "cephalo-block",
    title: "Cephalosporin Block",
    description: "Segregated cephalosporin manufacturing suite.",
    image: "/images/about/facility-4.webp",
    thumb: "/images/about/facility-4.webp",
  },
  {
    id: "warehouse",
    title: "Warehouse",
    description: "Raw-material and finished-goods storage.",
    image: "/images/about/facility-5.webp",
    thumb: "/images/about/facility-5.webp",
  },
  {
    id: "campus-grounds",
    title: "Campus Grounds",
    description: "The wider Dhamrai plant environment.",
    image: "/images/about/facility-6.webp",
    thumb: "/images/about/facility-6.webp",
  },
];
