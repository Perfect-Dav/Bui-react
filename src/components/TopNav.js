import React from "react";

import Toggle from "../assets/Union.png";
import logo from '../logo.png';
import styles from './TopNav.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const navMenu = [
  { value: "how it works", label: "How it Works" },
  { value: "benefits", label: "Benefits" },
  { value: "faq", label: "FAQ" },
  { value: "about", label: "About us" },
];


function TopNav() {
    return (
        <div>
                    <header className={styles.header}>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand className={styles.logoDiv} href="#!">
                    <img
                        src={logo}
                        alt="BUI logo"
                        className={styles.logoImg}
                    />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"><img src={Toggle} alt="Toggler" /></Navbar.Toggle>
                        <Navbar.Collapse className={styles.bgNav} id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                          {navMenu.map((menu) => (
                              <Nav.Link className={styles.navlink} key={menu.value} href="#!">
                                {menu.label}
                              </Nav.Link>
                          ))}
                          <Nav.Link href="#!">
                             <Button className={styles.pricing} variant="primary">Pricing</Button>{' '}
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </header>

                    {/* Header for mobile devices */}
                    <header className={styles.headerSm}>
                        <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand className={styles.logoDiv} href="#!">
                    <img
                        src={logo}
                        alt="BUI logo"
                        className={styles.logoImg}
                    />
                </Navbar.Brand>
                    <Navbar.Toggle className={styles.ToggleBar} aria-controls="responsive-navbar-nav">
                        <img src={Toggle} alt="Toggler" />
                    </Navbar.Toggle>
                        <Navbar.Collapse className={styles.bgNavSm} id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                          {navMenu.map((menu) => (
                              <Nav.Link className={styles.navlinkSm} key={menu.value} href="#!">
                                {menu.label}
                              </Nav.Link>
                          ))}
                          <Nav.Link href="#!">
                             <Button className={styles.pricing} variant="primary">Pricing</Button>{' '}
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </header>
        </div>
    );
}

export default TopNav;