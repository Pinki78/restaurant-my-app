import { Container, Card, Table , Image} from "react-bootstrap";
import { useSelector } from "react-redux";

const MyOrders = () => {
  const orders = useSelector((state) => state.orderReducer.orders);

  if (!orders || orders.length === 0) {
    return (
      <Container className="py-5">
        <h3>My Orders</h3>
        <p>No orders found.</p>
      </Container>
    );
  }

  const formatINR = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  return (
    <>
    <div className="bx-my-order-card">

      {orders.map((order) => (
        <Card key={order.id} className="mb-4">
          <Card.Body>
            <h5>Order ID: {order.id}</h5>
            <p>Status: {order.status}</p>
            <p>Date: {order.date}</p>

            <h6>Billing Details:</h6>
            <p>
              {order.billingAddress.firstName} {order.billingAddress.lastName}
            </p>
            <p>{order.billingAddress.address}</p>
            <p>Phone: {order.billingAddress.phone}</p>
            <p>Email: {order.billingAddress.email}</p>

            <h6 className="mt-3">Items:</h6>
            <Table bordered hover size="sm">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td> <Image src={item.foodImage} alt={item.title} fluid /></td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{formatINR(item.price)}</td>
                    <td>{formatINR(item.price * item.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>{formatINR(order.subTotal)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>GST (18%):</span>
              <span>{formatINR(order.gst)}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span>Total:</span>
              <span>{formatINR(order.total)}</span>
            </div>
          </Card.Body>
        </Card>
      ))}
      </div>
    </>
  );
};

export default MyOrders;
