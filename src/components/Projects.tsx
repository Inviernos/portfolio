import { Container, Row, Col , Tab , Nav, Accordion} from "react-bootstrap";
import client1 from '../assets/img/client1.jpg';
import client2 from '../assets/img/client2.jpg';
import client3 from '../assets/img/client3.jpg';
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';

function Projects()
{

    const projects = [
        {
            title: "Client 1: World leader in smart buildings, creating safe, healthy and sustainable spaces ",
            description: "I was assigned to a group that was using an etl tool called talend. The client sent me a laptop to the Infosys office. Once that happened, I followed a document " +
            "to gain access to everything I needed. They assigned me a list of talend jobs that are listed in the " +
            "TAC (Talend Adminstrator Center) in QA to run. That was my day to day. If they failed, I would go check the logs and see what went "+
            "wrong. Most of the time it failed because it was using a hostname instead of an ip address. In the backend, the setup didnt have the hostname connected to the ip " + 
            "address. There would also be jobs that didnt exist. I would go in and create the job in TAC. I would attend morning meetings every day to go over my list of talend jobs. This project lasted a few months until i was laid " + 
            "off the project because of budget cuts. I had to return my client laptop back to my manager. Shortly after leaving, i would land a project with client 2.",
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
            description: "I was a power bi developer for 3 years working remotely making power bi reports and dashboards. " + 
            "I made power bi dashboard for each department that contained their power bi reports so they didnt have to keep track of all the links. The reports and dashboards were stored " +
            "on a premium workspace so the users didnt need a pro license. My day to day routine for the client was attend meetings, make power bi demos, present demo to business users, publish reports using " + 
            "the prod database, and monitoring power bi reports to make the data is refreshed. They would assign me the user stories that described what the business user wanted to have in their power bi report. " +
             "After making the demo, they would do user acceptance testing to see if the report looked right. All my reports use sql server as its data source so the only way to test is inputting data into the QA database " + 
             "and hope to see the expected result in the report. I created power bi alerts using the software tool power automate to let the business users know via email that there are a certain amount in today's report. This gives " +
             "the business user time to find out what went wrong and solve the issue quickly. They had to let me go because of budget constraints.",
            imgUrl: client2,
        },
        {
            title: "Security in Computing: Image Steganography",
            description: "I was in a project group and we decided to make a program that was about steganography. Steganography is the pratice of concealing information within another message " +
            "or medium to avoid detection. My group decided that we would hide information into another image. We used paint to draw the graphic user interface first before programming so we know " +
            "what it would look like before creating it in code. We decided to use Wxwidgets to make the graphic user interface which didn't take long to make. After that we divided the work. These are the " +
            "three objectives: hiding text into an image, hiding an image into another image, and hiding an executable into another image. I picked the 2nd option which was hiding an image into another image. I " + 
            "used the least significant bit method to hide an image into another image. The least significant bit (LSB) is the bit which is farthest to the right and holds the least value. If someone changed the value " +
            "to the other's object's binary value then a slight change was made but barely noticeable to the naked eye. I would convert the image to an array of bytes and switch the last 2 bits to the other image's binary numbers. " + 
            "The picture to your left is an example that i used in my class for image to image. It has a picture inside of it. Im hiding a picture of the joker in the bat symbol. No one will believe you." ,
            imgUrl: project1,
            gitUrl: "https://github.com/Inviernos/Cryptology",
        },
        {
            title: "Data Structures: Dijkstra",
            description: "This c++ program was made to find the shortest path through the mountain. The mountain path was represented by a grayscale map.raw file. 0 means that the mountain was flat and 255 means that the " +
            "mountain was at its highest. The user would start at the coordinates (0,0) and find the shortest path to (250,200). The hardest step for me was how i was going to get the image data because i had no idea how to import it into " +
            "my program. I was thinking of using a library at first but after a lot of searching, i finally figured out that i didnt need a library and could just open up the file since a raw file doesn't have any header information like " + 
            "a png or jpeg has. After getting the image data, i manage to quickly get to work and start using the dijkstra algorithm. After halfway through making the program, i ran into an issue where the program would crash for some reason. " +
            "it would come and go until i had a light bulb moment of why it was randomly crashing. It was crashing because i was creating a bunch of graph nodes and keeping track of lots of data that i was taking up too much memory. After solving that " +
            "issue, i finish the program early. I had time to add a feature to ask the user what their new destination was to stop at and it would find the shortest path by coloring the path purple.  ",
            imgUrl: project2,
            gitUrl: "https://github.com/Inviernos/Dijkstra",
        },
        {
            title: "Theory of Computation: Matrix-Chain-Multiplication",
            description: "This c++ program was made to find the minimum cost value of operations it would take to multiply multiple matrices. They don't look at the values of the matrices but use its size to determine the amount of operations. The matrix multiplication is associative so no matter how the product is parenthesized, the result obtained will remain the same. It also prints the matrices in the order that would do the least amount of work. It is a dynamic programming problem that " +
            "was solved by using memoization. I would compute the minimum cost needed to multiply certain matrix sequences and save it in a table. The program goes through all the calculations to find the minimum cost with every subsequence until you get your value at the " +
            "top right of the table. During the calculation, you also store the k value in another table to figure out what the order should be for the matrices. I would use recursion in the table with k values to print the order of the matrices. The sequence of matrices would get " +
            "parenthesize and printed out on the command prompt. An example of the output is shown to the left. This is one of the few dynamic programming programs that i have worked on and enjoyed making. ",
            imgUrl: project3,
            gitUrl: "https://github.com/Inviernos/Matrix-Chain-Multiplication",
        },
        {
            title: "Pride Month",
            description: "HR came to me and a group of people with a task to help make pride flags. HR handed me a bunch of small poles so that i could put the pride flag on there. It took us some time but manage to " + 
            "complete the task for a good 20 minutes. The next day, HR asked me to take those pride flags and lay them down on the table in a circular fashion on the main floor tables so that people could grab their flags when " +
            "the time came. HR took pictures of the decorated flags and then ask me to inform people to come down to the main lobby at a certain time for the pride event. We ",
            //imgUrl: projImg1,
        },
        {
            title: "Christmas Party",
            description: "HR needed help decorating the new campus for the christmas party. They asked for volunteers and i mentioned that i could help. We moved around furniture, set up snowmen, " + 
            "santa on a sliegh, trees with light bulbs, etc. We would set up treat stations and games for the children that were coming to this event. I was in charge of the bean bag toss area. There was blue taped lines " + 
            "that indicated what spot you were going to be at based on your age. Based on your score, the kids would win a prize. The christmas party would start and see a lot of people show up for the event. " +
            "I joined the christmas party a little later and hanged out with my peers. It was pretty fun. ",
            //imgUrl: projImg1,
        },
        {
            title: "Halloween",
            description: "One of the floors at the OneAmerica Tower needed some decoration for halloween. I helped decorate with HR and some others with pumpkins that we made during the carving " + 
            "pumpkin contest and put it on some tables. Added some fake webs and put paper bats on the ceilings. The floor became a spooky one and  once we were done with the decoration, HR did " + 
            "their costume contest afterwards. I was with a group of friends who wore lantern shirts. We were the lantern corps and i was the orange one. We each also had our individual color ring. The orange " +
            "one is the greedy one that says he owns everything.",
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
                                        HR Events
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
                                                            <div className="d-flex justify-content-between" >
                                                            <img style={{padding : "5px"}} width="250" height="250" src={project.imgUrl}/> 
                                                            {project.description} 
                                                            </div>
                                                            <div style={{padding : "5px"}}>
                                                            <a href={project.gitUrl}>Link to Project</a>
                                                            </div>
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