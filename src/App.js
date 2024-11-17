import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import ProductSection from './ProductSection';
import ProductPage from './ProductPage';
import OutOfStockPage from './OutOfStockPage';

const products = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/027a5fe1601701441f3144211e9f9d89e73d153ceb4c701e5e83d9f38eadefd0?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Hydrasium Bouquet with...",
    price: "Rs. 1,900.00",
    category: "birthday"
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31b291ea77c840f4fca3181a7625dfa23899cf36bad26f5cfe5cf50f93b5b2f9?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Orchid Camelia with...",
    price: "Rs. 2,500.00",
    category: "birthday"
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7786e51c2362336f3c8bbf264a8b6df20ba7ebf90964097daa39d4b9baa7229?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "birthday"
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/06f916217bb1fd90cad7d8e80417e839db6967cb8ea817deb382d9c83fdc03e6?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "birthday"
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb5d6ccdcdb913f59e94febe7f780ac28e6fc3823897013e731e2bc08347872e?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    hasExtraImage: true,
    category: "birthday"
  },
  {
    id: 6,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/027a5fe1601701441f3144211e9f9d89e73d153ceb4c701e5e83d9f38eadefd0?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Hydrasium Bouquet with...",
    price: "Rs. 1,900.00",
    category: "anniversary"
  },
  {
    id: 7,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/31b291ea77c840f4fca3181a7625dfa23899cf36bad26f5cfe5cf50f93b5b2f9?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Orchid Camelia with...",
    price: "Rs. 2,500.00",
    category: "anniversary"
  },
  {
    id: 8,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b7786e51c2362336f3c8bbf264a8b6df20ba7ebf90964097daa39d4b9baa7229?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "anniversary"
  },
  {
    id: 9,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/06f916217bb1fd90cad7d8e80417e839db6967cb8ea817deb382d9c83fdc03e6?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
    name: "Hydrangea Easophagues...",
    price: "Rs. 800.00",
    category: "anniversary"
  },
  {
    id: 10,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb5d6ccdcdb913f59e94febe7f780ac28e6fc3823897013e731e2bc08347872e?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be",
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
