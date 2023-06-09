import { Navbar , Container, Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';


function NavBar(){

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll" , onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])
    
    const onUpdateActiveLink = (value : string) => {
      setActiveLink(value);
    }
    
    return(
      
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/anthony-g-233279120"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/Inviernos?tab=repositories"><img src={navIcon2} alt="" /></a>
                </div>
                <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;