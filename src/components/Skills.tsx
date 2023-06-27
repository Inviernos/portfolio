import { Container, Row , Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter80 from '../assets/img/meter80.svg';
import meter85 from '../assets/img/meter85.svg';
import meter90 from '../assets/img/meter90.svg';
import colorSharp from '../assets/img/color-sharp.png';

function Skills()
{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's standard dummy text</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter90} alt="Image" />
                                    <h5>Power BI</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="Image" />
                                    <h5>MySql</h5>
                                </div>
                                <div className="item">
                                    <img src={meter85} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter80} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={meter85} alt="Image" />
                                    <h5>Cloud Fundamentals</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default Skills;