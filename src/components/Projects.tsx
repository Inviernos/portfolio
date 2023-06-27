import { Container, Row, Col , Tab , Nav, Accordion} from "react-bootstrap";


function Projects()
{

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            //imgUrl: projImg1,
        },
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's standard dummy text</p>
                    
     
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                        Tab Three
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                        <Accordion defaultActiveKey="0"flush>
                                            {
                                                projects.map((project: any ,index : number) => {
                                                    return(index === 0 || index === 1 || index === 2 ?
                                                        
                                                        <Accordion.Item  eventKey={index.toString()}>
                                                        <Accordion.Header  > {project.title}</Accordion.Header>
                                                        <Accordion.Body >
                                                            {project.description}
                                                        </Accordion.Body>
                                                        </Accordion.Item>
                                                        : ""
                                                    
                                                    )
                                                })

                                            }
                                        </Accordion>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Accordion defaultActiveKey="3" flush>
                                            {
                                                projects.map((project: any ,index : number) => {
                                                    return(index === 3 || index === 4 || index === 5 ?
                                                        
                                                        <Accordion.Item eventKey={index.toString()}>
                                                        <Accordion.Header >{project.title}</Accordion.Header>
                                                        <Accordion.Body >
                                                            {project.description}
                                                        </Accordion.Body>
                                                        </Accordion.Item>
                                                        : ""
                                                    
                                                    )
                                                })

                                            }
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Accordion defaultActiveKey="6" flush>
                                            {
                                                projects.map((project: any ,index : number) => {
                                                    return(index === 6 || index === 7 || index === 8 ?
                                                        
                                                        <Accordion.Item eventKey={index.toString()}>
                                                        <Accordion.Header>{project.title}</Accordion.Header>
                                                        <Accordion.Body >
                                                            {project.description}
                                                        </Accordion.Body>
                                                        </Accordion.Item>
                                                        : ""
                                                    
                                                    )
                                                })

                                            }
                                        </Accordion>
                                    </Tab.Pane>
                                </Tab.Content>
                        </Tab.Container>
                     </Col>
                 </Row>
            </Container>
        </section>
    );
}

export default Projects;