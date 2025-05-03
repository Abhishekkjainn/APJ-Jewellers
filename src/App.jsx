import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import '/src/assets/styles.css';
import Bottombar from './components/bottombar';
import Homescreen from './pages/homescreen';
import UpdatePrice from './pages/updateprices';
import Additem from './pages/additem';
import Menupage from './components/menupage';
import AddItemPage from './pages/additem';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Carousel />
      <Menupage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {activeTab === 'home' && <Homescreen />}
      {activeTab === 'price' && <UpdatePrice />}
      {activeTab === 'add' && <AddItemPage />}

      <Bottombar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
