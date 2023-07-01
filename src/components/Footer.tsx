import {Container, Row, Col} from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';


function Footer()
{
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-right">
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon-footer">
                <a href="https://www.linkedin.com/in/anthony-g-233279120"><img src={navIcon1} alt="icon" /></a>
                <a href="https://github.com/Inviernos?tab=repositories"><img src={navIcon2} alt="icon" /></a>
                <p>Copyright 2023. All Rights Reserved</p>
              </div>
              
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
  
export default Footer;