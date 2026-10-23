
export interface ServiceListing {
  id: string;
  serviceId: string;
  title: string;
  description: string;
  price: number;
  priceUnit: "per group" | "per person";
  groupLabel: string;
  additionalMemberPrice?: number;
  image: string;
}

export const SERVICE_LISTINGS: ServiceListing[] = [
  // OFFBEAT TREKKING — 6 LISTINGS
  {
    id: "cabo-de-ram-fort-trek",
    serviceId: "offbeat-trekking",
    title:
      "Cabo de Ram Fort Trek with Caves, Cliff Exploration & Hidden Spring Bath",
    description:
      "Explore the fort, caves and cliffs, followed by a refreshing hidden spring bath on this short trek.",
    price: 3750,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 575,
    image: "/images/listings/IMG_9793.PNG",
  },
  {
    id: "great-south-goa-short-treks",
    serviceId: "offbeat-trekking",
    title: "The Great South Goa Short Treks",
    description:
      "Discover a variety of offbeat locations and hidden gems across South Goa.",
    price: 3750,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 575,
    image: "/images/listings/IMG_9801.PNG",
  },
  {
    id: "old-goa-offbeat-trek",
    serviceId: "offbeat-trekking",
    title: "Old Goa Off Beat Short Trek",
    description:
      "Explore ancient church ruins, a famous church used for film shoots, an island fort and a seasonal waterfall.",
    price: 4750,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 675,
    image: "/images/listings/IMG_9809.PNG",
  },
  {
    id: "hidden-moon-beach-trek",
    serviceId: "offbeat-trekking",
    title: "Hidden Moon Beach Trek in Goa",
    description:
      "Discover the Hidden Moon Beach area on this offbeat Goa trek.",
    price: 3750,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 575,
    image: "/images/listings/IMG_9804.PNG",
  },
  {
    id: "raia-village-sightseeing",
    serviceId: "offbeat-trekking",
    title: "Raia Village Sightseeing Tour in Goa",
    description:
      "Explore the beautiful village of Raia and its scenic surroundings.",
    price: 2999,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 375,
    image: "/images/listings/IMG_9820.PNG",
  },
  {
    id: "arambol-mud-bath-trek",
    serviceId: "offbeat-trekking",
    title: "Arambol Mud Bath Trek with Hidden Dam & Cliff Trek",
    description:
      "Explore Arambol's mud bath area, hidden dam and scenic cliffs.",
    price: 4750,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 750,
    image: "/images/listings/IMG_9822.PNG",
  },

  // MOUNTAIN TREKS — 2 LISTINGS
  {
    id: "raavna-dongor-netravalli-trek",
    serviceId: "mountain-treks",
    title: "Raavna Dongor Netravalli Trek",
    description:
      "Explore the highest peak of Cotigao Wildlife Sanctuary. Ideal for larger groups.",
    price: 1499,
    priceUnit: "per person",
    groupLabel: "Minimum group: 7–10 members",
    image: "/images/listings/IMG_9827.PNG",
  },
  {
    id: "siddhanth-parvat-trek",
    serviceId: "mountain-treks",
    title: "Siddhanth Parvat Trek, Sanguem",
    description:
      "Experience beautiful mountain scenery and panoramic views of Goa.",
    price: 1499,
    priceUnit: "per person",
    groupLabel: "Minimum group: 7–10 members",
    image: "/images/listings/IMG_9829.PNG",
  },

  // CAVE EXPLORATION — 2 LISTINGS
  {
    id: "rivona-caves-trek",
    serviceId: "cave-exploration",
    title: "Rivona Caves Trek with Seasonal Cave Waterfall",
    description:
      "Explore the Rivona caves and discover a seasonal waterfall on this short trek.",
    price: 2750,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 375,
    image: "/images/listings/IMG_9830.PNG",
  },
  {
    id: "guna-caves-succor-plateau",
    serviceId: "cave-exploration",
    title: "Guna Caves, Succor Plateau",
    description:
      "Explore the wild Guna Caves in Succor Plateau, Porvorim, Goa.",
    price: 4499,
    priceUnit: "per group",
    groupLabel: "Up to 5 members",
    additionalMemberPrice: 750,
    image: "/images/listings/IMG_9821.PNG",
  },
];
