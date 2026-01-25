import { Container } from "react-bootstrap";

import { ButtonLink } from "../button-box/button-link";
import LcoListLayout from "../icon-list-layout/icon-list-layout";
import SectionHeadrTitel from "../seciton-headring/section-headring";



const HeadringButtonContainer = props => {
    const {Icon, IconText , ClassContainer ,ClassBtn, SectionHeadr, HeadringClass, PathUrl,  ButtonName, } = props;
  return (
    <>
    
   
          <div className={`bx-headring-button ${ClassContainer || ""}`}>
            <div className="bx-headring-our">
              <LcoListLayout
                Icon={Icon}
                IconText={IconText}
              />

              <SectionHeadrTitel
                SectionHeadr={SectionHeadr}
                HeadringClass={ HeadringClass}

              />

            </div>
            <ButtonLink
              PathUrl={ PathUrl}
              ButtonName={ ButtonName}
              ClassBtn={ClassBtn}
            />
          </div>
     
    
    </>
  )
}



export default HeadringButtonContainer