import React, {useState} from "react";
import "./Header.css";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";
import { NavLink as NavLinkRouter } from "react-router-dom";



const Header = ({categories}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const renderNavBarItems = (categories)=> {
        return categories.map(category=> (
            <NavItem key={category.name}>
                <NavLink tag={NavLinkRouter} to={`/${category.link}`} activeClassName="active-navlink" className="navlink">{category.name}</NavLink>
            </NavItem>
        ))
    };

    return (
        <Navbar expand="md" className="navbar" color="dark" dark>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {renderNavBarItems(categories)}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
