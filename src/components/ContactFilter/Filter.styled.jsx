import styled from '@emotion/styled';

export const FilterStyledLabel = styled.label`
  font-family: 'Rubik', sans-serif;
  position: relative;
`;

export const FilterStyledInput = styled.input`
  width: 230px;
  height: 30px;
  padding: 2px 5px;
  margin: 0px 0px 20px 170px;
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
export const FilterLabel = styled.span`
  position: absolute;
  top: 0px;
  left: 20px;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  font-size: 20px;
  transition: color 600ms ease-in-out;
`;
