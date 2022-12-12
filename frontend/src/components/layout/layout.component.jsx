import { faArrowLeft, faArrowRight, faBuilding, faCogs, faDashboard, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, useProSidebar, menuClasses } from "react-pro-sidebar";

import CustomButton from "../custom-button/custom-button.component";
import { BrandLogo } from "../Logo";
import "./layout.styles.scss";


const Layout = (props) => {
    const {children} = props;
    const { toggleSidebar, collapseSidebar, broken, rtl } = useProSidebar();
    

    return (
        <div style={{ display: 'flex', height: '100vh', direction: rtl ? 'rtl' : 'ltr' }}>
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
                <MenuItem icon={<FontAwesomeIcon icon={faDashboard} />}>DashBoard</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faArrowRight} />}>Check in</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faArrowLeft} />}>Check out</MenuItem>
                <SubMenu label="Settings" icon={<FontAwesomeIcon icon={faCogs} />}>
                    <MenuItem><FontAwesomeIcon icon={faBuilding} /> Hotel</MenuItem>
                    <MenuItem><FontAwesomeIcon icon={faUsers} /> Staff</MenuItem>
                </SubMenu>
            </Menu>
            </Sidebar>
            <main>
                <div style={{ display: 'flex', padding: 10 }}>
                    <CustomButton onClick={() => collapseSidebar()}><FontAwesomeIcon icon={faBuilding} /></CustomButton>
                    {broken ? (
                        <button className="sb-button" onClick={() => toggleSidebar()}>
                        Toggle
                        </button>
                    ) : null}  
                </div>
                <div>
                    
                    {children}
                    
                </div>
            </main>
        
        </div>
        
    )
}

export default Layout;