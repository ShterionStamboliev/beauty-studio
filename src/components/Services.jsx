import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
        id: 1,
        icon: 'fa-regular fa-eye',
        title: 'Мигли',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
        id: 2,
        icon: 'fa-regular fa-eye',
        title: 'Мигли',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
        id: 3,
        icon: 'fa-regular fa-eye',
        title: 'Мигли',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    }
]

function Services() {
    return (
        <section id='services' className='block services-block'>

            <Container fluid>
                <div className="title-holder">
                    <h2>Our services</h2>
                    <div className='subtitle'>
                        services we provide
                    </div>
                </div>
                <Row>
                    {
                        servicesData.map((services) => {
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <i className={services.icon}></i>
                                    </div>
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Services