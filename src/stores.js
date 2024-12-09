import { writable, derived } from 'svelte/store';

// Store for the currently selected city
export const currentCity = writable('New York'); // Default city

// Store for events grouped by city
export const cityEvents = writable({
  "New York": [
    {
      picture: "/src/assets/ww_walk.jpg",
      event_name: "Winter Wonderland Walk",
      time: "6:00 PM",
      date: "2024-12-05",
      location: "Central Park",
      description: "Join us for a winter wonderland walk in Central Park!"
    },
    {
      picture: "/src/assets/boradway.jpg",
      event_name: "Broadway Backstage",
      time: "7:00 PM",
      date: "2024-12-06",
      location: "Broadway Theater",
      description: "An exclusive backstage tour of Broadway's latest hit."
    },
    {
      picture: "/src/assets/ice_skate.jpg",
      event_name: "Holiday Ice Skating",
      time: "5:30 PM",
      date: "2024-12-07",
      location: "Rockefeller Center",
      description: "Enjoy a magical evening ice skating at the iconic Rockefeller Center rink!"
    },
    {
      picture: "/src/assets/market.jpeg",
      event_name: "Christmas Market Extravaganza",
      time: "10:00 AM",
      date: "2024-12-08",
      location: "Union Square",
      description: "Explore festive holiday booths, crafts, and treats at the Christmas Market."
    },
    {
      picture: "/src/assets/hlt_hero.jpg",
      event_name: "Holiday Lights Tour",
      time: "7:30 PM",
      date: "2024-12-09",
      location: "Dyker Heights",
      description: "Take a tour of the extravagant holiday lights displays in Dyker Heights!"
    },
    {
      picture: "/src/assets/gingerbread.jpg",
      event_name: "Gingerbread House Decorating",
      time: "2:00 PM",
      date: "2024-12-10",
      location: "The Lodge at Park Avenue",
      description: "Get creative with family and friends by decorating your own gingerbread house."
    },
    {
      picture: "/src/assets/New_years.jpg",
      event_name: "New Year's Eve Fireworks Show",
      time: "11:00 PM",
      date: "2024-12-31",
      location: "Times Square",
      description: "Ring in the new year with a dazzling fireworks display in the heart of Times Square!"
    }    
  ],
  "San Francisco": [
    {
      picture: "https://example.com/image3.jpg",
      event_name: "Yoga in the Park",
      time: "5:00 PM",
      date: "2024-12-07",
      location: "Golden Gate Park",
      description: "A relaxing yoga session at Golden Gate Park."
    },
    {
      picture: "https://example.com/image4.jpg",
      event_name: "Bay Cruise",
      time: "8:00 PM",
      date: "2024-12-08",
      location: "Pier 39",
      description: "Nighttime cruise around San Francisco Bay."
    }
  ],
  "Los Angeles": [
    {
      picture: "https://example.com/image5.jpg",
      event_name: "Stargazing at Griffith Observatory",
      time: "3:00 PM",
      date: "2024-12-09",
      location: "Griffith Observatory",
      description: "Stargazing and astronomy talks at the observatory."
    },
    {
      picture: "https://example.com/image6.jpg",
      event_name: "Hollywood Bowl Concert",
      time: "6:30 PM",
      date: "2024-12-10",
      location: "Hollywood Bowl",
      description: "Outdoor concert under the stars."
    }
  ]
});

// Derived store for events in the currently selected city
export const eventsForCurrentCity = derived(
  [currentCity, cityEvents],
  ([$currentCity, $cityEvents]) => $cityEvents[$currentCity] || []
);

export const newEvent = writable({
  picture: null,
  eventName: "",
  place: "",
  time: "",
  description: ""
});
