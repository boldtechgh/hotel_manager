import { faArrowLeft, faArrowRight, faBuilding, faCogs, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import CustomButton from "../custom-button/custom-button.component";

const Layout = (props) => {
    const {children} = props;
    const { toggleSidebar, collapseSidebar, broken, rtl } = useProSidebar();
    return (
        <div style={{ display: 'flex', height: '100vh', direction: rtl ? 'rtl' : 'ltr' }}>
            <Sidebar>
                <h1>Hotelica</h1>
            <Menu
                menuItemStyles={{
                button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                    return {
                        color: disabled ? '#f5d9ff' : '#d359ff',
                        backgroundColor: active ? '#eecef9' : undefined,
                    };
                },
                }}
            >
                <MenuItem icon={<FontAwesomeIcon icon={faDashboard} />}>DashBoard</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faArrowRight} />}>Check in</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faArrowLeft} />}>Check out</MenuItem>
                <SubMenu label="Settings" icon={<FontAwesomeIcon icon={faCogs} />}>
                    <MenuItem>Hotel</MenuItem>
                    <MenuItem>Staff</MenuItem>
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