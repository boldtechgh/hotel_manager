import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faBell,
  faBuilding,
  faCalendar,
  faCalendarAlt,
  faCogs,
  faDashboard,
  faDoorOpen,
  faHouse,
  faMagnifyingGlass,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  useProSidebar,
  menuClasses,
} from "react-pro-sidebar";
import { BrandLogo } from "../Logo";
import "./layout.styles.scss";
import { Button, Form, Navbar, Nav } from "react-bootstrap";
import { Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import UserPhoto from "../../images/user.png";
import { UserAuth } from "../firebase/AuthContext";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";

const Layout = (props) => {
  const { children } = props;
  const { collapseSidebar, rtl } = useProSidebar();
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [bookingsSubMenu, setBookingsSubMenu] = useState(() => {
    if (
      window.location.pathname === "/bookings" ||
      window.location.pathname === "/checkin"
    )
      return true;
  });
  const [roomsSubMenu, setRoomsSubMenu] = useState(() => {
    if (
      window.location.pathname === "/room-list" ||
      window.location.pathname === "/room-type"
    )
      return true;
  });

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        direction: rtl ? "rtl" : "ltr",
      }}
    >
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#363740",
            width: "100%",
          },
          [`.${menuClasses.container}`]: {
            backgroundColor: "#363740",
          },
          [`.${menuClasses.button}`]: {
            "&:hover": {
              backgroundColor: "rgb(230, 230, 230)",
              color: "#779341",
            },
          },
        }}
      >
        <div className="sb-title">
          <FontAwesomeIcon
            className="menu-bars"
            onClick={() => collapseSidebar()}
            icon={faBars}
          />
          <BrandLogo position="relative" hideLogo color="#fff" />
        </div>
        <div className="hotel-dropdown">
          <FormInput inputType="select">
            <option value="">Select hotel</option>
          </FormInput>
        </div>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0 || level === 1)
                return {
                  color: active ? "#779341" : "rgb(230, 230, 230)",
                  backgroundColor: active ? "rgb(230, 230, 230)" : "#363740",
                };
            },
          }}
        >
          <MenuItem
            active={window.location.pathname === "/dashboard/dashboard"}
            routerLink={<Link to="/dashboard/dashboard" />}
            icon={<FontAwesomeIcon icon={faDashboard} />}
          >
            DashBoard
          </MenuItem>

          <SubMenu
            label="Bookings"
            icon={<FontAwesomeIcon icon={faCalendarAlt} />}
            open={bookingsSubMenu}
          >
            <MenuItem
              active={window.location.pathname === "/bookings"}
              routerLink={<Link to="/bookings" />}
              icon={<FontAwesomeIcon icon={faDoorOpen} />}
            >
              All Bookings
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/checkin"}
              routerLink={<Link to="/checkin" />}
              icon={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Check in
            </MenuItem>
            <MenuItem
              routerLink={<Link to="/checkout" />}
              icon={<FontAwesomeIcon icon={faArrowLeft} />}
            >
              Check Out
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Rooms"
            icon={<FontAwesomeIcon icon={faHouse} />}
            open={roomsSubMenu}
          >
            <MenuItem
              active={window.location.pathname === "/room-list"}
              routerLink={<Link to="/room-list" />}
            >
              All rooms
            </MenuItem>
            <MenuItem
              active={window.location.pathname === "/room-type"}
              routerLink={<Link to="/room-type" />}
            >
              Room Types
            </MenuItem>
          </SubMenu>
          <SubMenu label="Settings" icon={<FontAwesomeIcon icon={faCogs} />}>
            <MenuItem
              routerLink={<Link to="/dashboard/hotels" />}
              icon={<FontAwesomeIcon icon={faBuilding} />}
            >
              Hotels
            </MenuItem>

            <MenuItem
              routerLink={<Link to="/dashboard/staff" />}
              icon={<FontAwesomeIcon icon={faUsers} />}
            >
              Staff
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main style={{ width: "100%" }}>
        <div className="filter">
          <Navbar bg="light" expand="md" className="mb-3" fixed>
            <Container fluid>
              {/* <Navbar.Brand href="#"><BrandLogo hideLogo /></Navbar.Brand> */}
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-4 my-lg-3"
                  style={{
                    maxHeight: "9vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                  navbarScroll
                >
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    {/* <Button variant="success"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button> */}
                    <CustomButton width="50px" height="40px">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </CustomButton>
                  </Form>
                </Nav>
                <Nav style={{ paddingRight: "50px" }}>
                  <NavDropdown
                    className="notifications"
                    title={<FontAwesomeIcon icon={faBell} />}
                    id="navbarScrollingDropdown"
                    align="end"
                  ></NavDropdown>

                  <div className="user-photo">
                    <img
                      src={user?.photoURL}
                      alt="user"
                      crossOrigin="use-credentials"
                    />
                  </div>

                  <NavDropdown
                    title={"User"}
                    id="navbarScrollingDropdown"
                    align="end"
                  >
                    {user?.displayName}
                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleSignOut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* <div style={{ display: 'flex', padding: 10 }}>
                    <CustomButton onClick={() => collapseSidebar()}><FontAwesomeIcon icon={faBuilding} /></CustomButton>
                    {broken ? (
                        <button className="sb-button" onClick={() => toggleSidebar()}>
                        Toggle
                        </button>
                    ) : null}  
                </div> */}

          <div className="children">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
