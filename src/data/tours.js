export const tours = [
  {
    id: 1,
    title: "Maasai Mara Safari Adventure",
    description: "Experience the wild beauty of Kenya's most famous wildlife reserve. Witness the Great Migration and encounter the Big Five in their natural habitat.",
    price: 1200,
    duration: "3 days",
    image_url: "/lioness.jpg",
    destination: "Kenya",
    activity_type: "Wildlife Safari",
    difficulty: "Easy",
    group_size: "6-12 people",
    highlights: [
      "Game drives in open-top vehicles",
      "Witness the Great Migration",
      "Luxury tented accommodation",
      "Professional safari guides",
      "All meals included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description: "Arrive at Nairobi, transfer to Maasai Mara, evening game drive"
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Early morning and afternoon game drives, optional village visit"
      },
      {
        day: 3,
        title: "Final Safari & Departure",
        description: "Morning game drive, breakfast, transfer back to Nairobi"
      }
    ],
    inclusions: [
      "All transportation",
      "Accommodation in luxury tents",
      "All meals (breakfast, lunch, dinner)",
      "Professional safari guide",
      "Park entrance fees",
      "Game drives"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        comment: "Absolutely incredible experience! The guides were knowledgeable and we saw so much wildlife."
      },
      {
        id: 2,
        name: "Michael Chen",
        rating: 4,
        comment: "Great safari experience. The accommodation was comfortable and the food was excellent."
      }
    ],
    featured: true
  },
  {
    id: 2,
    title: "Amboseli Elephant Safari",
    description: "Get up close with majestic elephants against the stunning backdrop of Mount Kilimanjaro in this unforgettable safari experience.",
    price: 950,
    duration: "2 days",
    image_url: "/elephant.jpg",
    destination: "Kenya",
    activity_type: "Wildlife Safari",
    difficulty: "Easy",
    group_size: "4-8 people",
    highlights: [
      "Elephant viewing opportunities",
      "Mount Kilimanjaro views",
      "Bird watching",
      "Cultural village visits",
      "Luxury lodge accommodation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Safari",
        description: "Arrive at Amboseli, afternoon game drive focusing on elephants"
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Early morning and evening game drives, cultural experience"
      }
    ],
    inclusions: [
      "Transportation from Nairobi",
      "Luxury lodge accommodation",
      "All meals",
      "Professional guide",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 3,
        name: "Emma Wilson",
        rating: 5,
        comment: "The elephants were magnificent! Seeing them with Kilimanjaro in the background was breathtaking."
      }
    ],
    featured: true
  },
  {
    id: 3,
    title: "Diani Beach Paradise",
    description: "Relax on pristine white sand beaches and enjoy water sports, snorkeling, and coastal adventures in this tropical paradise.",
    price: 800,
    duration: "4 days",
    image_url: "/many.jpg",
    destination: "Kenya",
    activity_type: "Beach & Water Sports",
    difficulty: "Easy",
    group_size: "2-10 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h1', 'h11', 'h12', 'h13', 'h14'],
    highlights: [
      "Pristine white sand beaches",
      "Snorkeling and diving",
      "Water sports activities",
      "Beachfront accommodation",
      "Sunset dhow cruises"
    ],
    itinerary: [
      {
        day: 1,
        title: "Beach Arrival",
        description: "Arrive at Diani Beach, check-in, beach relaxation"
      },
      {
        day: 2,
        title: "Water Adventures",
        description: "Snorkeling trip, water sports, beach activities"
      },
      {
        day: 3,
        title: "Island Exploration",
        description: "Visit nearby islands, dhow cruise, sunset viewing"
      },
      {
        day: 4,
        title: "Final Day",
        description: "Beach relaxation, optional activities, departure"
      }
    ],
    inclusions: [
      "Beachfront hotel accommodation",
      "All meals",
      "Snorkeling equipment",
      "Water sports activities",
      "Dhow cruise"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities"
    ],
    reviews: [
      {
        id: 4,
        name: "David Brown",
        rating: 4,
        comment: "Beautiful beaches and great water activities. Perfect for relaxation and adventure."
      }
    ],
    featured: true
  },
  {
    id: 4,
    title: "Ol Pejeta Rhino Conservation",
    description: "Visit the largest black rhino sanctuary in East Africa and learn about conservation efforts while spotting these magnificent creatures.",
    price: 750,
    duration: "1 day",
    image_url: "/rhino.webp",
    destination: "Kenya",
    activity_type: "Conservation Safari",
    difficulty: "Easy",
    group_size: "2-6 people",
    highlights: [
      "Rhino conservation education",
      "Big Five viewing",
      "Chimpanzee sanctuary",
      "Guided walking safari",
      "Conservation talks"
    ],
    itinerary: [
      {
        day: 1,
        title: "Conservation Safari",
        description: "Morning arrival, guided safari, conservation education, evening departure"
      }
    ],
    inclusions: [
      "Transportation from Nairobi",
      "Professional guide",
      "Conservation education",
      "Lunch",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 5,
        name: "Lisa Anderson",
        rating: 5,
        comment: "Educational and inspiring. Great to see conservation in action and the rhinos up close."
      }
    ],
    featured: false
  },
  {
    id: 5,
    title: "Zanzibar Cultural Tour",
    description: "Explore the rich history and culture of Zanzibar, from Stone Town's narrow streets to spice plantations and pristine beaches.",
    price: 1100,
    duration: "5 days",
    image_url: "/5-1-243x300.jpeg",
    destination: "Tanzania",
    activity_type: "Cultural Tour",
    difficulty: "Easy",
    group_size: "4-12 people",
    highlights: [
      "Stone Town exploration",
      "Spice plantation tour",
      "Beach relaxation",
      "Cultural experiences",
      "Historical sites"
    ],
    itinerary: [
      {
        day: 1,
        title: "Stone Town Arrival",
        description: "Arrive in Stone Town, guided walking tour, dinner at local restaurant"
      },
      {
        day: 2,
        title: "Cultural Immersion",
        description: "Spice plantation tour, local market visit, traditional cooking class"
      },
      {
        day: 3,
        title: "Beach Day",
        description: "Transfer to beach resort, water activities, relaxation"
      },
      {
        day: 4,
        title: "Island Adventure",
        description: "Boat trip to nearby islands, snorkeling, sunset cruise"
      },
      {
        day: 5,
        title: "Final Day",
        description: "Beach relaxation, optional activities, evening departure"
      }
    ],
    inclusions: [
      "Hotel accommodation",
      "All meals",
      "Professional guide",
      "Cultural activities",
      "Transportation"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities"
    ],
    reviews: [
      {
        id: 6,
        name: "Robert Taylor",
        rating: 4,
        comment: "Fascinating culture and history. The spice tour was incredible and the beaches are beautiful."
      }
    ],
    featured: true
  },
  {
    id: 6,
    title: "Mount Kenya Trek",
    description: "Challenge yourself with a trek up Mount Kenya, Africa's second-highest peak, offering stunning alpine scenery and diverse wildlife.",
    price: 1500,
    duration: "6 days",
    image_url: "/hg.jpg",
    destination: "Kenya",
    activity_type: "Trekking",
    difficulty: "Moderate",
    group_size: "4-8 people",
    highlights: [
      "Alpine scenery",
      "Mountain wildlife",
      "Summit attempt",
      "Professional guides",
      "Mountain huts"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Preparation",
        description: "Arrive at base camp, equipment check, acclimatization"
      },
      {
        day: 2,
        title: "First Ascent",
        description: "Begin trek, reach first hut, evening briefing"
      },
      {
        day: 3,
        title: "High Camp",
        description: "Continue ascent, reach high camp, rest and acclimatize"
      },
      {
        day: 4,
        title: "Summit Day",
        description: "Early morning summit attempt, descend to high camp"
      },
      {
        day: 5,
        title: "Descent",
        description: "Continue descent, overnight at lower camp"
      },
      {
        day: 6,
        title: "Final Descent",
        description: "Complete descent, transfer back to Nairobi"
      }
    ],
    inclusions: [
      "Professional mountain guides",
      "All accommodation",
      "All meals",
      "Safety equipment",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal equipment",
      "Tips"
    ],
    reviews: [
      {
        id: 7,
        name: "James Wilson",
        rating: 5,
        comment: "Challenging but incredibly rewarding. The guides were excellent and the views were spectacular."
      }
    ],
    featured: false
  },
  {
    id: 7,
    title: "Tsavo East & West Safari Adventure",
    description: "Explore Kenya's largest national park complex, featuring diverse landscapes from arid plains to volcanic hills and natural springs.",
    price: 1300,
    duration: "4 days",
    image_url: "/rhino2.webp",
    destination: "Kenya",
    activity_type: "Wildlife Safari",
    difficulty: "Easy",
    group_size: "6-12 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h1', 'h11', 'h12'],
    highlights: [
      "Red elephants of Tsavo",
      "Mzima Springs",
      "Volcanic landscapes",
      "Rhino sanctuary",
      "Diverse wildlife"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tsavo East Arrival",
        description: "Arrive at Tsavo East, afternoon game drive focusing on red elephants"
      },
      {
        day: 2,
        title: "Tsavo East Safari",
        description: "Full day exploring the vast plains and wildlife of Tsavo East"
      },
      {
        day: 3,
        title: "Tsavo West Transfer",
        description: "Transfer to Tsavo West, visit Mzima Springs, afternoon game drive"
      },
      {
        day: 4,
        title: "Tsavo West & Departure",
        description: "Morning game drive in Tsavo West, visit rhino sanctuary, departure"
      }
    ],
    inclusions: [
      "Transportation between parks",
      "Luxury lodge accommodation",
      "All meals",
      "Professional guide",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 8,
        name: "Maria Rodriguez",
        rating: 5,
        comment: "Amazing diversity of landscapes and wildlife. The red elephants were incredible to see."
      }
    ],
    featured: true
  },
  {
    id: 8,
    title: "Lake Nakuru Bird Paradise",
    description: "Discover the pink paradise of Lake Nakuru, famous for its flamingos and significant rhino sanctuary.",
    price: 900,
    duration: "2 days",
    image_url: "/rhino.webp",
    destination: "Kenya",
    activity_type: "Bird Watching",
    difficulty: "Easy",
    group_size: "4-8 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h13', 'h14', 'h15'],
    highlights: [
      "Thousands of flamingos",
      "Rhino sanctuary",
      "Bird watching",
      "Lake views",
      "Photography opportunities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Lake Nakuru Arrival",
        description: "Arrive at Lake Nakuru, afternoon game drive and bird watching"
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Morning and evening game drives, focus on birds and rhinos"
      }
    ],
    inclusions: [
      "Lodge accommodation",
      "All meals",
      "Professional guide",
      "Bird watching equipment",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 9,
        name: "David Thompson",
        rating: 4,
        comment: "Spectacular bird watching experience. The flamingos were breathtaking."
      }
    ],
    featured: false
  },
  {
    id: 9,
    title: "Samburu Special Five Safari",
    description: "Journey to northern Kenya to encounter the unique 'Samburu Special Five' in this rugged wilderness.",
    price: 1400,
    duration: "3 days",
    image_url: "/cheetah.jpg",
    destination: "Kenya",
    activity_type: "Wildlife Safari",
    difficulty: "Easy",
    group_size: "4-8 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h16', 'h17', 'h18'],
    highlights: [
      "Samburu Special Five",
      "Grevy's zebra",
      "Reticulated giraffe",
      "Beisa oryx",
      "Gerenuk antelope"
    ],
    itinerary: [
      {
        day: 1,
        title: "Samburu Arrival",
        description: "Arrive at Samburu, afternoon game drive in search of Special Five"
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Morning and evening game drives, focus on unique northern species"
      },
      {
        day: 3,
        title: "Final Safari & Departure",
        description: "Morning game drive, cultural village visit, departure"
      }
    ],
    inclusions: [
      "Luxury tented camp",
      "All meals",
      "Professional guide",
      "Cultural experience",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 10,
        name: "Sarah Chen",
        rating: 5,
        comment: "Incredible to see the Special Five! The Grevy's zebra was my favorite."
      }
    ],
    featured: true
  },
  {
    id: 10,
    title: "Aberdare Forest Adventure",
    description: "Explore the high-altitude Aberdare National Park with its dense forests, moorlands, and elusive bongo antelope.",
    price: 1100,
    duration: "3 days",
    image_url: "/hg.jpg",
    destination: "Kenya",
    activity_type: "Forest Safari",
    difficulty: "Moderate",
    group_size: "4-6 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h19', 'h20', 'h21'],
    highlights: [
      "Dense forest exploration",
      "Bongo antelope",
      "Waterfalls",
      "Moorland landscapes",
      "High-altitude wildlife"
    ],
    itinerary: [
      {
        day: 1,
        title: "Aberdare Arrival",
        description: "Arrive at Aberdare, afternoon forest walk and wildlife viewing"
      },
      {
        day: 2,
        title: "Forest Exploration",
        description: "Full day exploring forests and moorlands, waterfall visits"
      },
      {
        day: 3,
        title: "Final Day",
        description: "Morning forest walk, departure"
      }
    ],
    inclusions: [
      "Forest lodge accommodation",
      "All meals",
      "Professional guide",
      "Forest walks",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 11,
        name: "Michael Brown",
        rating: 4,
        comment: "Beautiful forest environment. The waterfalls were spectacular."
      }
    ],
    featured: false
  },
  {
    id: 11,
    title: "Nairobi National Park City Safari",
    description: "Experience the unique Nairobi National Park, the only national park in the world within a capital city.",
    price: 600,
    duration: "1 day",
    image_url: "/lioness.jpg",
    destination: "Kenya",
    activity_type: "City Safari",
    difficulty: "Easy",
    group_size: "2-8 people",
    includesAccommodation: false,
    highlights: [
      "City skyline backdrop",
      "Big Five viewing",
      "Convenient location",
      "Half-day option",
      "Photography opportunities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi Safari",
        description: "Morning game drive, lunch at park restaurant, afternoon game drive"
      }
    ],
    inclusions: [
      "Transportation from Nairobi",
      "Professional guide",
      "Lunch",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 12,
        name: "Lisa Wang",
        rating: 4,
        comment: "Amazing to see wildlife with the city skyline in the background!"
      }
    ],
    featured: false
  },
  {
    id: 12,
    title: "Meru National Park Wilderness",
    description: "Explore the wild and rugged Meru National Park, famously associated with the 'Born Free' story.",
    price: 1200,
    duration: "3 days",
    image_url: "/elephant.jpg",
    destination: "Kenya",
    activity_type: "Wildlife Safari",
    difficulty: "Moderate",
    group_size: "4-8 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h22', 'h23', 'h24'],
    highlights: [
      "Rugged wilderness",
      "Born Free history",
      "Diverse wildlife",
      "Less crowded",
      "Authentic experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Meru Arrival",
        description: "Arrive at Meru National Park, afternoon game drive"
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Morning and evening game drives, explore diverse landscapes"
      },
      {
        day: 3,
        title: "Final Safari & Departure",
        description: "Morning game drive, visit historical sites, departure"
      }
    ],
    inclusions: [
      "Luxury tented camp",
      "All meals",
      "Professional guide",
      "Historical tour",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 13,
        name: "Robert Johnson",
        rating: 5,
        comment: "Authentic wilderness experience. The Born Free connection made it special."
      }
    ],
    featured: false
  },
  {
    id: 13,
    title: "Shimba Hills Coastal Safari",
    description: "Discover the unique coastal rainforest of Shimba Hills, home to the rare sable antelope.",
    price: 800,
    duration: "2 days",
    image_url: "/many.jpg",
    destination: "Kenya",
    activity_type: "Forest Safari",
    difficulty: "Easy",
    group_size: "4-8 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h25', 'h26', 'h27'],
    highlights: [
      "Coastal rainforest",
      "Sable antelope",
      "Waterfalls",
      "Coastal views",
      "Unique ecosystem"
    ],
    itinerary: [
      {
        day: 1,
        title: "Shimba Hills Arrival",
        description: "Arrive at Shimba Hills, afternoon forest walk and wildlife viewing"
      },
      {
        day: 2,
        title: "Full Day Exploration",
        description: "Morning and evening walks, waterfall visits, coastal views"
      }
    ],
    inclusions: [
      "Forest lodge accommodation",
      "All meals",
      "Professional guide",
      "Forest walks",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 14,
        name: "Emma Davis",
        rating: 4,
        comment: "Beautiful coastal forest. The sable antelope was a rare treat to see."
      }
    ],
    featured: false
  },
  {
    id: 14,
    title: "Hell's Gate Adventure",
    description: "Experience the unique Hell's Gate National Park where you can walk or cycle among wildlife.",
    price: 700,
    duration: "1 day",
    image_url: "/rhino.webp",
    destination: "Kenya",
    activity_type: "Adventure Safari",
    difficulty: "Moderate",
    group_size: "2-6 people",
    includesAccommodation: false,
    highlights: [
      "Walking safari",
      "Cycling among wildlife",
      "Dramatic gorges",
      "Hot springs",
      "Active adventure"
    ],
    itinerary: [
      {
        day: 1,
        title: "Hell's Gate Adventure",
        description: "Morning cycling safari, gorge walk, hot springs visit, afternoon game drive"
      }
    ],
    inclusions: [
      "Bicycle rental",
      "Professional guide",
      "Lunch",
      "Park fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 15,
        name: "Tom Anderson",
        rating: 5,
        comment: "Amazing to cycle among zebras and giraffes! The gorge was spectacular."
      }
    ],
    featured: false
  },
  {
    id: 15,
    title: "Laikipia Conservancy Experience",
    description: "Experience exclusive safari in Laikipia's private conservancies, home to significant rhino populations.",
    price: 2000,
    duration: "4 days",
    image_url: "/lioness.jpg",
    destination: "Kenya",
    activity_type: "Luxury Safari",
    difficulty: "Easy",
    group_size: "2-6 people",
    includesAccommodation: true,
    recommendedHotelIds: ['h1', 'h2', 'h3'],
    highlights: [
      "Private conservancy",
      "Rhino conservation",
      "Exclusive experience",
      "Luxury accommodation",
      "Community benefits"
    ],
    itinerary: [
      {
        day: 1,
        title: "Conservancy Arrival",
        description: "Arrive at Laikipia conservancy, afternoon game drive"
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Morning and evening game drives, focus on rhinos"
      },
      {
        day: 3,
        title: "Conservation Activities",
        description: "Visit rhino sanctuary, community projects, evening game drive"
      },
      {
        day: 4,
        title: "Final Safari & Departure",
        description: "Morning game drive, conservation talk, departure"
      }
    ],
    inclusions: [
      "Luxury conservancy lodge",
      "All meals and drinks",
      "Professional guide",
      "Conservation activities",
      "Community visits"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    reviews: [
      {
        id: 16,
        name: "Jennifer Smith",
        rating: 5,
        comment: "Exclusive and luxurious experience. The rhino conservation work was inspiring."
      }
    ],
    featured: true
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Hiazoo Safaris exceeded all my expectations. The Maasai Mara safari was absolutely incredible - we saw the Big Five and the Great Migration. The guides were knowledgeable and the accommodation was luxurious.",
    image: "/lioness.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment: "The Amboseli elephant safari was a dream come true. Seeing elephants with Mount Kilimanjaro in the background was breathtaking. The service was impeccable throughout.",
    image: "/elephant.jpg"
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 4,
    comment: "Our Zanzibar cultural tour was perfect. We learned so much about the local culture and history. The spice plantation tour was fascinating and the beaches were pristine.",
    image: "/5-1-243x300.jpeg"
  }
];

export const companyInfo = {
  name: "Hiazoo Safaris",
  mission: "To provide unforgettable safari experiences that connect travelers with Africa's wild beauty while promoting conservation and sustainable tourism.",
  values: [
    {
      title: "Experienced Guides",
      description: "Our professional guides have years of experience and deep knowledge of wildlife and local culture.",
      icon: "👨‍🏫"
    },
    {
      title: "Sustainable Travel",
      description: "We promote responsible tourism that benefits local communities and protects the environment.",
      icon: "🌱"
    },
    {
      title: "24/7 Support",
      description: "Our team is available around the clock to ensure your journey is smooth and enjoyable.",
      icon: "🛟"
    },
    {
      title: "Luxury Accommodation",
      description: "We partner with the finest lodges and camps to provide comfortable and authentic experiences.",
      icon: "🏕️"
    }
  ],
  contact: {
    phone: "+254 700 123 456",
    email: "info@hiazoo-safaris.com",
    address: "Nairobi, Kenya",
    social: {
      facebook: "https://facebook.com/hiazoosafaris",
      instagram: "https://instagram.com/hiazoosafaris",
      twitter: "https://twitter.com/hiazoosafaris"
    }
  }
}; 