import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import ProductSection from './ProductSection';
import ProductPage from './ProductPage';
import OutOfStockPage from './OutOfStockPage';
import image1 from './asset/image.jpg'
import image2 from './asset/image3.jpg'
import image3 from './asset/image4.jpg'
import image4 from './asset/image5.jpg'
import image5 from './asset/image6.jpg'

const products = [
  {
    id: 1,
    image: image1,
    name: "Hydrasium Bouquet with...",
    price: "Rs. 1,900.00",
    category: "birthday"
  },
  {
    id: 2,
    image: image2,
    name: "Orchid Camelia with...",
    price: "Rs. 2,500.00",
    category: "birthday"
  },
  {
    id: 3,
    image: image3,
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "birthday"
  },
  {
    id: 4,
    image: image4,
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "birthday"
  },
  {
    id: 5,
    image: image5,
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    hasExtraImage: true,
    category: "birthday"
  },
  {
    id: 6,
    image: image5,
    name: "Hydrasium Bouquet with...",
    price: "Rs. 1,900.00",
    category: "anniversary"
  },
  {
    id: 7,
    image: image4,
    name: "Orchid Camelia with...",
    price: "Rs. 2,500.00",
    category: "anniversary"
  },
  {
    id: 8,
    image: image3,
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "anniversary"
  },
  {
    id: 9,
    image: image2,
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "anniversary"
  },
  {
    id: 10,
    image: image1,
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "anniversary"
  },
];

const shortDescription = "A delicate blend of lush hydrangea blooms, symbolizing heartfelt emotions and timeless beauty, perfect for any occasion.";
const longDescription = "This is a versatile and thoughtful gift suited for a variety of occasions. Its lush, voluminous blooms symbolize gratitude, heartfelt emotions, and deep understanding, making it an ideal choice for expressing appreciation or celebrating milestones. Whether you're attending a housewarming party, commemorating an anniversary, or offering comfort during difficult times, hydrangeas convey sincerity and warmth. Their rich symbolism also makes them a fitting gesture for rekindling relationships or showing support. With their vibrant hues and elegant presence, hydrangea bouquets bring joy and beauty to any setting, making them a cherished gift for loved ones.";

function App() {
  const birthdayProducts = products.filter(product => product.category === "birthday");
  const anniversaryProducts = products.filter(product => product.category === "anniversary");

  const MainContent = () => (
    <main className="max-w-[1152px] mx-auto flex overflow-hidden flex-col pt-12 bg-white">
      <Header />
      <Banner />
      <div className="px-16 max-md:px-5">
        <ProductSection title="Birthdays" products={birthdayProducts} />
        <ProductSection title="Anniversaries" products={anniversaryProducts} />
      </div>
    </main>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/bouquets" element={<MainContent />} />
        <Route
          path="/product/:id"
          element={<ProductPage products={products} shortDescription={shortDescription} longDescription={longDescription} />}
        />
        <Route path="/cakes" element={<OutOfStockPage category="Cakes" />} />
        <Route path="/cards" element={<OutOfStockPage category="Cards" />} />
        <Route path="/chocolates" element={<OutOfStockPage category="Chocolates" />} />
      </Routes>
    </Router>
  );
}

export default App;
