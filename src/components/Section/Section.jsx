import { SectionStyled, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <SectionStyled>
    {title && <Title>{title}</Title>}
    {children}
  </SectionStyled>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
