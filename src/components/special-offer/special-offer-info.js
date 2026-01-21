import { ButtonLink } from "../../components/button-box/button-link";

import LcoListLayout from "../../components/icon-list-layout/icon-list-layout";
import SectionHeadring from "../../components/seciton-headring/section-headring";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { BiSolidOffer } from "react-icons/bi";
import OfferList from "./offer-list";

const SpecialOfferinfo = (props) => {
  const { PathUrl, ButtonName, ClassBtn, limit, Max_Length } = props;

  return (
    <>
      <div className="bx-Special-info-wrapper wow fadeInLeft animated">
        <Row className="m-0 p-0">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="">
            <LcoListLayout
              IocnLayoutClass="bx-special"
              Icon={<BiSolidOffer />}
              IconText="Special Offer"
            />

            <SectionHeadring
              SectionHeadring="Delicious Meals, Cool Drinks, Happy Moments."
              SectionInfo={`Every bite is a delight, every drink uplifts the mood, and good company turns simple moments into cherished memories.`}
            />

            <ButtonLink
              PathUrl="/contact"
              ButtonName="Contact"
              ClassBtn="bx-btn-2"
            />
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="">
            <OfferList
             productMenuCLass='bx-product-list-wapper'
             col={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }}
            limit={limit} Max_Length={Max_Length} BxColClassName={'p-0'}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SpecialOfferinfo;
