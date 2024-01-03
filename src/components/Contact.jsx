import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact Us</h2>
                    <div className="subtitle">
                        get connected with us
                    </div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your phone number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your message" />
                        </Col>
                    </Row>

                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className="google-map">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183.67379233010098!2d27.642273867723322!3d42.559949755640176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6bdc7eb71edff%3A0xdc2f66cc1fe0ee55!2sBEAUTY%20CORNER%20SALON!5e0!3m2!1sbg!2sbg!4v1700066841263!5m2!1sbg!2sbg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className="contact-info">
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            mail@gmail.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            0888-888-888
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            Поморие, ул. "България 9"
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Contact