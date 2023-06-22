import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import products from './data/products.js';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicsPage.js';

import './App.css';

function App() {

  const [food, setFoodToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <h1>Matthew Cheng</h1>
        <div class="nav-container">
        <Nav />
        </div>
      </header>
      <main>
        <section>
          <Routes>
            <Route path="/" exact element={<HomePage />}/>
            <Route path="/gallery" element={<GalleryPage />}/>
            <Route path="/order" element={<OrderPage products={products}/>}/>
            <Route path="/staff" element={<StaffPage />}/>
            <Route path="/log" element={<LogPage setFood={setFoodToEdit} />} />
            <Route path="/add-nutrition" element={<CreatePage />} />
            <Route path="/edit-nutrition" element={<EditPage foodToEdit={food} /> } />
            <Route path="/topics" element={<TopicsPage />} />
          </Routes>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Matthew Cheng. All rights reserved.</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
