import SearchBar from "../../../search/search-bar"
import UserInfoAccount from "./user-info"


const HeaderRight = ( props) => {
  const {isMobileOrTablet} = props;
  return (
    <>
        <div className='bx-heder-right-sce'>
            <SearchBar />
            <UserInfoAccount isMobileOrTablet={isMobileOrTablet} />
            
        </div>
    </>
  )
}

export default HeaderRight