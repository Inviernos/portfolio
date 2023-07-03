import { Container, Row , Col} from "react-bootstrap";
import headerImg from "../assets/img/header.png";



function Banner(){
    return(
        <section className="banner" id= "home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Developer Ready to Transform Ideas into Reality</h1>
                        <p>My name is Anthony Golubski-Allen. I am a power bi data analyst at Infosys and I have been with them for 5 years now. I look for projects and work on certifications when I am on bench. When im on a project, I gain access to all the tools that is required and develop any requirements requested by the client. You stay on the project until you are done or until the client's budget runs out for you. Most projects that I have been on has been power bi development related. In one of my projects, I used my programming skills to read a visual programming language that I have never seen before to figure out the data tables relationship with other tables. It was pretty cool and I'm hoping to do more cool stuff like that.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;