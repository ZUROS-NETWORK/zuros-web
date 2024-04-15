import "./BurguerButton.css";
export const BurguerButton = ({isOpen}) => {

  return (
    <div className={`nav-mobile-icon ${isOpen ? 'open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  );
};