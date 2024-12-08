# Third Space

**Third Space** is a Svelte-based application designed to help users find, join, and create social spaces and events. This app makes connecting with others easier by providing tools to explore new spaces, join community events, and foster connections in your city.

---

## Features

### 🌌 **Landing Page**  
- **Hero Section:**
  - Inspires users to join and connect with others.
  - Highlights the app's core purpose: finding friends, attending events, dinners, or adventures.
  - Call-to-action buttons for surprise bookings or joining a space.
  
- **Dynamic Starfield Background:**
  - Immersive aesthetic that enhances the user experience.

- **Upcoming Events:**
  - Carousel display of upcoming events filtered by the selected city.
  - Cards with event details, including:
    - **Event Picture**
    - **Event Name**
    - **Date and Time**
    - **Location**
    - **Description**

---

### 🌍 **City Selection**
- Dropdown menu in the navigation bar to select a city.
- Updates the events displayed dynamically based on the current selection.

---

### 🚀 **Navigation**
- Seamlessly switch between:
  - **Main Page**: View events and app highlights.
  - **Other Spaces Page**: Explore more options and spaces (other spaces functionality).

---

### 📅 **Event Management**
- Upcoming events are displayed dynamically in a carousel.
- Each event includes rich media and a compact description for easy browsing.

---

### 🎨 **Responsive Design**
- Built using **ShadCN-Svelte** and **TailwindCSS** for modern and scalable UI.
- Fully responsive layout optimized for all device sizes.

---

### 🔄 **Dynamic Updates**
- State management using Svelte stores:
  - **Current City:** Controls the city context for displayed events.
  - **Events For Current City:** Dynamically filters events based on the city selected.

---

## Technologies Used

- **Svelte**: Frontend framework for building reactive and dynamic web applications.
- **ShadCN-Svelte**: Modular design system for consistent styling.
- **TailwindCSS**: Utility-first CSS framework for custom designs.
- **Embla Carousel**: Carousel library for event displays.
- **Lucide Icons**: Lightweight and modern icon library.

---

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/third-space.git
   cd third-space
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   ```plaintext
   http://localhost:5173
   ```

---

## Folder Structure

```plaintext
src/
├── assets/
│   └── logo.png
├── components/
│   ├── ui/
│   │   ├── button/
│   │   ├── card/
│   │   ├── carousel/
│   │   ├── dialog/
│   │   ├── input/
│   │   └── label/
│   └── pages/
│       ├── suprise-book.svelte
│       └── OtherSpaces.svelte
├── stores.js
├── App.svelte
└── main.js
```

---

## Key Components

- **Navigation Bar:**
  - Logo and links for switching between pages.
  - City selection dropdown.
  - Sign-up and login buttons.

- **Hero Section:**
  - Center-aligned promotional text.
  - Buttons for interacting with app features.

- **Event Carousel:**
  - Dynamic and reusable component for displaying upcoming events.

- **Other Spaces Page:**
  - Extensible section for exploring additional community spaces.

---

## Future Enhancements

1. **Integration with Maps API** for event location visualization.
2. **User Authentication** for personalizing experiences.
3. **Event Creation Page** for allowing users to host their events.
4. **Mobile App Integration** for a seamless cross-platform experience.
5. **AI-Powered Recommendations** for personalized event suggestions.

---

## Contributing

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request for review.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.