import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import team from '../assets/images/team.jpg'

function About() {

    const html = 100;

    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className='subtitle'>
                        learn more about us
                    </div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={team} />
                    </Col>
                    <Col sm={6}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam omnis, maxime eaque aliquam pariatur iure? Quisquam praesentium, placeat reprehenderit magnam neque ipsam hic autem aliquid, repellendus ipsum architecto corrupti.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam omnis, maxime eaque aliquam pariatur iure? Quisquam praesentium, placeat reprehenderit magnam neque ipsam hic autem aliquid, repellendus ipsum architecto corrupti.
                        </p>
                        <div className='progress-block'>
                            <h4>Eyebrows</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>Migli</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>
                        <div className='progress-block'>
                            <h4>Grim</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About