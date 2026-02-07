import { SERVICE_LISTS } from "../../api-data/service-list-data/service-data";
import {  Row,  Col } from "react-bootstrap";

const ServiceList = ( props) => {

const {limit, Max_Length, serviceClass} = props;

const displayedItems = limit ? SERVICE_LISTS.slice(0, limit) : SERVICE_LISTS;







  return (
    <>
    <div className={`bx-service-items-list ${serviceClass}`}>
      <Row as="ul" className="p-0 " >
        {displayedItems.map((items)=>(
             <Col xs={6} sm={6} md={4} xxl={4} as="li" className="list-group-item px-2" key={items.id}>
              <div className="bx-services wow fadeInUp animated">
                <div className="fluidBox">
                  <div className="service-icon">
                    <span>{items.svIcon}</span>
                  </div>
                  <h3 className="title">{items.title }</h3>
                  <p className="description">
                    {items.description.length > Max_Length ? `${items.description.substring(0, Max_Length)}...` : items.description}
                    
                  </p>
                </div>
              </div>
            </Col>
        ))}
      </Row>
      </div>
    </>
  );
};

export default ServiceList;
