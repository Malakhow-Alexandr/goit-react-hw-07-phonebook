import { Dna } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectIsLoading, selectError } from 'redux/selectors';

import PropTypes from 'prop-types';
import {
  ListItemStyled,
  ButtonListItem,
  ContactDesc,
} from './ContactListItem.styled';

import { toast } from 'react-toastify';

export const ContactListItem = ({ id, name, number }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <>
      <ListItemStyled>
        <ButtonListItem
          disabled={isLoading}
          onClick={() => {
            dispatch(deleteContact(id));
            if (!isLoading && !error) {
              toast.success(`${name} deleted from contacts `);
            }
          }}
        >
          <span>{isLoading ? <Dna height="40" width="40" /> : 'Delete'}</span>
        </ButtonListItem>
        <ContactDesc>{number}</ContactDesc>
        <ContactDesc>{name} :</ContactDesc>
      </ListItemStyled>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
