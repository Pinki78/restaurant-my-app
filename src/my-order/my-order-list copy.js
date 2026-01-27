import { Container, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyOrderList = (props) => {
  const orders = useSelector(
    (state) => state.orderReducer.orders
  );

  return (
    <>
      <div className="bx-my-order-card">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <div >
            <h5>Order #{order.id}</h5>
            <p>Total: ₹{order.total}</p>
            <p>Status: {order.status}</p>
          </div>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default MyOrderList;
