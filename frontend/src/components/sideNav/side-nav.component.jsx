import SidebarMenu from 'react-bootstrap-sidebar-menu';
import "./side-nav.styles.scss";

const SideNav = () => {
    return (
        <div>
            <SidebarMenu >
                <SidebarMenu.Header>
                    <SidebarMenu.Brand>
                        Sh
                    </SidebarMenu.Brand>
                    <SidebarMenu.Toggle />
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <SidebarMenu.NavIcon>

                        </SidebarMenu.NavIcon>
                        <SidebarMenu.NavTitle>
        Hotel Manager
                        </SidebarMenu.NavTitle>
                        <SidebarMenu.NavLink>
Link 1
                        </SidebarMenu.NavLink>
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
            </SidebarMenu>
        </div>
    )
};

export default SideNav;