/**
 * Trek Me @ Goa — Structured Data
 * Contains locked category lists, counts, local experiences,
 * verified review slots, and gallery imagery.
 */

export interface ServiceCategory {
  id: string;
  title: string;
  listingCount: number;
  highlight: string;
  description: string;
  image: string;
  tag: "Trek" | "Water" | "Expedition" | "Adventure";
  features: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "offbeat-trekking",
    title: "Offbeat Trekking Expeditions",
    listingCount: 7,
    highlight: "7 Curated Expeditions",
    description: "Navigate untouched Western Ghats trails, lush evergreen canopies, and hidden forest ravines far from tourist crowds.",
    image: "/images/service-offbeat-trekking.jpg",
    tag: "Trek",
    features: ["Lush dense jungle trails", "Western Ghats biodiversity", "Guided wilderness routes"],
  },
  {
    id: "mountain-treks",
    title: "Mountain Treks",
    listingCount: 2,
    highlight: "2 Peak Ascents",
    description: "Conquer Sahyadri mountain ridges, panoramic cliff viewpoints, and sunrise peaks across the Goan borderlands.",
    image: "/images/service-mountain-treks.jpg",
    tag: "Trek",
    features: ["Panoramic valley vistas", "Sahyadri ridge hiking", "Elevation & summit views"],
  },
  {
    id: "waterfall-treks",
    title: "Waterfall Treks",
    listingCount: 8,
    highlight: "8 Waterfall Expeditions",
    description: "Trek to pristine, multi-tiered waterfalls hidden deep in the jungle, with natural plunge pools for swimming.",
    image: "/images/service-waterfall-treks.jpg",
    tag: "Trek",
    features: ["Crystal jungle pools", "Multi-tier cascade hikes", "Secluded swimming spots"],
  },
  {
    id: "cave-exploration",
    title: "Cave Exploration",
    listingCount: 2,
    highlight: "2 Ancient Caverns",
    description: "Discover ancient geological limestone formations, hidden rock caverns, and historical caves preserved across Goa.",
    image: "/images/service-cave-exploration.jpg",
    tag: "Expedition",
    features: ["Ancient rock structures", "Geological formations", "Spelunking guides & headlamps"],
  },
  {
    id: "churches-chapels",
    title: "Goa Heritage Sightseeing",
    listingCount: 2,
    highlight: "2 Heritage Tours",
    description: "Explore grand Portuguese-era heritage palaces, ancient villas, centuries-old churches, dams, caves, and sacred historic sites.",
    image: "/images/listings/IMG_9922.PNG",
    tag: "Trek",
    features: ["Grand Portuguese palaces", "Goan home-cooked lunch", "Centuries-old heritage"],
  },
  {
    id: "watersports-surfing",
    title: "Watersports & Surfing Packages",
    listingCount: 3,
    highlight: "3 Coastal Packages",
    description: "Ride the Arabian Sea waves with certified surf instructors or indulge in thrilling coastal adrenaline activities.",
    image: "/images/service-watersports.jpg",
    tag: "Water",
    features: ["5-in-1 beach watersports", "Cable wakeboard surfing", "Natural spring pool relaxation"],
  },
  {
    id: "farm-picnic",
    title: "Farm Picnic Booking",
    listingCount: 1,
    highlight: "1 Farm Day Escape",
    description: "Relax amidst organic plantations, natural freshwater spring pools, tranquil picnic zones, and horse rides in Sanguem.",
    image: "/images/service-farm-picnic.jpg",
    tag: "Adventure",
    features: ["Natural freshwater pool", "Horse ride experience", "Secluded Sanguem retreat"],
  },
  {
    id: "atv-booking",
    title: "ATV Booking",
    listingCount: 1,
    highlight: "1 Off-Road Track Package",
    description: "Throttle through exhilarating red-laterite mud tracks, forest curves, and dirt terrain on powerful quad bikes.",
    image: "/images/service-atv.jpg",
    tag: "Adventure",
    features: ["Rugged off-road dirt course", "All-terrain quad bikes", "Full safety briefings"],
  },
  {
    id: "kayaking",
    title: "Kayaking",
    listingCount: 4,
    highlight: "4 Waterway Expeditions",
    description: "Paddle quietly along Goa's tranquil mangrove rivers, backwaters, and calm estuaries rich with exotic birdlife.",
    image: "/images/service-kayaking.jpg",
    tag: "Water",
    features: ["Calm mangrove channels", "Birdwatching opportunities", "Double & single sit-on kayaks"],
  },
  {
    id: "scuba-diving",
    title: "Scuba Diving Package",
    listingCount: 1,
    highlight: "1 Island Dive Package",
    description: "Submerge into the marine wonderland around Grande Island with certified PADI divemasters and vibrant underwater reefs.",
    image: "/images/service-scuba-diving.jpg",
    tag: "Water",
    features: ["Island boat expedition", "Certified PADI divemasters", "Underwater photography included"],
  },
  {
    id: "dudhsagar-waterfall",
    title: "Dudhsagar Waterfall Trek Package",
    listingCount: 1,
    highlight: "1 Iconic Expedition",
    description: "The world-famous 'Sea of Milk' expedition. Trek alongside the roaring cascades, Bhagwan Mahavir Wildlife Sanctuary, and railway mist.",
    image: "/images/service-dudhsagar.jpg",
    tag: "Trek",
    features: ["World-renowned cascade", "Sanctuary wildlife trail", "Full day guided expedition"],
  },
];

export interface LocalExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  locationNote: string;
}

export const LOCAL_EXPERIENCES: LocalExperience[] = [
  {
    id: "farming-village-waterfall",
    title: "Farming with a Local",
    description: "Learn traditional farming, enjoy a home-cooked lunch, and visit a private village waterfall.",
    image: "/images/listings/IMG_9952.PNG",
    details: ["Traditional farm immersion", "Authentic Goan home-cooked lunch", "Private village waterfall visit"],
    locationNote: "South Goa Foothills",
  },
  {
    id: "horse-farm-treehouse",
    title: "Horse Farm & Riding Experience",
    description: "Horse riding, countryside farm experience, natural pool bath and home-cooked food.",
    image: "/images/listings/IMG_9906.PNG",
    details: ["Guided horse riding experience", "Natural spring pool & farm trails", "Fresh farm-to-table Goan lunch"],
    locationNote: "Sanguem Countryside",
  },
  {
    id: "cooking-natural-spring",
    title: "Cooking with Locals",
    description: "Cook local food on a traditional woodfire chulha, enjoy lunch and bathe at a natural spring.",
    image: "/images/listings/IMG_9956.PNG",
    details: ["Traditional woodfire chulha cooking", "Communal village lunch", "Refreshing natural spring pool"],
    locationNote: "Central Goa Spice Belt",
  },
  {
    id: "bakery-chandor",
    title: "Goan Poder & Bakery Experience",
    description: "Learn about traditional wood-fired Goan bread making in a village bakery in Chandor.",
    image: "/images/listings/IMG_9957.PNG",
    details: ["Heritage wood-fired bakery visit", "Traditional pao & poie making", "Tasting fresh crusty hot bread"],
    locationNote: "Chandor, South Goa",
  },
  {
    id: "fishing-boat-ride",
    title: "Fishing with a Local",
    description: "Experience authentic local net-casting fishing with fishermen and enjoy a scenic boat ride.",
    image: "/images/listings/IMG_9951.PNG",
    details: ["Local net casting demonstration", "Traditional wooden boat ride", "Scenic coastal sunrise cruise"],
    locationNote: "Goan Coastal Waters",
  },
];

export interface CustomerReview {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  trip: string;
  date?: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Rohit Sharma",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
    review: "Amazing experience! The waterfall trek was the highlight of our Goa trip. Highly recommended!",
    trip: "Waterfall Trek & Secret Pools",
  },
  {
    id: "rev-2",
    name: "Priya Desai",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    review: "The local cooking experience was unforgettable. Authentic Goan food, warm hospitality and such kind people.",
    trip: "Cooking with Locals & Natural Spring",
  },
  {
    id: "rev-3",
    name: "Amit Verma",
    avatar: "/images/avatars/avatar-4.jpg",
    rating: 5,
    review: "Professional, friendly and well-organized. The hidden beach trek was absolutely stunning! Our guide knew every turn.",
    trip: "Hidden Coastal Trails",
  },
  {
    id: "rev-4",
    name: "Sneha Kulkarni",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
    review: "Dudhsagar expedition was organized to perfection. Safety first, great local snacks, and breathtaking views of the falls.",
    trip: "Dudhsagar Waterfall Trek",
  },
  {
    id: "rev-5",
    name: "Vikramaditya Rao",
    avatar: "/images/avatars/avatar-6.jpg",
    rating: 5,
    review: "Exploring the ancient caves and hidden hill chapels felt like discovering an entirely different world of Goa. Outstanding!",
    trip: "Cave Exploration & Heritage Hike",
  },
  {
    id: "rev-6",
    name: "Ananya Sen",
    avatar: "/images/avatars/avatar-5.jpg",
    rating: 5,
    review: "The early morning poder bread experience in Chandor and village breakfast was the most genuine cultural trip we have ever taken.",
    trip: "Chandor Bakery & Local Village",
  },
];

export interface ReviewPlaceholder {
  id: string;
  source: string;
  status: "placeholder";
  placeholderLabel: string;
  activityCategory: string;
  intendedFormat: string;
}

export const REVIEW_SLOTS: ReviewPlaceholder[] = [
  {
    id: "review-slot-1",
    source: "TripAdvisor / Google Reviews",
    status: "placeholder",
    placeholderLabel: "Client Verified Review Slot #1",
    activityCategory: "Dudhsagar & Waterfall Treks",
    intendedFormat: "Ready for verified traveler feedback, 5-star rating, and customer review quote.",
  },
  {
    id: "review-slot-2",
    source: "Google My Business",
    status: "placeholder",
    placeholderLabel: "Client Verified Review Slot #2",
    activityCategory: "Chandor Bakery & Local Experiences",
    intendedFormat: "Ready for verified traveler feedback, 5-star rating, and customer review quote.",
  },
  {
    id: "review-slot-3",
    source: "Direct WhatsApp Feedback",
    status: "placeholder",
    placeholderLabel: "Client Verified Review Slot #3",
    activityCategory: "Offbeat Mountain & Cave Expeditions",
    intendedFormat: "Ready for verified traveler feedback, 5-star rating, and customer review quote.",
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: string;
  isClientAsset: boolean;
  replaceableLabel: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Waterfall Trek Smiles",
    caption: "Adventurers celebrating in front of a wild Goan jungle cascade.",
    image: "/images/gallery-waterfall-group.jpg",
    category: "Waterfalls",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-2",
    title: "Mountain Summit Sunset",
    caption: "Celebration at a misty mountain lookout point overlooking emerald valleys.",
    image: "/images/gallery-summit-view.jpg",
    category: "Peaks",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-3",
    title: "Jungle Cascade Plunge Pool",
    caption: "Adventurers wading into a crystal-clear natural plunge pool deep in the jungle.",
    image: "/images/gallery-waterfall-swim.jpg",
    category: "Waterfalls",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-4",
    title: "Turquoise Backwater Kayaking",
    caption: "Solo paddle through peaceful crystal Goan waterways and mangrove lagoons.",
    image: "/images/service-kayaking.jpg",
    category: "Kayaking",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-5",
    title: "Island Reef Scuba Diving",
    caption: "Submerging into vibrant underwater coral reefs near Grande Island.",
    image: "/images/service-scuba-diving.jpg",
    category: "Scuba",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-6",
    title: "Sunset Coastal Silhouette",
    caption: "Group of friends cheering with arms raised against the golden ocean sunset.",
    image: "/images/gallery-sunset-silhouette.jpg",
    category: "Sunset",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-7",
    title: "Canyon Viewpoint Lookout",
    caption: "Peaceful reflection high above the Western Ghats lakes and forest basins.",
    image: "/images/service-mountain-treks.jpg",
    category: "Trekking",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-8",
    title: "Traditional Goan Cooking",
    caption: "Cooking heirloom recipes with local village families in the spice hills.",
    image: "/images/exp-cooking-spring.jpg",
    category: "Culture",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-9",
    title: "Off-Road ATV Mud Trail",
    caption: "Kicking up red laterite mud on an adrenaline-charged quad bike course.",
    image: "/images/service-atv.jpg",
    category: "ATV",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
  {
    id: "gal-10",
    title: "Secret Beach Celebration",
    caption: "Friends enjoying pristine sand and sunshine on secluded southern shores.",
    image: "/images/gallery-beach-group.jpg",
    category: "Beaches",
    isClientAsset: false,
    replaceableLabel: "Trek Me @ Goa Guest Moment",
  },
];
