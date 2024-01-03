import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


import './App.css';

function App() {

    return (
        <>
            <header id="header">
                <Header />
            </header>

            <main>
                <Hero />
                <About />
                <Services />
                <Works />
                <Team />
                <Testimonials />
                <Pricing />
                <Blog />
                <Contact />
                <footer id='footer'>
                    <Footer />
                </footer>
            </main>
        </>
    )
}

export default App
