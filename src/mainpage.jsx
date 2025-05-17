// import { useState } from 'react';
// import './App.css';
// import Header from './components/header';
// import Carousel from './components/carousel';
// import '/src/assets/styles.css';
// import Bottombar from './components/bottombar';
// import Homescreen from './pages/homescreen';
// import UpdatePrice from './pages/updateprices';
// import Menupage from './components/menupage';
// import AddItemPage from './pages/additem';
// import ManageUsers from './pages/manageusers';
// import ProductDesc from './pages/productdesc';
// export default function Mainpage({ username, isAdmin, setIsLoggedIn }) {
//   const [activeTab, setActiveTab] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedPriceIndex, setSelectedPriceIndex] = useState(null);

//   const handlePriceClick = (item, index) => {
//     setSelectedItem(item);
//     setSelectedPriceIndex(index);
//     setActiveTab('productdesc');
//   };
//   return (
//     <>
//       <Header
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         username={username}
//       />
//       <Carousel />
//       <Menupage
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         setIsLoggedIn={setIsLoggedIn}
//         isAdmin={isAdmin}
//       />

//       {activeTab === 'home' && <Homescreen onPriceClick={handlePriceClick} />}
//       {activeTab === 'price' && <UpdatePrice />}
//       {activeTab === 'add' && <AddItemPage />}
//       {activeTab === 'users' && <ManageUsers />}
//       {activeTab === 'productdesc' && (
//         <ProductDesc
//           item={selectedItem}
//           priceIndex={selectedPriceIndex}
//           onBack={() => setActiveTab('home')}
//         />
//       )}

//       <Bottombar activeTab={activeTab} setActiveTab={setActiveTab} />
//     </>
//   );
// }

import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import '/src/assets/styles.css';
import Bottombar from './components/bottombar';
import Homescreen from './pages/homescreen';
import UpdatePrice from './pages/updateprices';
import Menupage from './components/menupage';
import AddItemPage from './pages/additem';
import ManageUsers from './pages/manageusers';
import ProductDesc from './pages/productdesc';

export default function Mainpage({ username, isAdmin, setIsLoggedIn }) {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(null);
  const [showReminder, setShowReminder] = useState(false);

  // Show popup once per day
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastReminderDate = localStorage.getItem('lastReminderDate');
    if (lastReminderDate !== today) {
      setShowReminder(true);
      localStorage.setItem('lastReminderDate', today);
    }
  }, []);

  const handlePriceClick = (item, index) => {
    setSelectedItem(item);
    setSelectedPriceIndex(index);
    setActiveTab('productdesc');
  };

  return (
    <>
      {/* Daily Reminder Popup */}
      {showReminder && (
        <div className="reminder-popup">
          <div className="popup-content">
            <h3>Update Gold Prices</h3>
            <p>
              Please update today's gold prices to ensure accurate quotations.
            </p>
            <div className="popup-buttons">
              <button onClick={() => setShowReminder(false)}>Cancel</button>
              <button
                onClick={() => {
                  setShowReminder(false);
                  setActiveTab('price');
                }}
              >
                Go to Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UI Components */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        username={username}
      />
      <Carousel />
      <Menupage
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
      />

      {activeTab === 'home' && <Homescreen onPriceClick={handlePriceClick} />}
      {activeTab === 'price' && <UpdatePrice />}
      {activeTab === 'add' && <AddItemPage />}
      {activeTab === 'users' && <ManageUsers />}
      {activeTab === 'productdesc' && (
        <ProductDesc
          item={selectedItem}
          priceIndex={selectedPriceIndex}
          onBack={() => setActiveTab('home')}
        />
      )}

      <Bottombar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
