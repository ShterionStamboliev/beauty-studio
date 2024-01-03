import Carousel from 'react-bootstrap/Carousel';
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.jpg'


var heroData = [
    {
        id: 1,
        image: product1,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: product2,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: product3,
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link: 'https://www.twitter.com'
    }
];


function Hero() {
    return (
        <section id='home' className='hero-block'>
            <Carousel>
                {heroData.map((hero) => {
                    return (
                        <Carousel.Item key={hero.id}>
                            <img
                                src={hero.image}
                                alt={"Slide " + hero.id}
                            />
                            <Carousel.Caption>
                                <h3>{hero.title}</h3>
                                <p>{hero.description}</p>
                                <a className='btn btn-primary' href={hero.link}>
                                    Learn More
                                    <i className='fas fa-chevron-right'></i>
                                </a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default Hero