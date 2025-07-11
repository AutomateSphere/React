import img1 from '../../assets/img1.jpg';

export interface Restaurant {
    id: number;
    name: string;
    description: string;
    specialItem: string;
    rating: number;
    reviews: number;
    cuisine: string;
    priceRange: string;
    deliveryTime: string;
    location: string;
    isVeg: boolean;
    imgSrc: string;
}

export const restaurantData: Restaurant[] = [
    {
        id: 1,
        name: "The Golden Spoon",
        description: "Fine dining restaurant serving contemporary American cuisine with a focus on locally sourced ingredients.",
        specialItem: "Truffle Risotto",
        rating: 4.8,
        reviews: 245,
        cuisine: "American",
        priceRange: "$$$",
        deliveryTime: "45-60 mins",
        location: "Downtown",
        isVeg: false,
        imgSrc: img1
    },
    {
        id: 2,
        name: "Mama's Kitchen",
        description: "Family-owned Italian restaurant known for authentic pasta dishes and wood-fired pizzas.",
        specialItem: "Handmade Lasagna",
        rating: 4.6,
        reviews: 189,
        cuisine: "Italian",
        priceRange: "$$",
        deliveryTime: "30-45 mins",
        location: "Little Italy",
        isVeg: false,
        imgSrc: img1
    },
    {
        id: 3,
        name: "Spice Garden",
        description: "Authentic Indian restaurant offering traditional curries, biryanis, and tandoor specialties.",
        specialItem: "Butter Chicken",
        rating: 4.4,
        reviews: 156,
        cuisine: "Indian",
        priceRange: "$$",
        deliveryTime: "35-50 mins",
        location: "Curry Lane",
        isVeg: true,
        imgSrc: img1
    },
    {
        id: 4,
        name: "Ocean's Bounty",
        description: "Fresh seafood restaurant with daily catches and signature lobster dishes.",
        specialItem: "Grilled Salmon",
        rating: 4.7,
        reviews: 203,
        cuisine: "Seafood",
        priceRange: "$$$",
        deliveryTime: "40-55 mins",
        location: "Harbor District",
        isVeg: false,
        imgSrc: img1
    },
    {
        id: 5,
        name: "Green Leaf Cafe",
        description: "Healthy vegetarian and vegan options with organic ingredients and fresh smoothies.",
        specialItem: "Quinoa Buddha Bowl",
        rating: 4.3,
        reviews: 98,
        cuisine: "Vegetarian",
        priceRange: "$",
        deliveryTime: "20-35 mins",
        location: "Health District",
        isVeg: true,
        imgSrc: img1
    },
    {
        id: 6,
        name: "Tokyo Ramen House",
        description: "Traditional Japanese ramen shop with rich broths and fresh noodles made daily.",
        specialItem: "Tonkotsu Ramen",
        rating: 4.5,
        reviews: 167,
        cuisine: "Japanese",
        priceRange: "$$",
        deliveryTime: "25-40 mins",
        location: "Japan Town",
        isVeg: false,
        imgSrc: img1
    },
    {
        id: 7,
        name: "El Sombrero",
        description: "Vibrant Mexican cantina serving street tacos, burritos, and fresh guacamole.",
        specialItem: "Carnitas Tacos",
        rating: 4.2,
        reviews: 134,
        cuisine: "Mexican",
        priceRange: "$",
        deliveryTime: "25-40 mins",
        location: "Mission District",
        isVeg: false,
        imgSrc: img1
    },
    {
        id: 8,
        name: "Le Petit Bistro",
        description: "Charming French bistro offering classic dishes like coq au vin and escargot.",
        specialItem: "Beef Bourguignon",
        rating: 4.6,
        reviews: 178,
        cuisine: "French",
        priceRange: "$$$",
        deliveryTime: "50-65 mins",
        location: "French Quarter",
        isVeg: false,
        imgSrc: img1
    },
    {
        id: 9,
        name: "BBQ Pit Stop",
        description: "Smoky barbecue joint specializing in slow-cooked ribs, brisket, and pulled pork.",
        specialItem: "Smoked Brisket",
        rating: 4.4,
        reviews: 221,
        cuisine: "BBQ",
        priceRange: "$$",
        deliveryTime: "35-50 mins",
        location: "South Side",
        isVeg: false,
        imgSrc: img1
    },
    {
        id: 10,
        name: "Dragon Palace",
        description: "Upscale Chinese restaurant featuring Peking duck, dim sum, and Szechuan specialties.",
        specialItem: "Peking Duck",
        rating: 4.5,
        reviews: 192,
        cuisine: "Chinese",
        priceRange: "$$",
        deliveryTime: "30-45 mins",
        location: "Chinatown",
        isVeg: false,
        imgSrc: img1
    }
];

// Export the old name for backward compatibility
export const dummyData: Restaurant[] = restaurantData;