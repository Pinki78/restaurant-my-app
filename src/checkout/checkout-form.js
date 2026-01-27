import { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../redux-store/store-redux-componets/orderSlice"; // make sure this exists

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const GST_RATE = 0.18;

  // Cart Items from Redux
  const cartItems = useSelector(
    (state) => state.CartReducerStore.cartItems
  );

  // Form State for Billing
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Price Calculations
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const gstAmount = subTotal * GST_RATE;
  const finalTotal = subTotal + gstAmount;

  // Format INR currency
  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  // Handle Place Order
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const orderData = {
      id: Date.now(),
      items: cartItems,
      subTotal,
      gst: gstAmount,
      total: finalTotal,
      billingAddress: billing,
      status: "Placed",
      date: new Date().toLocaleString(),
    };

    dispatch(placeOrder(orderData)); // Save order in Redux
    navigate("/my-order");           // Go to My Orders page
  };

  return (
    <Row>
      {/* Billing Details */}
      <Col md={7}>
        <Card className="mb-4">
          <Card.Body>
            <h4 className="mb-3">Billing Details</h4>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="firstName"
                      value={billing.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lastName"
                      value={billing.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={billing.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  name="phone"
                  value={billing.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="address"
                  value={billing.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className="bx-btn-prim" variant="dark">
                Place Order
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>

      {/* Order Summary */}
      <Col md={5}>
        <Card>
          <Card.Body>
            <h4 className="mb-3">Your Order</h4>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>{formatINR(item.price * item.quantity)}</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>{formatINR(subTotal)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>GST (18%)</span>
              <span>{formatINR(gstAmount)}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>{formatINR(finalTotal)}</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CheckoutForm;
