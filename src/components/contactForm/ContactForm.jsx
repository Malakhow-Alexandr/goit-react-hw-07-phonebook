import { ErrorMessage, Formik } from 'formik';
import { formatNumber } from 'utils/formatNumber';
import { formatName } from 'utils/formatName';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { addContacts } from 'redux/operation';

import * as yup from 'yup';

import {
  StyledForm,
  Label,
  StyledErrorMessage,
  StyledField,
  Button,
  StyledLabel,
} from './ContactForm.styled';
import { toast } from 'react-toastify';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required(),
  number: yup
    .string()
    .trim()
    .test(
      'maxDigits',
      'Phone number must not have more than 12 digits',
      value => {
        if (!value) return true;
        const numDigits = value.replace(/\D/g, '').length;
        return numDigits <= 12;
      }
    )
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const contact = {
      name: formatName(values.name),
      number: formatNumber(values.number),
    };

    if (
      contacts
        .map(contact => contact.name.toLowerCase())
        .includes(values.name.toLowerCase())
    ) {
      return toast.warn(`${values.name} is alredy in contacts.`);
    }

    if (!isLoading && !error) {
      toast.success(`${values.name} add to contacts.`);
    }

    dispatch(addContacts(contact));

    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label>
          <StyledField type="text" name="name" />
          <StyledLabel>Name</StyledLabel>
          <ErrorMessage component={StyledErrorMessage} name="name" />
        </Label>

        <Label>
          <StyledField type="tell" name="number" />
          <StyledLabel>Number</StyledLabel>
          <ErrorMessage component={StyledErrorMessage} name="number" />
        </Label>

        <Button type="submit">Add Contact</Button>
      </StyledForm>
    </Formik>
  );
};
