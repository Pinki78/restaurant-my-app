import { Button, Image } from "react-bootstrap";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { useLocation } from "react-router-dom";
import { ButtonLink } from "../../../button-box/button-link";
import ButtonType from "../../../button-box/button";

const CartPopupDropdown = (props) => {
  const { handleCheckout,drawerOpen, cartItems, totalPrice, onRemoveItem, onClickCart } =
    props;

   const location = useLocation();

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

 

  return (
    <>
      <div className={`bx-cart-popup-dropdown ${drawerOpen ? "show" : ""}`}>
        <ul className="bx-cart-items-list">
          {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="bx-cart-items-img">
              <Image src={item.foodImage} alt={item.title} fluid />
            </div>

            <div className="bx-item-info">
              <span className="bx-item-name">{item.title}</span>
              <span className="bx-item-price">
                 {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(item.price)}
                 <TfiClose /> {item.quantity}
              </span>
            </div>

            <Button
              variant="danger"
              size="sm"
              onClick={() => onRemoveItem(item.id)}
              className="bx-remove"
            >
              <RiDeleteBin5Fill />
            </Button>
          </li>
        ))}
        </ul>

        <div className="cart-footer">



          <span>Total: {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(totalPrice)}</span>
          <div className="bx-cart-button-group">
            <ButtonLink 
            onClick={onClickCart}
            ButtonName='View Cart'
            PathUrl='/cart'

            />

            <ButtonType 
                ButtonType="button"
                ButtonName='CheckOut'
                ClassBtn2='bx-button-2'
                onClick={handleCheckout}
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPopupDropdown;
