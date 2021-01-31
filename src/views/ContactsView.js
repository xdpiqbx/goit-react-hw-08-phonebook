import ContactForm from '../components/ContactForm/ContactForm ';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

const ContactsView = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
