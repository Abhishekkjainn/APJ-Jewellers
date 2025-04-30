export default function Menupage({ isMenuOpen, setIsMenuOpen, setActiveTab }) {
  return (
    <div className={`menupage ${isMenuOpen ? 'menuopen' : 'menuclose'}`}>
      <div className="close" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        x
      </div>
    </div>
  );
}
