import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import '/src/assets/styles.css';
import Bottombar from './components/bottombar';
import Homescreen from './pages/homescreen';
import UpdatePrice from './pages/updateprices';
import Additem from './pages/additem';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <Header />
      <Carousel />

      {/* Conditional rendering */}
      {activeTab === 'home' && <Homescreen />}
      {activeTab === 'price' && <UpdatePrice />}
      {activeTab === 'add' && <Additem />}

      <Bottombar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
