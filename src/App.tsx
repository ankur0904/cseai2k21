import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsThunk } from './store/productsSlice';
import { RootState, AppDispatch } from './store';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import './App.css';
import './styles/index.css';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Typing dispatch
  const status = useSelector((state: RootState) => state.products.status);
  const products = useSelector((state: RootState) => state.products.items);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode functionality
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Fetch products once the component mounts or status changes to 'idle'
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsThunk()); // Dispatch fetch action if status is idle
    }
  }, [dispatch, status]);

  // Apply dark mode to the HTML element based on state
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-center dark:text-white">Product Catalog</h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 border rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <SearchBar />

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error fetching products.</p>}
      {status === 'succeeded' && <ProductList products={products} />}
    </div>
  );
};

export default App;
