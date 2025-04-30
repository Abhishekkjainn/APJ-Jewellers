export default function Menupage({ isMenuOpen, setIsMenuOpen, setActiveTab }) {
  return (
    <div className={`menupage ${isMenuOpen ? 'menuopen' : 'menuclose'}`}>
      <div className="topmenubar">
        <div className="topmenubartag">Menu</div>
        <div
          className="topmenubarbutton"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/close.png" alt="Close button" className="closebutton" />
        </div>
      </div>
      <div className="menuitems">
        <div className="menuitem item1">
          <img src="/home.png" alt="Home Icon" className="itemicon" />
          <div className="itemtag">Home</div>
        </div>
        <div className="menuitem item1">
          <img src="/add.png" alt="Home Icon" className="itemicon" />
          <div className="itemtag">Add Products</div>
        </div>
        <div className="menuitem item1">
          <img src="/updateprice.png" alt="Home Icon" className="itemicon" />
          <div className="itemtag">Update Prices</div>
        </div>
        <div className="menuitem item1">
          <img src="/user.png" alt="Home Icon" className="itemicon" />
          <div className="itemtag">Manage Users</div>
        </div>
        <div className="menuitem item1">
          <img src="/exit.png" alt="Home Icon" className="itemicon" />
          <div className="itemtag">Logout</div>
        </div>
      </div>
      <div className="loggedintag">
        <div className="loggedininfo">Logged In As: Admin</div>
      </div>
    </div>
  );
}
