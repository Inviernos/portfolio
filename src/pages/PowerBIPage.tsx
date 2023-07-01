import { HashLink } from 'react-router-hash-link';
import { Navbar , Container, Nav , Col} from "react-bootstrap";

function PowerBIPage(){

    return(  
    <div>
    <Col>

        <span className="navbar-text">
          <HashLink to='/'>
             <button className="vvd"><span>Back to Portfolio</span></button>
             </HashLink>
            <div style={{marginLeft: "10px"}}>I am using dummy data for this report. its the only time you should ever use publish to web in power bi to showcase your analytic skills. Enjoy the demo.</div>
        </span>
 
    </Col>
    <Col>

        <div style={{overflow: "auto"}} >
        <iframe title="Report Section" width="1800" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiOGFhMDVmMjEtNGViNC00NzMzLWFhNjUtMDNjM2FhMWMyMGY4IiwidCI6IjI5NGI2NmYzLTA0NGUtNDgxNy1hYjY1LWE5ZWU2NDEwNTQ1OCIsImMiOjF9" frameBorder="0" allowFullScreen={true}></iframe>
        </div>
    </Col>
    </div>);

    


}

export default PowerBIPage;
