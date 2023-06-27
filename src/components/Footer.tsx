import {Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';


function Footer()
{
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-right">
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="icon" /></a>
                <a href="#"><img src={navIcon2} alt="icon" /></a>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
  
export default Footer;