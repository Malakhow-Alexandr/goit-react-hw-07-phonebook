import styled from '@emotion/styled';

export const ListItemStyled = styled.li`
  display: flex;
  flex-direction: row-reverse;

  gap: 20px;
  align-items: center;
  margin-bottom: 10px;
`;
export const ContactDesc = styled.p`
  margin: 0;
  font-size: 17px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  color: #fff;
  transition: color 250ms ease-in-out;
`;

export const ButtonListItem = styled.button`
  display: block;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  color: #fff;
  padding: 0;
  line-height: 42px;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 500;
  background: #f08307;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;

  &:hover {
    color: #c41431;
    background: transparent;
    box-shadow: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    height: 2px;
    background: #b60816;
    box-shadow: -1px -1px 5px 0px #b60816, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }

  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
  &:hover ~ p {
    color: red;
  }
  &:disabled {
    background: #aea8b3;
    background: linear-gradient(0deg, #958a97 0%, #a89da8 100%);
    &:before,
    &:after {
      height: 0;
      background: grey;
      box-shadow: none;
      transition: 0ms ease all;
    }
  }
`;
