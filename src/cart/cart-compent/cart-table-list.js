import {  Table, Image } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux-store/store-redux-componets/cartSlice";
import { useNavigate } from "react-router-dom";

const GST_RATE = 0.18; // 18% GST

const CartTableList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.CartReducerStore.cartItems
  );

  // 🧮 Subtotal (quantity × price for all items)
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 🧾 GST amount
  const gstAmount = subTotal * GST_RATE;

  // 💰 Final total
  const finalTotal = subTotal + gstAmount;

  return (
    <>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Table className="bx-cart-table" responsive>
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <tr key={item.id}>
                     <td><Image src={item.foodImage} alt={item.title} fluid /></td>
                    <td><h6>{item.title}</h6></td>
                    <td><h6>
                        {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(item.price)}
                        </h6></td>

                    <td>
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>

                      <span style={{ margin: "0 10px" }}>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </td>

                    <td>₹{itemTotal.toFixed(2)}</td>

                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          {/* 🧾 Price Summary */}
          <div className="bx-cart-summary">
            <p>Subtotal: ₹{subTotal.toFixed(2)}</p>
            <p>GST (18%): ₹{gstAmount.toFixed(2)}</p>
            <h3>Total: ₹{finalTotal.toFixed(2)}</h3>

            <button onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartTableList;
