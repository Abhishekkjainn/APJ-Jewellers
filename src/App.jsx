import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import '/src/assets/styles.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <>
      <Carousel />
      <Header />
      {/* <div className="bottombar">
        <div className="tab active">
          <img src="/home.png" alt="Home" className="tabicon" />
          <div className="tabtag">Home</div>
        </div>
        <div className="tab active">
          <img src="/updateprice.png" alt="Home" className="tabicon" />
          <div className="tabtag">Update Price</div>
        </div>
        <div className="tab active">
          <img src="/add.png" alt="Home" className="tabicon" />
          <div className="tabtag">Add Item</div>
        </div>
      </div> */}
      <div className="bottombar">
        <div
          className={`tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <img src="/home.png" alt="Home" className="tabicon" />
          <div className="tabtag">Home</div>
        </div>
        <div
          className={`tab ${activeTab === 'price' ? 'active' : ''}`}
          onClick={() => setActiveTab('price')}
        >
          <img src="/updateprice.png" alt="Update Price" className="tabicon" />
          <div className="tabtag">Update Price</div>
        </div>
        <div
          className={`tab ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          <img src="/add.png" alt="Add" className="tabicon" />
          <div className="tabtag">Add Item</div>
        </div>
      </div>
    </>
  );
}

export default App;
