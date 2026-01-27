import { Table, Image, Button } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa6";
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

  const cartItems = useSelector((state) => state.CartReducerStore.cartItems);

  // 🧮 Subtotal (quantity × price for all items)
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
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
                    <td>
                      <Image src={item.foodImage} alt={item.title} fluid />
                    </td>
                    <td>
                      <h6>{item.title}</h6>
                    </td>
                    <td>
                      <h6>
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item.price)}
                      </h6>
                    </td>

                    <td>
                      <div className="">
                        <div className="qty-controls">
                          <Button
                            className="bx-minus"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            <FaMinus />
                          </Button>
                          <span className="qty">{item.quantity}</span>
                          <Button
                            onClick={() => dispatch(increaseQuantity(item.id))}
                            className="bx-plus"
                          >
                            <FaPlus />
                          </Button>
                        </div>
                      </div>
                    </td>

                    <td>
                      <h6>
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(itemTotal)}
                      </h6>
                    </td>

                    <td>
                      <Button className="bx-btn-prim"  onClick={() => dispatch(removeFromCart(item.id))}>
                        <span>Remove</span>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          {/* 🧾 Price Summary */}
          <div className="bx-cart-summary">
            <p>
              Subtotal:
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(subTotal)}
            </p>
            <p>GST (18%):{new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(gstAmount)} </p>
            <h3>
              Total:
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(finalTotal)}
            </h3>

            <Button className="bx-btn-prim"  onClick={() => navigate("/checkout")}>
             <span> Proceed to Checkout</span>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default CartTableList;
