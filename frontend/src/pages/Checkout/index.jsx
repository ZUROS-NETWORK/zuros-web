import { useParams } from "react-router-dom";
import './styles.css'
export const Checkout = () => {
  const params = useParams() 
  console.log(params.basketId)
  return (
     <iframe className="checkout-section" src={`https://pay.tebex.io/${params.basketId}`} frameBorder="0" scrolling="auto"></iframe>
  );
};