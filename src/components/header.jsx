export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  // activeTab,
  setActiveTab,
}) {
  return (
    <div className="header">
      <div className="greeting">
        <img src="/amarsonslogo.png" alt="" className="greetlogo" />
        <div className="greettext">
          <div className="topgreet">Welcome Back</div>
          <div className="bottomgreet">Abhishek Jain</div>
        </div>
      </div>
      <div className="actions">
        <div
          className="actionbutton menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/menu.png" alt="MenuIcon" className="menubuttonicon" />
        </div>
      </div>
    </div>
  );
}
