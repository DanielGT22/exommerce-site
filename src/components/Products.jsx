import React from 'react';
import BookCard from './BookCard';
import { Container, Row, Col } from 'react-bootstrap';

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://via.placeholder.com/150',
  },
];

const Products = () => {
  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
