import { ContactsList } from './contactsList/ContactLis';
import { ContactForm } from './contactForm/ContactForm';
import { ContactFilter } from './ContactFilter/Filter';
import { Section } from './Section/Section';
import { Container } from './Container/Container.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operation';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    toast.error(`Sorry we have a ${error}, please reload page!`);
  }

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm></ContactForm>
      </Section>
      <Section title={'Contacts'}>
        <ContactFilter />
        <ContactsList />
      </Section>
      <ThreeDots
        height="50"
        width="50"
        color="#e9eee8"
        ariaLabel="three-circles-rotating"
        visible={isLoading}
        wrapperStyle={{ position: 'absolute', top: 215, left: 175 }}
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};
