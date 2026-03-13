const navLinks = [
    {
        id: "cocktails",
        title: "Mocktails",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "art",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const freshJuiceLists = [
    {
        name: "Mango Sunrise",
        country: "AE",
        detail: "500 ml",
        price: "$10",
    },
    {
        name: "Rose Lemonade",
        country: "MA",
        detail: "500 ml",
        price: "$12",
    },
    {
        name: "Pomegranate Bliss",
        country: "TR",
        detail: "400 ml",
        price: "$14",
    },
    {
        name: "Mint Jallab",
        country: "LB",
        detail: "500 ml",
        price: "$11",
    },
];

const mockTailLists = [
    {
        name: "Tropical Bloom",
        country: "US",
        detail: "500 ml",
        price: "$10",
    },
    {
        name: "Passionfruit Mint",
        country: "US",
        detail: "500 ml",
        price: "$12",
    },
    {
        name: "Citrus Glow",
        country: "CA",
        detail: "400 ml",
        price: "$11",
    },
    {
        name: "Lavender Fizz",
        country: "CA",
        detail: "400 ml",
        price: "$13",
    },
];

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly crafted & infused", // Changed from "shaken & stirred"
];

const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Artisanal blending in action", // Changed from "Mixology"
    "Freshly muddled flavors",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
        phone: "(555) 987-6543",
        email: "hello@puresips.com",
    },
};

const openingHours = [
    {day: "Mon–Thu", time: "11:00am – 12am"},
    {day: "Fri", time: "11:00am – 2am"},
    {day: "Sat", time: "9:00am – 2am"},
    {day: "Sun", time: "9:00am – 1am"},
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const allDrinks = [
    {
        id: 1,
        name: "Mint & Lime Mojito", // Removed "Virgin"
        image: "/images/drink1.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
            "Made with fresh mint, lime juice, and sparkling soda, this Mojito is easy to enjoy and full of character. Add a sugar rim for the perfect drink on summer nights.",
    },
    {
        id: 2,
        name: "Raspberry Fizz",
        image: "/images/drink2.png",
        title: "A Zesty Classic That Never Fails",
        description:
            "A refreshing classic that balances tangy lime, smooth sparkling water, and a touch of sweetness. Chilled or on the rocks—it’s always crisp & refreshing.",
    },
    {
        id: 3,
        name: "Violet Breeze",
        image: "/images/drink3.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
            "Made with blueberry, lime juice, and sparkling water, this breeze is easy to enjoy and full of character. Add a sugar rim for the perfect drink on summer nights.",
    },
    {
        id: 4,
        name: "Blue Lagoon",
        image: "/images/drink4.png",
        title: "Crafted With Care, Poured With Love",
        description:
            "Each drink is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
];

export {
    navLinks,
    freshJuiceLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allDrinks,
};