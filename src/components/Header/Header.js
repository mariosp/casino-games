import React, {useState} from "react";
import "./Header.css";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import NavLink from "reactstrap/es/NavLink";



const Header = ({categories=[]}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const renderNavBarItems = (categories)=> {
        return categories.map(category=> (
            <NavItem>
                <NavLink href="/">Test</NavLink>
            </NavItem>
        ))
    };

    return (
        <Navbar expand="md" className="navbar-color">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {renderNavBarItems(categories)}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
