import {
  faArrowLeft,
  faArrowRight,
  faBuilding,
  faCalendar,
  faCalendarAlt,
  faCogs,
  faDashboard,
  faDoorOpen,
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
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../firebase/AuthContext";

const Layout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const { rtl } = useProSidebar();
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("../signin", replace);
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
          <BrandLogo hideLogo color="#fff" />
        </div>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0 || level === 1)
                return {
                  color: disabled ? "#f5d9ff" : "rgb(230, 230, 230)",
                  backgroundColor: active ? "#363740" : "#363740",
                };
            },
          }}
        >
          <a href="/dashboard/dashboard">
            <MenuItem icon={<FontAwesomeIcon icon={faDashboard} />}>
              DashBoard
            </MenuItem>
          </a>
          <SubMenu
            label="Bookings"
            icon={<FontAwesomeIcon icon={faCalendarAlt} />}
          >
            <a href="/bookings">
              <MenuItem icon={<FontAwesomeIcon icon={faDoorOpen} />}>
                All Bookings
              </MenuItem>
            </a>
            <a href="/checkin">
              <MenuItem icon={<FontAwesomeIcon icon={faArrowRight} />}>
                Check in
              </MenuItem>
            </a>
            <a href="/dashboard/checkout">
              <MenuItem icon={<FontAwesomeIcon icon={faArrowLeft} />}>
                Check Out
              </MenuItem>
            </a>
          </SubMenu>
          <SubMenu label="Settings" icon={<FontAwesomeIcon icon={faCogs} />}>
            <a href="/dashboard/hotels">
              <MenuItem icon={<FontAwesomeIcon icon={faBuilding} />}>
                Hotels
              </MenuItem>
            </a>
            <a href="/dashboard/staff">
              <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>
                Staff
              </MenuItem>
            </a>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main style={{ width: "100%" }}>
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
                  <Button variant="success">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                  {/* <CustomButton><FontAwesomeIcon icon={faMagnifyingGlass} /></CustomButton> */}
                </Form>
              </Nav>
              <Nav style={{ paddingRight: "50px" }}>
                <Nav.Link href="#">
                  <FontAwesomeIcon icon={faUser} />
                </Nav.Link>

                <NavDropdown
                  title="Profile"
                  id="navbarScrollingDropdown"
                  align="end"
                >
                  {user?.displayName}
                  <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                  <NavDropdown.Item as="span" onClick={handleSignOut}>
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
      </main>
    </div>
  );
};

export default Layout;
