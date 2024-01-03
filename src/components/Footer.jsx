import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    const [topButton, setTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setTopButton(true);
            } else {
                setTopButton(false);
            }
        })
    }, []);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Container fluid>
            <div className='copyright'>
                &copy; Beauty Studio. All rights reserved.
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <a href="https://www.facebook.com"><i className='fab fa-facebook-f'></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com"><i className='fab fa-instagram'></i></a>
                    </li>
                </ul>
            </div>
            {
                topButton && (
                    <div className="go-top" onClick={goTop}></div>
                )
            }
        </Container>
    )
}

export default Footer