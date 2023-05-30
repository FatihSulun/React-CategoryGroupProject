import React, { Component } from "react";
import {Nav,NavItem,NavLink} from 'reactstrap'
export default class Navbars extends Component{


    render(){

        return(
            <Nav>
            <NavItem>
                <NavLink
                active
                href="#"
                >
                Peoples
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                Categories
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                disabled
                href="#"
                >
                About
                </NavLink>
            </NavItem>
            </Nav>
        )
    }
}
