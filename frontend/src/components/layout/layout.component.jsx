import { faArrowLeft, faArrowRight, faBuilding, faCogs, faDashboard, faMagnifyingGlass, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, useProSidebar, menuClasses } from "react-pro-sidebar";
import { BrandLogo } from "../Logo";
import "./layout.styles.scss";
import {Button, Form, Navbar, Nav} from 'react-bootstrap';
import { Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = (props) => {
    const {children} = props;
    const {   rtl } = useProSidebar();
    return (
        <div style={{ display: 'flex' , height: '100vh', direction: rtl ? 'rtl' : 'ltr' }}>
            
            <div>
            <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                    backgroundColor: '#363740',
                    },
                    [`.${menuClasses.container}`]: {
                        backgroundColor: '#363740',
                    },
                    [`.${menuClasses.button}`]: {
                        '&:hover': {
                        backgroundColor: 'rgb(230, 230, 230)',
                        color: '#779341'
                        },
                    }
                }}>
                <div className="sb-title">
                    <BrandLogo hideLogo color="#fff" />
                </div>
            <Menu
                menuItemStyles={{
                button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0 || level === 1)
                    return {
                        color: disabled ? '#f5d9ff' : 'rgb(230, 230, 230)',
                        backgroundColor: active ? '#363740' : '#363740',
                    };
                },
                }}
            >
                <MenuItem routerLink={<Link to="#" />} icon={<FontAwesomeIcon icon={faDashboard} />}>DashBoard</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faArrowRight} />}><a href="checkin">Check in</a></MenuItem>
                <MenuItem routerLink={<Link to="/" />} icon={<FontAwesomeIcon icon={faArrowLeft} />}>Check out</MenuItem>
                <SubMenu label="Settings" icon={<FontAwesomeIcon icon={faCogs} />}>
                    <MenuItem icon={<FontAwesomeIcon icon={faBuilding} /> }><a href="hotels">Hotel</a></MenuItem>
                    <MenuItem  icon={<FontAwesomeIcon icon={faUsers} /> }>Staff</MenuItem>
                </SubMenu>
            </Menu>
             </Sidebar>
                </div>

            <div className="main-content">
                <main>
                    <div>
                    <Navbar bg="transparent" expand="md" className="mb-3">
                    <Container fluid>
                        {/* <Navbar.Brand href="#"><BrandLogo hideLogo /></Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-4 my-lg-3" style={{maxHeight: '100px', display: 'flex', alignItems: 'center'}} navbarScroll>
                                 <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="success"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                                {/* <CustomButton><FontAwesomeIcon icon={faMagnifyingGlass} /></CustomButton> */}
                            </Form>
                            </Nav>
                            <Nav style={{paddingRight: '50px'}}>
                                <Nav.Link href="#">
                                    <FontAwesomeIcon icon={faUser} />
                                </Nav.Link>
                                
                                <NavDropdown title="User" id="navbarScrollingDropdown" align="end">
                                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Logout</NavDropdown.Item>
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
                    </div>
                <div className="children">
                    {children}
                </div>
            </main>
                </div>
        </div>
        
    )
}

export default Layout;