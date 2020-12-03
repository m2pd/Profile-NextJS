import Link from 'next/link'

// const Header = () => {
//   return (
//     <header>
//       <Link href='/'>
//         <a>Home </a>
//       </Link>
//       <Link href='/about'>
//         <a>About </a>
//       </Link>
//       <Link href='/portfolio'>
//         <a>Portfolio </a>
//       </Link>
//       <Link href='/blog'>
//         <a>Blog </a>
//       </Link>
//       <Link href='/cv'>
//         <a>CV </a>
//       </Link>
//     </header>
//   )
// }

// export default Header

import React, { useState } from 'react';
import {
  Collapse,
  Nav, Navbar,
  NavbarBrand,
  NavbarText, NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';

const BasicNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Example;
