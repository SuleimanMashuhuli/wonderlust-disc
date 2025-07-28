Comprehensive Prompt for Cursor AI: Integrating Diani Hotels into React Tours Website
Goal: Enhance the existing modern, responsive, and user-friendly tours company website by integrating comprehensive Diani hotel information across multiple sections and pages.

Core Requirements (from existing project):

Technology Stack: React.js (functional components, hooks), Tailwind CSS for styling.

Responsiveness: Fully responsive design for desktop, tablet, and mobile views.

Interactivity: Smooth animations, transitions, and interactive elements.

UI/UX: Clean, intuitive, and visually appealing interface.

Scenario 1: A Dedicated "Recommended Hotels" Page (/hotels)
This page will serve as a general resource for users planning trips to Diani, offering a curated list of recommended accommodations.

Page Requirements:

Header: "Recommended Hotels in Diani Beach"

Introduction: A brief paragraph explaining why these hotels are recommended (e.g., "We've curated a list of our top hotel recommendations in Diani to ensure a comfortable stay during your adventure.").

Hotel Listing:

Display the provided list of Diani hotels (see "Raw Hotel Data" below).

Structure for each hotel card:

Hotel Name (prominent)

Category (e.g., Luxury, Mid-Range, Budget) - Categorize the hotels based on their typical standing.

Brief Description (generate generic placeholder descriptions for each hotel)

Optional: "View Details" button (placeholder link or simply display more info on card)

Optional: Rating (e.g., 4.5/5 stars, placeholder)

Optional: Price Range indication (e.g., "$$$")

Display Layout: Use a responsive grid layout (2 or 3 columns on desktop, single column on mobile) for the hotel cards.

Filtering/Sorting (Recommended):

Implement filtering by Category (Luxury, Mid-Range, Budget).

Implement sorting by Name (A-Z).

Integration:

Add a new navigation link "Recommended Hotels" to the main Navigation Bar.

Create a new React component for the HotelsPage.

Utilize existing styling conventions (Tailwind CSS) from the project for all new elements.

Scenario 2: Linking Hotels to Specific Tour Detail Pages (/tours/:id)
This integration will highlight specific hotel recommendations relevant to individual tours.

Modification to Tour Detail Page:

New Section: Below the "Itinerary" or "Inclusions/Exclusions" section, add a new heading: "Recommended Accommodation" or "Stay Options".

Display Logic:

If the specific tour (e.g., a "Diani Beach Safari" tour) has associated recommended hotels, display them in this new section.

Assume each tour object in your mock data (from src/data/tours.js) can now have an optional recommendedHotelIds array, containing ids of hotels from your central dianiHotels.js data.

Hotel Card Display: For each recommended hotel, display a compact card including:

Hotel Name

Category

Brief Description (truncate if long)

Optional: Small image thumbnail

Optional: "Visit Website" button (placeholder link)

Component Reusability:

Consider creating a small, reusable HotelMiniCard component to display individual hotels within the tour detail page, which can also be adapted for the HotelsPage.

Scenario 3: A "Packages with Accommodation" Section/Filter (/tours)
This will allow users to easily find tours that explicitly include hotel stays.

Modification to Tours Listing Page:

New Filter Option: Add a checkbox or toggle in the filtering sidebar/top bar: "Includes Accommodation".

Display Logic:

When checked, filter the tours to show only those that have associated recommendedHotelIds (or a dedicated includesAccommodation: true flag in the tour data).

Tour Card Enhancement: For tours that include accommodation, subtly indicate this on the tour card (e.g., a small "Accommodation Included" badge).

Data Management: Centralized Hotel Data
New File: Create a new JavaScript file at src/data/dianiHotels.js.

Content: This file will store the Diani hotel data as an array of objects. Populate this array with the following hotel names. For each hotel, include id, name, category (categorize as Luxury, Mid-Range, or Budget based on general reputation), a generic description (placeholder text), and a placeholder imageUrl (e.g., /images/diani-hotel-1.jpg).

// src/data/dianiHotels.js
const dianiHotelsData = [
  // Luxury/High-End Resorts
  { id: 'h1', name: 'The Maji Beach Boutique Hotel', category: 'Luxury', description: 'Adults-only boutique hotel offering unparalleled luxury and personalized service.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Maji+Hotel' },
  { id: 'h2', name: 'Nomad Beach Resort', category: 'Luxury', description: 'Nestled in a pristine coastal forest, a serene escape with exquisite beachfront access.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Nomad+Resort' },
  { id: 'h3', name: 'Swahili Beach Resort', category: 'Luxury', description: 'A harmonious blend of nature and luxury, offering a unique Swahili experience.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Swahili+Beach' },
  { id: 'h4', name: 'Leopard Beach Resort & Spa', category: 'Luxury', description: 'A leading resort known for its lush gardens, vibrant atmosphere, and excellent amenities.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Leopard+Beach' },
  { id: 'h5', name: 'Diani Reef Beach Resort & Spa', category: 'Luxury', description: 'An upmarket beachfront resort with extensive facilities, including a spa and multiple dining options.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Diani+Reef' },
  { id: 'h6', name: 'Baobab Beach Resort & Spa', category: 'Luxury', description: 'An all-inclusive paradise set amidst tropical gardens, offering stunning ocean views.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Baobab+Resort' },
  { id: 'h7', name: 'Waterlovers Beach Resort', category: 'Luxury', description: 'An intimate and eco-friendly resort with panoramic ocean views and a focus on sustainability.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Waterlovers' },
  { id: 'h8', name: 'The Villa Luxury Suites Hotel', category: 'Luxury', description: 'Exclusive private villas offering a secluded and luxurious retreat.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Villa+Suites' },
  { id: 'h9', name: 'Pinewood Beach Resort and Spa', category: 'Luxury', description: 'A boutique hotel known for its tranquil ambiance, personalized service, and beautiful beachfront.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Pinewood' },
  { id: 'h10', name: 'Alfajiri Cliff Villa', category: 'Luxury', description: 'Considered one of the finest villas on the East African coast, offering ultimate privacy and luxury.', imageUrl: 'https://placehold.co/400x250/AEC6CF/000000?text=Alfajiri+Villa' },

  // Mid-Range to Boutique Hotels
  { id: 'h11', name: 'Diani Sea Lodge', category: 'Mid-Range', description: 'A popular beachfront resort offering comfortable accommodations and a lively atmosphere.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Diani+Sea+Lodge' },
  { id: 'h12', name: 'PrideInn Hotel Diani', category: 'Mid-Range', description: 'A modern hotel with good facilities, including an outdoor pool, suitable for both leisure and business.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=PrideInn+Diani' },
  { id: 'h13', name: 'Bahari Dhow Beach Villas', category: 'Mid-Range', description: 'Spacious villas offering a home-away-from-home experience with direct beach access.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Bahari+Dhow' },
  { id: 'h14', name: 'Ocean Village Club', category: 'Mid-Range', description: 'An all-inclusive club-style resort with a focus on activities and entertainment.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Ocean+Village' },
  { id: 'h15', name: 'Papillon Lagoon Reef Hotel', category: 'Mid-Range', description: 'Set on Diani Beach, offering a relaxed atmosphere with traditional Swahili decor and various activities.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Papillon+Reef' },
  { id: 'h16', name: 'Southern Palms Beach Resort', category: 'Mid-Range', description: 'A large resort with distinctive architecture, multiple pools, and a wide range of amenities.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Southern+Palms' },
  { id: 'h17', name: 'Jacaranda Indian Ocean Beach Resort', category: 'Mid-Range', description: 'A charming resort with a colonial feel, set amidst beautiful gardens and close to the beach.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Jacaranda' },
  { id: 'h18', name: 'Blue Marlin Beach Hotel', category: 'Mid-Range', description: 'Overlooking the Indian Ocean, a beachfront hotel with a tropical garden and outdoor pool.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Blue+Marlin' },
  { id: 'h19', name: 'Eleven Pearl Boutique Hotel & Spa', category: 'Mid-Range', description: 'A 4-star beachfront hotel offering a swimming pool, fitness center, and spa services.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Eleven+Pearl' },
  { id: 'h20', name: 'Sunset Villa Boutique Resort', category: 'Mid-Range', description: 'A serene boutique villa offering a private and relaxing atmosphere.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Sunset+Villa' },
  { id: 'h21', name: 'Seaclusion Diani', category: 'Mid-Range', description: 'A highly-rated property offering excellent service and comfortable accommodations.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Seaclusion' },
  { id: 'h22', name: 'Boxo Diani - Unique Beach Front Container Eco-Hotel', category: 'Mid-Range', description: 'A unique eco-friendly hotel built from containers, offering a modern and sustainable stay.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Boxo+Diani' },
  { id: 'h23', name: 'Diani Blue', category: 'Mid-Range', description: 'A charming property with a focus on tranquility and personalized guest experiences.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Diani+Blue' },
  { id: 'h24', name: 'Kivuli Villas', category: 'Mid-Range', description: 'Beautiful villas offering a comfortable and private stay close to the beach.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Kivuli+Villas' },
  { id: 'h25', name: 'Sonrisa Villas', category: 'Mid-Range', description: 'Offering beachfront accommodations with a swimming pool and garden.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Sonrisa+Villas' },
  { id: 'h26', name: 'Coco-De-Ville', category: 'Mid-Range', description: 'A well-regarded property offering good value and a pleasant stay.', imageUrl: 'https://placehold.co/400x250/B0E0E6/000000?text=Coco-De-Ville' },

  // Budget-Friendly/Apartments/Guesthouses
  { id: 'h27', name: 'Diani Gift Guest House', category: 'Budget', description: 'A simple and welcoming guesthouse offering affordable accommodation.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Gift+Guest+House' },
  { id: 'h28', name: 'Bright star Resort', category: 'Budget', description: 'A budget-friendly resort with basic amenities and a pool.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Bright+Star' },
  { id: 'h29', name: 'Mangro Hotel Diani Beach', category: 'Budget', description: 'An affordable hotel providing essential comforts for travelers.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Mangro+Hotel' },
  { id: 'h30', name: 'Diani Bay Resort', category: 'Budget', description: 'A straightforward resort offering good value for money.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+Bay' },
  { id: 'h31', name: 'Kenyaways Beach Resort', category: 'Budget', description: 'A popular choice for kitesurfing enthusiasts, offering a relaxed beachfront vibe.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Kenyaways' },
  { id: 'h32', name: 'Diani House', category: 'Budget', description: 'A charming property offering a home-like atmosphere.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+House' },
  { id: 'h33', name: 'Diani Luxe Villa', category: 'Budget', description: 'A villa offering a comfortable stay with good amenities.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+Luxe+Villa' },
  { id: 'h34', name: 'Soul Breeze Beach Resort', category: 'Budget', description: 'A 3-star property offering a pleasant stay near the beach.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Soul+Breeze' },
  { id: 'h35', name: 'DIANI BEACH GOLD APARTMENTS', category: 'Budget', description: 'Apartments providing a self-catering option for visitors.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+Gold+Apts' },
  { id: 'h36', name: 'Leshan Luxury Villas', category: 'Budget', description: 'Villas offering a comfortable stay, suitable for groups or families.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Leshan+Villas' },
  { id: 'h37', name: 'Raquel\'s Bliss Hotel Diani', category: 'Budget', description: 'A budget-friendly hotel providing basic accommodation.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Raquels+Bliss' },
  { id: 'h38', name: 'Micmoll Paradise', category: 'Budget', description: 'A simple and affordable accommodation option.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Micmoll+Paradise' },
  { id: 'h39', name: 'Pendo Villas Diani', category: 'Budget', description: 'Villas offering a basic and cost-effective stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Pendo+Villas' },
  { id: 'h40', name: 'Qua Bruce Apartment', category: 'Budget', description: 'An apartment offering a convenient and affordable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Qua+Bruce+Apt' },
  { id: 'h41', name: 'Becky Homes - Diani Beach', category: 'Budget', description: 'Homes providing a comfortable and private accommodation option.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Becky+Homes' },
  { id: 'h42', name: 'Upani in Daini', category: 'Budget', description: 'A property offering a good value stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Upani+in+Daini' },
  { id: 'h43', name: 'Captivating 1-bed Apartment, With a Nice Garden', category: 'Budget', description: 'A charming apartment with garden access.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=1-Bed+Apt' },
  { id: 'h44', name: 'Diani Campsite & Cottages', category: 'Budget', description: 'Offers both camping and cottage options for a rustic experience.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+Campsite' },
  { id: 'h45', name: 'Four shells apartments diani', category: 'Budget', description: 'Apartments offering a simple and affordable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Four+Shells' },
  { id: 'h46', name: 'Tradewinds Lodge', category: 'Budget', description: 'A budget-friendly lodge providing essential amenities.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Tradewinds+Lodge' },
  { id: 'h47', name: 'Kreyol Krib Diani', category: 'Budget', description: 'A unique and affordable accommodation option.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Kreyol+Krib' },
  { id: 'h48', name: 'Diani Doric Cottages', category: 'Budget', description: 'Cottages offering a quiet and comfortable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Doric+Cottages' },
  { id: 'h49', name: 'Borabora Luxury Tented Camp', category: 'Budget', description: 'A tented camp offering a unique glamping experience at an accessible price point.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Borabora+Camp' },
  { id: 'h50', name: 'Manyatta Holiday Apartments', category: 'Budget', description: 'Holiday apartments offering self-catering options.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Manyatta+Apts' },
  { id: 'h51', name: 'Lotfa Resort by Antares Hotels', category: 'Budget', description: 'A resort offering good value and a pleasant environment.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Lotfa+Resort' },
  { id: 'h52', name: 'Diani forest lodge', category: 'Budget', description: 'A lodge set in a forest environment, offering a peaceful retreat.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Forest+Lodge' },
  { id: 'h53', name: 'ASINS HOLIDAY INN HOTEL', category: 'Budget', description: 'A hotel offering basic amenities and a convenient location.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=ASINS+Hotel' },
  { id: 'h54', name: 'Kinondo Poa Beach Resort', category: 'Budget', description: 'A resort located near the beach, offering an outdoor pool.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Kinondo+Poa' },
  { id: 'h55', name: 'Hotel Breeze Bay', category: 'Budget', description: 'A beachfront hotel with a seasonal outdoor swimming pool.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Breeze+Bay' },
  { id: 'h56', name: 'Diani Hostel', category: 'Budget', description: 'A hostel offering budget-friendly dormitory and private rooms.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+Hostel' },
  { id: 'h57', name: 'Diani Home Stays', category: 'Budget', description: 'Private home accommodations for a local experience.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Home+Stays' },
  { id: 'h58', name: 'Miwa Budget Apartments', category: 'Budget', description: 'Affordable apartments close to the beach.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Miwa+Apts' },
  { id: 'h59', name: 'Sunrise apartments', category: 'Budget', description: 'Apartments offering a comfortable and affordable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Sunrise+Apts' },
  { id: 'h60', name: 'Stilts Diani Beach', category: 'Budget', description: 'Treehouse-style accommodation offering a unique and rustic experience.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Stilts+Diani' },
  { id: 'h61', name: 'Spice of the coast', category: 'Budget', description: 'A well-regarded budget option with a good atmosphere.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Spice+Coast' },
  { id: 'h62', name: 'Jambo Diani 1-Bedroom Apartment Close To', category: 'Budget', description: 'A convenient 1-bedroom apartment for budget travelers.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Jambo+Apt' },
  { id: 'h63', name: 'Beautiful and Charming 3-Bed room Villa in Diani', category: 'Budget', description: 'A spacious villa suitable for families or groups on a budget.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=3-Bed+Villa' },
  { id: 'h64', name: 'Cave Diani Holiday Apartments', category: 'Budget', description: 'Unique apartments offering a distinctive stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Cave+Apts' },
  { id: 'h65', name: 'Al Mahali Villas Diani Beach', category: 'Budget', description: 'Villas offering a comfortable stay with good amenities.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Al+Mahali+Villas' },
  { id: 'h66', name: 'Simba Apartments', category: 'Budget', description: 'Affordable apartments for a simple stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Simba+Apts' },
  { id: 'h67', name: 'The Pool House & The Colobus House, Bella Seaview', category: 'Budget', description: 'Houses offering good value with pool access and sea views.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Pool+House' },
  { id: 'h68', name: 'Coastal Comfort Hotel', category: 'Budget', description: 'A hotel providing basic comfort at an affordable price.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Coastal+Comfort' },
  { id: 'h69', name: 'Cosy Haven Holiday Homes', category: 'Budget', description: 'Holiday homes offering a cozy and budget-friendly option.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Cosy+Haven' },
  { id: 'h70', name: 'Sagwe Riviera Diani', category: 'Budget', description: 'An affordable property offering a pleasant stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Sagwe+Riviera' },
  { id: 'h71', name: 'Diani Palm B&b Resort', category: 'Budget', description: 'A bed and breakfast resort offering a casual stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+Palm+B&B' },
  { id: 'h72', name: 'African Dream Cottages', category: 'Budget', description: 'Cottages offering a rustic and affordable experience.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=African+Dream' },
  { id: 'h73', name: 'Queens Chateau Boutique Villa', category: 'Budget', description: 'A boutique villa offering a unique and affordable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Queens+Chateau' },
  { id: 'h74', name: 'Sheba Cottages', category: 'Budget', description: 'Cottages providing a simple and comfortable accommodation.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Sheba+Cottages' },
  { id: 'h75', name: 'Babylon Gardens', category: 'Budget', description: 'Gardens with accommodation, offering a peaceful environment.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Babylon+Gardens' },
  { id: 'h76', name: 'Pintadera Beach Lodge', category: 'Budget', description: 'A lodge offering a basic and affordable stay near the beach.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Pintadera+Lodge' },
  { id: 'h77', name: 'Retro Boutique Hotel Limited', category: 'Budget', description: 'A boutique hotel with a retro theme, offering an affordable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Retro+Hotel' },
  { id: 'h78', name: 'Villa Mongoose Forest Dream Resort', category: 'Budget', description: 'A resort set in a forest, offering a tranquil and affordable escape.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Mongoose+Resort' },
  { id: 'h79', name: 'Kijani Cottages Diani', category: 'Budget', description: 'Cottages offering a simple and comfortable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Kijani+Cottages' },
  { id: 'h80', name: 'Diani Breeze Villas', category: 'Budget', description: 'Villas offering a comfortable and breezy stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diani+Breeze' },
  { id: 'h81', name: 'Skippers Coliving', category: 'Budget', description: 'A co-living space offering affordable accommodation for travelers.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Skippers+Coliving' },
  { id: 'h82', name: 'Afrika Pearl & Spa', category: 'Budget', description: 'A property offering spa services at an accessible price point.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Afrika+Pearl' },
  { id: 'h83', name: 'Simba Oryx Beach Cottages', category: 'Budget', description: 'Cottages offering a simple and affordable beach stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Simba+Oryx' },
  { id: 'h84', name: 'Diplomat Diani Beach Resort', category: 'Budget', description: 'A resort offering basic amenities for a budget-friendly trip.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Diplomat+Resort' },
  { id: 'h85', name: 'Baobab Beach House Bed & Breakfast', category: 'Budget', description: 'A bed and breakfast offering a cozy and affordable stay.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Baobab+B&B' },
  { id: 'h86', name: 'Kitu Kidogo Cottages', category: 'Budget', description: 'Small cottages offering a simple and private accommodation.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Kitu+Kidogo' },
  { id: 'h87', name: 'A wonderful Beach property in Diani Beach Kenya,a dream holiday place', category: 'Budget', description: 'A general description for a pleasant beach property.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Wonderful+Beach' },
  { id: 'h88', name: 'A Sentimental Villa With a Swimmingpool Near Beach', category: 'Budget', description: 'A villa offering a sentimental charm with a pool near the beach.', imageUrl: 'https://placehold.co/400x250/C0C0C0/000000?text=Sentimental+Villa' },
];

Update Existing Data:

Update your existing src/data/tours.js mock data. For relevant Diani tours, add a new array field, e.g., recommendedHotelIds: ['h1', 'h11'], linking to the ids from dianiHotels.js. Also, add an includesAccommodation: true boolean flag for tours that conceptually include accommodation.

Instructions for Cursor AI:
Modular Development: Create separate, reusable React components for the HotelsPage, HotelCard, and HotelMiniCard.

Data Handling: Ensure the dianiHotelsData is correctly imported and used across the relevant components.

Routing: Implement the /hotels route using react-router-dom.

Styling: Apply Tailwind CSS classes consistently to ensure the new components blend seamlessly with the existing website design, maintaining responsiveness and visual appeal.

Filtering/Sorting Logic: Implement the filtering and sorting functionality for the HotelsPage and the "Includes Accommodation" filter on the ToursListingPage.

Comments: Add clear and extensive comments to explain the code logic, component structure, data flow, and styling choices for all new and modified files.

Placeholder Content: Continue to use meaningful placeholder text and images where actual content isn't available, beyond what's provided in the dianiHotelsData.