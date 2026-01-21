

import TopHeader from "./header-component/top-header"
import MediumHeader from "./header-component/medium-header"

const Header = () => {



  return (
    <>

      <header className={`bx-header`}>
          <TopHeader />
          <MediumHeader />
          
      </header>
    
    </>
  )
}

export default Header