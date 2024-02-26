'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../media/logo.png'
import Image from "next/image";
import header from './header.module.css'
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className={header.header}>
                <Navbar expand="lg" className={header.navbar}>
                    <Container>
                        <Navbar.Brand href="/"><Image src={logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className={`ms-auto ${header.navItemList}`}>
                                <Link href="/" className={header.navItem}>Home</Link>
                                <Link href="#" className={header.navItem}>About Us</Link>
                                <Link href="/quize" className={header.navItem}>Online Exam</Link>
                                <Link href="#" className={header.navItem}>Blog</Link>
                                <Link href="#" className={header.navButton}>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
