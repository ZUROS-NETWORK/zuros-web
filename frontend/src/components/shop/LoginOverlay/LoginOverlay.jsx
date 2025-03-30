import "./LoginOverlay.css";
import { useCheckout } from "../../../context/CheckoutContext";

export const LoginOverlay = () => {
    const { OverlayOpen, overlayContent } = useCheckout();

    if (!OverlayOpen) return null;

    return (
        <div className="checkout-overlay checkout-overlay--visible">
            {overlayContent}
            <div className="checkout-overlay-spinner"></div>
        </div>
    );
};
