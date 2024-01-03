import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import member1 from '../assets/images/member1.jpg'
import member2 from '../assets/images/member2.jpg'
import member3 from '../assets/images/member3.jpg'


const teamsData = [
    {
        id: 1,
        image: member1,
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Име',
        designation: 'Проф',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 2,
        image: member2,
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Име',
        designation: 'Проф',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
        id: 3,
        image: member3,
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Име',
        designation: 'Проф',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
]


function Team() {
    return (
        <section id='teams' className='block teams-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our team</h2>
                    <div className='subtitle'>
                        our team members
                    </div>
                </div>
                <Row>
                    {teamsData.map((member) => {
                        return (
                            <Col sm={3} key={member.id}>
                                <div className='image'>
                                    <Image 
                                        src={member.image}
                                    />
                                    <div className="overlay">
                                        <div className="socials">
                                            <ul>
                                                <li><a href={member.fbLink}><i className='fab fa-facebook-f'></i></a></li>
                                                <li><a href={member.twitterLink}><i className='fab fa-twitter'></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>{member.name}</h3>
                                    <span className='designation'>{member.designation}</span>
                                    <p>{member.description}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default Team