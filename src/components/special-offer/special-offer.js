import SpecialOfferinfo from "./special-offer-info"
import OfferList from "./offer-list";

const SpecialOffer =(props) => {
  const { PathUrl, ButtonName, ClassBtn, limit, Max_Length } = props;
  return (
    <>
    
        <SpecialOfferinfo
         limit={ limit}
         Max_Length={Max_Length}
        />

        <OfferList 
          limit='2'
         Max_Length={100} 
       
           col={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 }}
          />
    
    </>
  )
}

export default SpecialOffer