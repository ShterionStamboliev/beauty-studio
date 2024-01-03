import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
    {
        id: 1,
        plan: 'Блендинг',
        price: '200 марки',
        features: ['Мигли'],
        link: 'https://www.google.com'
    },
    {
        id: 2,
        plan: 'Блендинг',
        price: '200 марки',
        features: ['Мигли'],
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        plan: 'Блендинг',
        price: '200 марки',
        features: ['Мигли'],
        link: 'https://www.twitter.com'
    }
]

function Pricing() {
    return (
        <section id='pricing' className='block pricing-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Pricing & plans</h2>
                    <div className="subtitle">
                        check our pricing
                    </div>
                </div>
                <Row>
                    {pricingData.map((price) => {
                        return (
                            <Col sm={4} key={price.id}>
                                <div className="heading">
                                    <h3>{price.plan}</h3>
                                    <span className='price'>{price.price}</span>
                                </div>
                                <div className="content">
                                    <ListGroup>
                                        {price.features.map((feature, i) => {
                                            return (
                                                <ListGroup.Item key={i}>{feature}</ListGroup.Item>
                                            )
                                        })}
                                    </ListGroup>
                                </div>
                                {/* <div className="btn-holder">
                                    <a href="" className='btn btn-primary'>Order Now</a>
                                </div> */}
                            </Col>
                        )
                    })}


                </Row>
            </Container>
        </section>
    )
}

export default Pricing