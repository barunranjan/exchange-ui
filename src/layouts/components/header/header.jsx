import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown
} from "reactstrap";

import React from "react";
import profilephoto from "../../../assets/images/users/1.jpg";

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/

const Header = () => {
  /*--------------------------------------------------------------------------------*/
  /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
  /*--------------------------------------------------------------------------------*/
  const showMobilemenu = () => {
    document.getElementById("main-wrapper").classList.toggle("show-sidebar");
  };

  return (
    <header className="topbar navbarbg" data-navbarbg="skin1">
      <Navbar className="top-navbar" dark expand="md">
        <div className="navbar-header" id="logobg" data-logobg="skin6">
          {/*--------------------------------------------------------------------------------*/}
          {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
          {/*--------------------------------------------------------------------------------*/}
          <NavbarBrand href="/">
            {/* <b className="logo-icon">
              <img src={logodarkicon} alt="homepage" className="dark-logo" />
              <img src={logolighticon} alt="homepage" className="light-logo" />
            </b> */}
            <span className="logo-text">
              {/* <img src={logodarktext} alt="homepage" className="dark-logo" />
              <img src={logolighttext} className="light-logo" alt="homepage" /> */}
              <h3 className="dark-logo" style={{ color: "#212529" }}>
                JioFabric
              </h3>
              <h3 className="light-logo">JioFabric</h3>
            </span>
          </NavbarBrand>
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <button
            className="btn-link nav-toggler d-block d-md-none"
            onClick={() => showMobilemenu()}
          >
            <i className="ti-menu ti-close" />
          </button>
        </div>
        <Collapse className="navbarbg" navbar data-navbarbg="skin1">
          <Nav className="ml-auto float-right" navbar>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Profile Dropdown                                                         */}
            {/*--------------------------------------------------------------------------------*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="pro-pic">
                <img
                  src={profilephoto}
                  alt="user"
                  className="rounded-circle"
                  width="31"
                />
              </DropdownToggle>
              <DropdownMenu right className="user-dd">
                <DropdownItem>
                  <i className="ti-user mr-1 ml-1" /> My Account
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-wallet mr-1 ml-1" /> My Balance
                </DropdownItem>
                <DropdownItem>
                  <i className="ti-email mr-1 ml-1" /> Inbox
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <i className="ti-settings mr-1 ml-1" /> Account Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/pages/login">
                  <i className="fa fa-power-off mr-1 ml-1" /> Logout
                </DropdownItem>
                <DropdownItem divider />
                <Button color="success" className="btn-rounded ml-3 mb-2 mt-2">
                  View Profile
                </Button>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*--------------------------------------------------------------------------------*/}
            {/* End Profile Dropdown                                                           */}
            {/*--------------------------------------------------------------------------------*/}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
