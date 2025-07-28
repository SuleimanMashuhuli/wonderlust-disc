**Goal:** Build a modern, responsive, and user-friendly tours company website using React.js.

**Core Requirements:**
1.  **Technology Stack:** React.js (functional components, hooks), Tailwind CSS for styling.
2.  **Responsiveness:** Fully responsive design for desktop, tablet, and mobile views.
3.  **Interactivity:** Smooth animations, transitions, and interactive elements.
4.  **UI/UX:** Clean, intuitive, and visually appealing interface.

**Pages/Sections Required:**

### 1. Home Page (`/`)
* **Hero Section:**
    * Large, captivating background image/video related to travel.
    * Prominent headline: "Discover Your Next Adventure"
    * Call-to-action (CTA) button: "Explore Tours" (links to `/tours`)
    * Search bar for tours (optional, but good to include: destination, dates, number of travelers).
* **Featured Tours Section:**
    * Grid or carousel displaying 3-5 popular/featured tours.
    * Each tour card should include: image, title, brief description, price (e.g., "From $XXX"), and a "View Details" button.
* **About Us/Why Choose Us Section:**
    * Brief text explaining the company's mission/values.
    * 3-4 key selling points (e.g., "Experienced Guides," "Sustainable Travel," "24/7 Support") with icons.
* **Testimonials Section:**
    * Carousel or grid of 2-3 customer testimonials (quote, customer name, optional rating).
* **Call to Action (Footer CTA):**
    * Encourages users to subscribe to a newsletter or contact for custom tours.

### 2. Tours Listing Page (`/tours`)
* **Header:** "Our Exciting Tours"
* **Filtering/Sorting Options (Sidebar or Top Bar):**
    * Destination (e.g., Asia, Europe, Africa)
    * Activity Type (e.g., Hiking, Cultural, Wildlife)
    * Price Range (slider or dropdown)
    * Duration (e.g., 1-3 days, 4-7 days)
    * Sort by: Price (low to high/high to low), Popularity, Duration.
* **Tour Cards Display:**
    * Grid layout of all available tours.
    * Each card similar to featured tours: image, title, brief description, price, "View Details" button.
    * Pagination if there are many tours.

### 3. Tour Detail Page (`/tours/:id`)
* **Hero Section:** Large image of the specific tour.
* **Tour Title & Price:** Prominently displayed.
* **Overview Section:**
    * Description of the tour.
    * Key highlights (bullet points or small cards with icons).
    * Duration, group size, difficulty level.
* **Itinerary:** Day-by-day breakdown of activities.
* **Inclusions/Exclusions:** What's included and what's not.
* **Gallery:** Image carousel of the tour.
* **Reviews/Ratings:** Display average rating and individual customer reviews.
* **Booking Form/CTA:**
    * Select date, number of travelers.
    * "Book Now" button. (For simplicity, this can be a placeholder or lead to a confirmation message).
* **Related Tours:** Suggestions for similar tours.

### 4. About Us Page (`/about`)
* **Company Story:** Detailed history and mission.
* **Team Section:** Photos and brief bios of key team members.
* **Values/Philosophy:** What the company stands for.

### 5. Contact Us Page (`/contact`)
* **Contact Form:** Fields for Name, Email, Subject, Message.
* **Contact Information:** Phone number, email address, physical address (if applicable).
* **Map Integration (Optional):** Placeholder for a map.
* **Social Media Links:** Icons linking to social profiles.

### 6. Global Components:
* **Navigation Bar (Header):**
    * Logo (left).
    * Navigation links: Home, Tours, About Us, Contact Us.
    * "Book Now" or "Sign In" button (optional).
* **Footer:**
    * Company name, copyright.
    * Quick links (e.g., Privacy Policy, Terms of Service).
    * Social media icons.

**Styling & Aesthetics (Tailwind CSS):**
* **Color Palette:** Suggest a palette (e.g., earthy tones, blues, greens for travel).
* **Typography:** Use a clean, readable font (e.g., Inter, Poppins).
* **Cards:** Use rounded corners, subtle shadows, and hover effects.
* **Buttons:** Modern, slightly rounded, clear call-to-action styling.
* **Animations:** Use Tailwind's utility classes for smooth transitions on hover, focus, etc.

**Data Management (Mock Data):**
* For initial development, use mock data (e.g., an array of tour objects) directly within the components or in a separate `data.js` file. Each tour object should have: `id`, `title`, `description`, `price`, `duration`, `image_url`, `destination`, `activity_type`, `itinerary`, `inclusions`, `exclusions`, `reviews`, etc.

**Instructions for Cursor AI:**
* **Break down the project:** Start with the basic React app structure, then implement global components (Navbar, Footer).
* **Prioritize pages:** Build the Home page first, then Tours Listing, then Tour Detail, and finally About Us/Contact Us.
* **Modular Components:** Create reusable React components for things like `TourCard`, `HeroSection`, `TestimonialCard`, `FilterSidebar`, etc.
* **State Management:** Use `useState` and `useEffect` hooks for managing component-level state and fetching mock data.
* **Routing:** Implement basic client-side routing using `react-router-dom` (if Cursor supports it, otherwise use simple conditional rendering for page switching).
* **Comments:** Add clear comments to explain the code logic, component structure, and styling choices.
* **Placeholder Content:** Use meaningful placeholder text and images where actual content isn't available.
* **Error Handling:** Basic error boundaries or display messages for data loading issues (if applicable).
