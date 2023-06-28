import { Container, Row, Col , Tab , Nav, Accordion} from "react-bootstrap";
import client1 from '../assets/img/client1.jpg';
import client2 from '../assets/img/client2.jpg';
import client3 from '../assets/img/client3.jpg';

function Projects()
{

    const projects = [
        {
            title: "Client 1: World leader in smart buildings, creating safe, healthy and sustainable spaces ",
            description: "I was assigned to a group that was using an etl tool called talend. I followed a document " +
            "to gain access to everything I needed. They assigned me a list of talend jobs that are listed in the " +
            "TAC (Talend Adminstrator Center) in QA to run. That was my day to day. If they failed, I would go check the logs and see what went "+
            "wrong. Most of the time it failed because it was using a hostname instead of an ip address. In the backend, the setup didnt have the hostname connected to the ip " + 
            "address. There would also be jobs that didnt exist. I would go in and create the job in TAC. I would attend morning meetings every day to go over my list of talend jobs. This project lasted a few months until i was laid " + 
            "off the project because of budget cuts.",
            imgUrl: client3
        },
        {
            title: "Client 2: World's leading manufacturer of construction and mining equipment, diesel and natural gas engines, and locomotives.",
            description: "I was a business analyst for this project who was assigned onsite to gather data requirements for power bi and send it to the offshore team. This was a 3-4 month project where the client wanted to make a certain amount of reports and dashboards. " +
            "My daily routine was to start the morning meeting with the client and the offshore team. They would show the results to the client on the power bi service that microsoft uses to host power bi reports/dashboards/apps. The client would approve or disapprove " +
            "the reports/dashboards. I had a main point of contact who helped me gather the data. We would go to each department and decide on what reports that they have and convert it to power bi. The data source would mostly be sql server but there was some reports that " +
            "took excel. I held a 1 week training seminar to teach employees how to use the power bi tool but only a few people showed up for it. My manager thought it would be beneficial for them to learn the tool. I also made power bi reports as well. " +
            "I made some complex power bi reports during that time to help the offshore team work on other reports.",
            imgUrl: client1,
        },
        {
            title: "Client 3: industry's largest and most experienced benefits providers for health insurance",
            description: "Design & Development",
            imgUrl: client2,
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
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                 
                 
                        <h2>Projects</h2>
                        <p>Showcase of my projects with the client, college, and lending my help to HR <br></br> This is my experience that is being showned to you by me.</p>
                      
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Client</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">College</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                        Helping HR
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
                                                            <div className="d-flex justify-content-between" >
                                                            <img style={{padding : "5px"}} width="200" height="200" src={project.imgUrl}/> 
                                                            {project.description}
                                                            </div>
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