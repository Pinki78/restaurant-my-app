import { Dropdown, Image } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { auth } from "../../../../assets/firebase/firebase"; // adjust path if needed
import { onAuthStateChanged, signOut } from "firebase/auth";

const UserInfoAccount = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  // const scrollToTop = () => {
  //   dispatch(setLoading(true)); // trigger Redux loader
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const getInitials = (name) => {
    if (!name) return "";

    const words = name.trim().split(" ");
    const initials = words.map((word) => word[0].toUpperCase()).join("");

    return initials.slice(0, 2);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/log-in");
    } catch (error) {
      console.error(error);
    }
  };

  const { isMobileOrTablet } = props;
  let IdDropdown = 0;

  const getIdMenu = (suffix = "") => {
    IdDropdown++;
    return `${IdDropdown}-${suffix}`;
  };

  const UserDropdownList = [
    {
      id: getIdMenu("down"),
      pathName: user ? "Log out" : "Log in",
      pathUrl: user ? "#" : "/log-in",
      action: user ? handleLogout : null,
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

  // const [user, setUser] = useState(null);
  return (
    <>
      <div className={`bx-userinfo-selector `}>
        <Dropdown
          className={`bx-nav-dropdown ${dropdownClass}`}
          show={isMobileOrTablet ? undefined : true}
        >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {user ? (
              user.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt="profile"
                  className="user-initials"
                />
              ) : (
                <div className="user-initials">
                  {getInitials(user.displayName || user.email)}
                </div>
              )
            ) : (
              <FaUserLarge />
            )}
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
              {UserDropdownList.map((list) => {
                const isActive = location.pathname === list.pathUrl;

                return (
                  <>
                    <Dropdown.Item
                      as="li"
                      key={list.id}
                      className={`${isActive ? "bx-active user-dropdown-item dropdown-item navbar-nav" : "user-dropdown-item dropdown-item navbar-nav"}`}
                      onClick={list.action}
                    >
                      {list.action ? (
                        <Link to="#" onClick={scrollToTop}>
                          <span>{list.pathName}</span>
                        </Link>
                      ) : (
                        <Link to={list.pathUrl} onClick={scrollToTop}>
                          <span>{list.pathName}</span>
                        </Link>
                      )}
                    </Dropdown.Item>
                  </>
                );
              })}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default UserInfoAccount;
