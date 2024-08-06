import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import BookCard from './BookCard';

const bestsellers = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://via.placeholder.com/300x400',
  },
];

const Home = () => {
  return (
    <Container className="mt-5">
      <h1>Welcome to Our E-commerce Site</h1>
      <p>Browse our products and enjoy your shopping experience!</p>
      <h2>Bestsellers</h2>
      <Carousel className='w-50'>
        {bestsellers.map((book, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={book.image}
              alt={book.title}
            />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Home;
