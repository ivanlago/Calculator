import Calculator from './Calculator';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import ReactDOM from "react-dom";

describe('Calculator', () => {
  it('should render the component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('must clear the display', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('display')).toHaveValue('0');
  });

  it('must add 2 + 3', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveValue('5');
  });

  it('must subtract 2 - 3', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveValue('-1');
  });

  it('must calculate 6 / 3', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveValue('2');
  });

  it('must calculate 6 x 3', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveValue('18');
  });

  it('must add up to 2.5 + 3', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display')).toHaveValue('5.5');
  });

})
