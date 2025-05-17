import { useState } from 'react';
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
export default function Mainpage() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(null);

  const handlePriceClick = (item, index) => {
    setSelectedItem(item);
    setSelectedPriceIndex(index);
    setActiveTab('productdesc');
  };
  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Carousel />
      <Menupage
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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
