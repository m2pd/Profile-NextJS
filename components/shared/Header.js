import Link from 'next/link';
import React, { useState } from 'react';
import {
  Collapse,
  Nav, Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from 'reactstrap';
import Cookies from 'js-cookie'

import { useAuth0 } from "@auth0/auth0-react";

const BasicNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <span
      className="nav-link port-navbar-link clickable"
      onClick={() => loginWithRedirect()}
    >
      Login
    </span>
  )
}

const Logout = () => {
  const { logout } = useAuth0();
  const handleLogout = () => {
    Cookies.remove('user')
    Cookies.remove('jwt')
    Cookies.remove('expiresAt')

    logout({ returnTo: 'http://localhost:3000' })
  }
  return (
    <span
      className="nav-link port-navbar-link clickable"
      onClick={() => handleLogout()}
    >
      Logout
    </span>
  )
}

const Header = (props) => {
  const { isAuthenticated } = props;
  const [isOpen, setIsOpen] = useState(false);

  // console.log('Header', isAuthenticated)
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Doan Minh Phuong</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BasicNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BasicNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BasicNavLink route="/portfolio" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BasicNavLink route="/blog" title="Blog" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BasicNavLink route="/cv" title="CV" />
            </NavItem>

            {
              isAuthenticated
                ? <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
                : <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
