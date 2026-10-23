# VANTOUR — Premium Men's Store
MADE BY ("MUHAMMAD RAYAN ASIF")
LIVE NOW ("https://e-commerce-webui.vercel.app/")
**Define Your Presence.**

VANTOUR is a modern men's e-commerce website focused on watches, fragrances, shoes, and lifestyle essentials. It combines a clean interface, interactive product displays, responsive layouts, and a premium black, white, and red visual identity.

## ✨ Features

* **Premium Navbar:** Brand logo, navigation links, product search, shopping bag, and account access.
* **Skewed Product Carousel:** Animated product cards with tilt effects, navigation arrows, and mobile swipe support.
* **Trending Products:** Product cards featuring images, prices, discounts, ratings, and interactive buttons.
* **API Integration:** Fetches product data from the DummyJSON API.
* **Customer Reviews:** Review cards with customer names, ratings, product details, and animations.
* **Responsive Footer:** Quick links, customer care information, newsletter form, and social media placeholders.
* **Responsive Design:** Layouts adapted for desktop, tablet, and mobile screens.
* **Interactive Animations:** Hover effects, image zoom, card transitions, and entrance animations.

## 🛠️ Tech Stack

* React
* JavaScript (ES6+)
* CSS3
* Vite
* DummyJSON API
* HTML5

## 📁 Project Structure

```text
e-commerce-Vantour/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Footer/
│   │   ├── ReviewCards/
│   │   ├── Navbar/
│   │   ├── Products/
│   │   ├── ProductShowcase/
│   │   └── Slider/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure above represents the main project layout. Individual files may vary as development continues.*

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

Replace `YOUR_REPOSITORY_URL` with your GitHub repository URL.

### 2. Open the Project

```bash
cd e-commerce-Vantour
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🛍️ Product API

VANTOUR currently uses the DummyJSON Products API to retrieve sample product data.

**API endpoint:**

```text
https://dummyjson.com/products?limit=12
```

The application fetches product information, including available product details, prices, ratings, images, and discount percentages.

Products are sorted by discount percentage before being displayed.

**Important:** DummyJSON provides sample data for development. A production e-commerce application should use a suitable product database and backend API.

## 🎨 Design System

VANTOUR uses a premium visual theme.

| Element            | Colour    |
| ------------------ | --------- |
| Primary background | `#FFFFFF` |
| Footer background  | `#090909` |
| Brand accent       | `#D71920` |
| Primary text       | `#151515` |
| Secondary text     | `#A6A6A6` |

The design emphasizes clean product imagery, bold typography, subtle shadows, rounded cards, and smooth animations.

## 📱 Responsive Design

The website includes responsive styling for different screen sizes:

* Desktop: Multi-column product grids and spacious layouts.
* Tablet: Adjusted grids and spacing.
* Mobile: Compact product cards, responsive navigation, and touch-friendly controls.

## 🔮 Future Improvements

* User authentication and account management.
* Shopping cart with persistent state.
* Wishlist functionality.
* Product search and category filtering.
* Product detail pages.
* Backend integration and database storage.
* Secure checkout and payment gateway integration.
* Functional newsletter subscriptions.
* Real customer reviews and ratings.
* Product inventory management.
* Improved loading states and error handling.

## ⚠️ Development Notes

* Product data currently comes from a sample API.
* Cart interactions may require additional state management or backend integration.
* Newsletter functionality requires a subscription service or backend.
* Customer review examples should be replaced with genuine customer feedback before being presented as real testimonials.
* Navigation links should match the application's configured routes.

## 👨‍💻 Development

VANTOUR is built as a React-based front-end project using reusable components and custom CSS.

The project can be extended with a backend, database, authentication system, and payment integration as development progresses.

## 📄 License

No license has been specified yet. Add a suitable open-source license if you intend to allow others to reuse or modify this project.

---

**VANTOUR — Define Your Presence.**
