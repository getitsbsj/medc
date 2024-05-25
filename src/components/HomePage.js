import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <nav className="NavigationBar">
          <Link to="/login" className="navigate">Login</Link>
          <Link to="/register" className="navigate">Register</Link>
          <Link to="/hospitallocator" className="navigate">Hospital Finder</Link>
          <Link to="/medicines" className="navigate">Medicines</Link>
          <Link to="/dashboard" className="navigate">Dashboard</Link>

        </nav>
        <h1>Welcome to MediConnect</h1>
        <p>Your health, our priority.</p>
      </header>
      <main>
        <section>
          <h2>Book Appointments with Ease</h2>
          <p>Find the best doctors and book appointments quickly and easily.</p>
        </section>
        <section>
          <h2>Order Medicines Online</h2>
          <p>Get your medicines delivered to your doorstep.</p>
        </section>
        <Carousel className="carousel" showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src="/istockphoto-184312691-612x612.jpg" alt="Slide 1" />
            <p className="legend">Slide 1</p>
          </div>
          <div>
            <img src="/istockphoto-1038799988-612x612.jpg" alt="Slide 2" />
            <p className="legend">Slide 2</p>
          </div>
          <div>
            <img src="/istockphoto-1312706413-612x612.jpg" alt="Slide 3" />
            <p className="legend">Slide 3</p>
          </div>
        </Carousel>
      </main>
    </div>   
  );
};

export default HomePage;
