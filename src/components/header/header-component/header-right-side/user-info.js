import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";

const UserInfoAccount = (props) => {
  const { isMobileOrTablet } = props;
  let IdDropdown = 0;

  const getIdMenu = (suffix = "") => {
    IdDropdown++;
    return `${IdDropdown}-${suffix}`;
  };

  const UserDropdownList = [
    {
      id: getIdMenu("down"),
      pathName: "Sign in",
      pathUrl: "/sign-in",
    },

    {
      id: getIdMenu("down"),
      pathName: "My account",
      pathUrl: "/my-account",
    },

    {
      id: getIdMenu("down"),
      pathName: "Wishlist",
      pathUrl: "/wishlist",
    },
  ];
  const dropdownClass = isMobileOrTablet
    ? "bx-mobile-dropdown"
    : "bx-pc-dropdown";
  return (
    <>
      <div className={`bx-userinfo-selector `}>
        <Dropdown
          className={`bx-nav-dropdown ${dropdownClass}`}
          show={isMobileOrTablet ? undefined : true}
        >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaUserLarge />
          </Dropdown.Toggle>
          <Dropdown.Menu
            as="ul"
            className="bx-user-dropdown-menu dropdown-menu"
            style={
              isMobileOrTablet
                ? {
                    transform: "translate3d(0px, 38.4px, 0px)",
                    position: "relative",
                  }
                : { position: "relative" }
            }
          >
            <div className="bx-user-dropdown-div">
              {UserDropdownList.map((list) => (
                
                  <Dropdown.Item
                    as="li"
                    key={list.id}
                    className="user-dropdown-item dropdown-item navbar-nav"
                  >
                    <Link to={list.pathUrl}>
                      <span>{list.pathName}</span>
                    </Link>
                  </Dropdown.Item>
                
              ))}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default UserInfoAccount;
