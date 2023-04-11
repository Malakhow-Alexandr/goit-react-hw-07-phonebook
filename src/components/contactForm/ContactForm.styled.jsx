import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
  padding: 10px;
  margin-right: auto;
`;

export const Label = styled.label`
  font-family: 'Rubik', sans-serif;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  font-family: 'Rubik', sans-serif;
  top: 0;
  left: 250px;
  font-size: 14px;
  color: #ff0015;
`;

export const StyledField = styled(Field)`
  width: 230px;
  height: 30px;
  padding: 2px 5px;
  margin: 3px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  font-weight: 400;
  color: #444;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-color: #f08307;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
  &:focus ~ span {
    color: #f08307;
  }
`;

export const StyledLabel = styled.span`
  position: absolute;
  top: -18px;
  left: 0;
  font-family: 'Rubik', sans-serif;
  transition: color 600ms ease-in-out;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: #f08307;
  border: none;
  z-index: 1;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #b46306;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #fff;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
  &:disabled {
    background-color: grey;
  }
  &:disabled:hover:after {
    display: none;
  }
  &:disabled:active {
    top: 0;
  }
`;
