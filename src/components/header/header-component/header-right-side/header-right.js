import SearchBar from "../../../search/search-bar"
import CartHeader from "../cart-header/cart-header";
import UserInfoAccount from "./user-info"

const HeaderRight = ( props) => {
  const {isMobileOrTablet} = props;
  return (
    <>
        <div className='bx-heder-right-sce'>
            <SearchBar />
            <UserInfoAccount isMobileOrTablet={isMobileOrTablet} />
            <CartHeader />
        </div>
    </>
  )
}

export default HeaderRight