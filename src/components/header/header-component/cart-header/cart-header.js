import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import CartPopupDropdown from "./cart-popup-dropdown";
import { motion, AnimatePresence } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../../redux-store/store-redux-componets/cartSlice";
import { useNavigate } from "react-router-dom";

const CartHeader = () => {
const navigate = useNavigate();

  const cartItems = useSelector((state) => state.CartReducerStore.cartItems);
  const totalPrice = useSelector((state) => state.CartReducerStore.totalPrice);
  const dispatch = useDispatch();

const totalQty = cartItems.reduce(
  (sum, item) => sum + item.quantity,
  0
);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCartDrawerOpen = () => {
    setDrawerOpen(prev => !prev);
  };

 const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleClickCart = () => {
     navigate("/cart");  
    setDrawerOpen(false); // optionally close drawer on click
  };

const handleCheckout= () => {
     navigate("/checkout");  
    setDrawerOpen(false); // optionally close drawer on click
  };


  return (
    <div className="bx-cart-preview">
      <Button
        className="bx-cart-button-count"
        onClick={handleCartDrawerOpen}
      >
        <MdShoppingCart />
        <span className="bx-cart-item-count">{totalQty}</span>
      </Button>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="bx-motion-dropdown"
          >
             {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <CartPopupDropdown drawerOpen={drawerOpen}
               cartItems={cartItems}
              totalPrice={totalPrice}
              onRemoveItem={handleRemoveItem}
              onClickCart={handleClickCart}
              handleCheckout={handleCheckout}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartHeader;
