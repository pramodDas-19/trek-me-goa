
export interface ServiceListing {
  id: string;
  serviceId: string;
  title: string;
  description: string;
  price?: number;
  priceUnit?: "per group" | "per person";
  groupLabel: string;
  additionalMemberPrice?: number;
  image: string;
  images?: string[];
  location?: string;
  pricingOptions?: { label: string; price: number; unit?: string }[];
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
  {
    id: "floating-stone-trek-cabo-de-rama",
    serviceId: "offbeat-trekking",
    title: "Floating Stone Trek Cabo de Rama",
    description:
      "Trek along breathtaking coastal ridges and sea cliffs in Cabo de Rama to witness the famous Floating Stone rock formation perched above the turquoise sea.",
    price: 850,
    priceUnit: "per person",
    groupLabel: "Per head • Minimum 4-5 members group",
    image: "/images/listings/IMG_9932.PNG",
    images: ["/images/listings/IMG_9932.PNG", "/images/listings/IMG_9933.PNG"],
    location: "Cabo de Rama, South Goa",
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

  // ATV BOOKING — 1 LISTING
  {
    id: "book-atv-in-goa",
    serviceId: "atv-booking",
    title: "Book ATV in Goa",
    description:
      "Throttle through exhilarating off-road dirt tracks, red-mud terrain, and scenic lakeside trails on high-performance quad bikes. Safety gear and track guide included.",
    price: 1675,
    priceUnit: "per person",
    groupLabel: "Single Seater & Double Seater options",
    image: "/images/listings/IMG_9900.PNG",
    images: ["/images/listings/IMG_9900.PNG"],
    location: "Goa, India",
    pricingOptions: [
      { label: "Single Seater", price: 1675, unit: "1 rider" },
      { label: "Double Seater", price: 2300, unit: "2 riders" },
    ],
  },

  // KAYAKING — 4 LISTINGS
  {
    id: "kayaking-to-private-island-siolim",
    serviceId: "kayaking",
    title: "Kayaking to Private Island",
    description:
      "Paddle along serene mangrove backwaters to an exclusive private island in Siolim. Includes professional kayak gear, life jackets, guide, and time to explore the island.",
    price: 1499,
    priceUnit: "per person",
    groupLabel: "Per head (₹1,499 per person)",
    image: "/images/listings/IMG_9902.PNG",
    images: ["/images/listings/IMG_9902.PNG", "/images/listings/IMG_9901.PNG"],
    location: "Siolim, Goa",
  },
  {
    id: "mangrove-kayaking-siolim",
    serviceId: "kayaking",
    title: "Mangrove Kayaking",
    description:
      "Glide through dense mangrove canopies and emerald jungle waterways in Siolim. An immersive 1-hour nature paddle with all gear and safety instruction included.",
    price: 599,
    priceUnit: "per person",
    groupLabel: "1 Hour Duration • Per head",
    image: "/images/listings/IMG_9903.PNG",
    images: ["/images/listings/IMG_9903.PNG"],
    location: "Siolim, Goa",
  },
  {
    id: "palolem-beach-kayaking",
    serviceId: "kayaking",
    title: "Palolem Beach Kayaking",
    description:
      "Enjoy calm open-water sea kayaking along the golden crescent bay of Palolem Beach towards scenic rocky islets and headlands. 1-hour rental with safety jacket.",
    price: 400,
    priceUnit: "per person",
    groupLabel: "1 Hour Duration • Per head",
    image: "/images/listings/IMG_9904.PNG",
    images: ["/images/listings/IMG_9904.PNG"],
    location: "Palolem Beach, South Goa",
  },
  {
    id: "dolphin-sightseeing-tour-aguada",
    serviceId: "kayaking",
    title: "Dolphin Sightseeing Tour & Boat Ride",
    description:
      "Cruise past the historic Fort Aguada lighthouse on a thrilling coastal boat safari to spot wild leaping dolphins in their natural Arabian Sea habitat.",
    price: 499,
    priceUnit: "per person",
    groupLabel: "Per head • Life jackets & guide included",
    image: "/images/listings/IMG_9905.PNG",
    images: ["/images/listings/IMG_9905.PNG"],
    location: "Fort Aguada, Goa",
  },

  // FARM PICNIC BOOKING — 1 LISTING
  {
    id: "horse-farm-picnic-sanguem",
    serviceId: "farm-picnic",
    title: "Horse Farm Picnic with Horse Ride",
    description:
      "Spend a refreshing day at a lush private countryside farm in Sanguem with natural freshwater spring pools, emerald palm groves, an enjoyable horse ride experience, and peaceful picnic spots.",
    price: 1499,
    priceUnit: "per person",
    groupLabel: "Per head • Entry, natural pool & horse ride included",
    image: "/images/listings/IMG_9906.PNG",
    images: ["/images/listings/IMG_9906.PNG"],
    location: "Sanguem, South Goa",
  },

  // WATERSPORTS & SURFING — 3 LISTINGS
  {
    id: "natural-spring-pool-water-relaxation",
    serviceId: "watersports-surfing",
    title: "Natural Spring Pool & Water Relaxation",
    description:
      "Relax in pristine freshwater spring pools nestled amidst lush tropical greenery, coconut palms, and peaceful waterside cabanas. Includes pool access and relaxation zones.",
    price: 1200,
    priceUnit: "per person",
    groupLabel: "Per head • Spring pool access & cabanas",
    image: "/images/listings/IMG_9908.PNG",
    images: ["/images/listings/IMG_9908.PNG"],
    location: "Goa, India",
  },
  {
    id: "5-in-1-beach-watersports-candolim",
    serviceId: "watersports-surfing",
    title: "5 in 1 Beach Watersports Package",
    description:
      "Experience the ultimate coastal thrill with 5 top water activities: Parasailing, Jetski Ride, Banana Ride, Bumper Ride, and Speed Boat Ride in Candolim.",
    price: 1999,
    priceUnit: "per person",
    groupLabel: "Per head • Parasailing + Jetski + Banana + Bumper + Boat",
    image: "/images/listings/IMG_9909.PNG",
    images: ["/images/listings/IMG_9909.PNG"],
    location: "Candolim Beach, North Goa",
  },
  {
    id: "wakeboard-surfing-goa",
    serviceId: "watersports-surfing",
    title: "Wakeboard Surfing in Goa",
    description:
      "Carve through calm water channels on an exhilarating wakeboarding and cable surfing session. Full coaching, safety helmet, impact vest, and board included.",
    price: 1499,
    priceUnit: "per person",
    groupLabel: "Per session • Coaching, helmet & board included",
    image: "/images/listings/IMG_9912.PNG",
    images: ["/images/listings/IMG_9912.PNG"],
    location: "Goa, India",
  },

  // GOA HERITAGE SIGHTSEEING — 2 LISTINGS
  {
    id: "heritage-palace-tour-dam-caves-spring",
    serviceId: "churches-chapels",
    title: "Heritage Palace Tour with Goan Home-Cooked Lunch",
    description:
      "Explore a magnificent Portuguese-era heritage palace, savor an authentic Goan home-cooked lunch, and enjoy sightseeing of scenic dams, historic caves, and natural freshwater springs.",
    price: 2100,
    priceUnit: "per person",
    groupLabel: "Per head • Palace tour, home-cooked lunch, dam & caves",
    image: "/images/listings/IMG_9918.PNG",
    images: ["/images/listings/IMG_9918.PNG", "/images/listings/IMG_9919.PNG"],
    location: "Goa, India",
  },
  {
    id: "chandor-heritage-tour",
    serviceId: "churches-chapels",
    title: "Chandor Heritage Tour & Portuguese Villa",
    description:
      "Step back in time in historic Chandor. Tour an iconic Portuguese-era heritage mansion with crystal chandeliers, see the sacred ancient Nandi bull sculpture, and visit the historic hill church.",
    price: 999,
    priceUnit: "per person",
    groupLabel: "Per head • Portuguese villa, Nandi bull & hill church",
    image: "/images/listings/IMG_8992.jpeg",
    images: ["/images/listings/IMG_8992.jpeg", "/images/listings/IMG_9002.jpeg"],
    location: "Chandor, South Goa",
  },

  // WATERFALL TREKS — 8 LISTINGS
  {
    id: "tonir-sanvordem-waterfall-valpoi",
    serviceId: "waterfall-treks",
    title: "Tonir, Sanvordem Waterfall Valpoi Sattari Guided Tour",
    description:
      "A scenic 30-minute one-way guided jungle trek in Valpoi Sattari (Medium level). Includes snacks, lunch, forest entry, naturalist guide, life jacket, changing tent, and Wi-Fi.",
    price: 2100,
    priceUnit: "per person",
    groupLabel: "Per head • 30-min trek (Medium) • Lunch, snacks & gear included",
    image: "/images/listings/IMG_9923.PNG",
    images: ["/images/listings/IMG_9923.PNG"],
    location: "Valpoi Sattari, North Goa",
  },
  {
    id: "pali-netravalli-waterfall",
    serviceId: "waterfall-treks",
    title: "Pali Netravalli Waterfall Trek",
    description:
      "Trek through the rich biodiversity of Netravali Wildlife Sanctuary to the pristine Pali waterfall and natural forest bathing pool.",
    price: 950,
    priceUnit: "per person",
    groupLabel: "Per head • Minimum 5 members",
    image: "/images/listings/IMG_9928.PNG",
    images: ["/images/listings/IMG_9928.PNG"],
    location: "Netravali, South Goa",
  },
  {
    id: "verna-waterfall",
    serviceId: "waterfall-treks",
    title: "Verna Waterfall Short Trek",
    description:
      "A hidden seasonal forest waterfall tucked away in Verna. Perfect for a quick scenic nature escape and natural plunge pool dip.",
    price: 420,
    priceUnit: "per person",
    groupLabel: "Per head • Minimum 3 members",
    image: "/images/listings/IMG_9929.PNG",
    images: ["/images/listings/IMG_9929.PNG"],
    location: "Verna, South Goa",
  },
  {
    id: "cotigao-waterfall-trek",
    serviceId: "waterfall-treks",
    title: "Cotigao Waterfall Trek",
    description:
      "Moderate to extreme wilderness trek deep inside Cotigao Wildlife Sanctuary leading to secluded multi-tier cascades and wild plunge pools.",
    price: 1499,
    priceUnit: "per person",
    groupLabel: "Per head • Minimum 8 members group (Moderate to Extreme)",
    image: "/images/listings/IMG_9925.PNG",
    images: ["/images/listings/IMG_9925.PNG", "/images/listings/IMG_9926.PNG"],
    location: "Cotigao Wildlife Sanctuary, South Goa",
  },
  {
    id: "tulaskond-waterfall-bridge-valpoi",
    serviceId: "waterfall-treks",
    title: "Tulaskond Waterfall & Bridge Valpoi Sattari Guided Tour",
    description:
      "Explore the picturesque Tulaskond waterfall, historic forest bridge, and scenic river trails with an experienced local guide in Valpoi Sattari.",
    price: 950,
    priceUnit: "per person",
    groupLabel: "Per head • Guided tour in Valpoi Sattari",
    image: "/images/listings/IMG_9927.PNG",
    images: ["/images/listings/IMG_9927.PNG"],
    location: "Valpoi Sattari, North Goa",
  },
  {
    id: "gocoldem-barcem-waterfall-trek",
    serviceId: "waterfall-treks",
    title: "Gocoldem Barcem Waterfall Trek",
    description:
      "Off-the-beaten-track waterfall hike through the untouched forest trails of Barcem, ending at a crystal-clear natural swimming pool.",
    price: 875,
    priceUnit: "per person",
    groupLabel: "Per head • Minimum 3 members",
    image: "/images/listings/IMG_9930.PNG",
    images: ["/images/listings/IMG_9930.PNG"],
    location: "Barcem, Quepem, South Goa",
  },
  {
    id: "sadolxem-waterfall-trek-canacona",
    serviceId: "waterfall-treks",
    title: "Sadolxem Waterfall Trek Canacona",
    description:
      "Hike along peaceful rural canopies and hillsides in Canacona to the secluded Sadolxem forest waterfall and swimming pool.",
    price: 975,
    priceUnit: "per person",
    groupLabel: "Per head • Minimum 5 members",
    image: "/images/listings/IMG_9937.PNG",
    images: ["/images/listings/IMG_9937.PNG"],
    location: "Canacona, South Goa",
  },
  {
    id: "rivona-waterfall-short-trek",
    serviceId: "waterfall-treks",
    title: "Rivona Waterfall Short Trek",
    description:
      "Gentle short nature walk through Rivona's lush laterite landscape to a refreshing seasonal waterfall and cool rock pool.",
    price: 420,
    priceUnit: "per person",
    groupLabel: "Per head • Minimum 5 members",
    image: "/images/listings/IMG_9931.PNG",
    images: ["/images/listings/IMG_9931.PNG"],
    location: "Rivona, South Goa",
  },

  // SCUBA DIVING — 1 LISTING
  {
    id: "scuba-diving-adventure-goa",
    serviceId: "scuba-diving",
    title: "Scuba Diving Adventure in Goa",
    description:
      "Explore the underwater marine wonderland of Grande Island. Includes certified PADI dive training, underwater video/photos, boat trip, breakfast, lunch, and hotel pick up & drop.",
    price: 2500,
    priceUnit: "per person",
    groupLabel: "Per head • Breakfast, Lunch, Pick up & Drop included",
    image: "/images/listings/IMG_9910.PNG",
    images: ["/images/listings/IMG_9910.PNG"],
    location: "Grande Island, Goa",
  },

  // DUDHSAGAR WATERFALL — 1 LISTING
  {
    id: "dudhsagar-waterfall-jeep-safari",
    serviceId: "dudhsagar-waterfall",
    title: "Dudhsagar Waterfall Tour & Jungle Jeep Safari",
    description:
      "Full-day expedition to the famous 4-tiered Dudhsagar Waterfalls. Includes AC bus pick up & drop, thrilling jungle jeep safari, forest entry, Dudhsagar swim with life jacket, Old Goa Church sightseeing, and Goan buffet lunch at a spice plantation.",
    price: 1999,
    priceUnit: "per person",
    groupLabel: "Per person (6:00 AM – 5:00 PM) • AC Bus & Jeep Safari",
    image: "/images/listings/IMG_9914.PNG",
    images: ["/images/listings/IMG_9914.PNG", "/images/listings/IMG_9915.PNG"],
    location: "Dudhsagar, Goa",
  },
];
