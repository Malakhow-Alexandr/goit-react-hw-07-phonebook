import { ContactListItem } from 'components/contactsListItem/ContactsListItem';
import { ListStyled } from './ContactList.styled';
import { selectFilter } from 'redux/selectors';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ListStyled>
      {filteredContacts?.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ListStyled>
  );
};
