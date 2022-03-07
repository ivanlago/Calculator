import React, { useState } from 'react';
import './Calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Calculator() {
  const [display, setDisplay] = useState('0');

  function addItem(itemBtn) {
    //check last digit of display
    var lastDigit = display.substr(display.length - 1, 1)

    //treat start with 0 (zero)
    if (display === '0') {
      if (isNaN(itemBtn)) {
        setDisplay(display + itemBtn);
      } else {
        setDisplay(itemBtn);
      }
    } else {
      setDisplay(display + itemBtn);
    }

    //handles repetition of '.' and operators, with the exception of the '-'
    if (isNaN(lastDigit) && isNaN(itemBtn)) {
      if (itemBtn === '-' && lastDigit !== '.' && lastDigit !== '-') {
        setDisplay(display + itemBtn);
      } else {
        setDisplay(display);
      }
    }

  }

  function calculating() {
    // eslint-disable-next-line no-eval
    setDisplay(eval(display));
  }

  function clear() {
    setDisplay('0');
  }

  return (
    <Container style={{
      background: 'transparent !important',
      backgroundColor: '#2E2E2E',
      marginTop: '40px',
      border: 'solid 1px #000',
      padding: '20px 20px 20px 15px',
      borderRadius: '10px',
      boxShadow: '1px 1px 5px #000',
      width: '315px',
      height: '470px'
    }}>
      <Row>
        <Form.Control
          type='text'
          readOnly='readonly'
          name='txtNumeros'
          id='display'
          value={display}
          data-testid='display'
        />
      </Row>
      <br />

      <Row>
        <Col xs='6'>
          <Button id='clear' variant='dark' onClick={clear}>C</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('/')}>/</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('*')}>x</Button>
        </Col>
      </Row>
      <br />

      <Row>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('7')}>7</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('8')}>8</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('9')}>9</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('-')}>-</Button>
        </Col>
      </Row>
      <br />

      <Row>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('4')}>4</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('5')}>5</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('6')}>6</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('+')}>+</Button>
        </Col>
      </Row>
      <br />

      <Row>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('1')}>1</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('2')}>2</Button>
        </Col>
        <Col xs='3'>
          <Button variant='dark' onClick={() => addItem('3')}>3</Button>
        </Col>
        <Col xs='3'>
          <Button id='enter' variant='dark' onClick={calculating}>=</Button>
        </Col>
      </Row>
      <br />

      <Row>
        <Col xs='6'>
          <Button id='zero' variant='dark' onClick={() => addItem('0')}>0</Button>
        </Col>
        <Col xs='3'>
          <Button id='decimal' variant='dark' onClick={() => addItem('.')}>.</Button>
        </Col>

      </Row>

    </Container >
  );
}

export default Calculator;
