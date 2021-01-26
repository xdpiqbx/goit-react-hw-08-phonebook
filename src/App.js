import { useEffect } from 'react';
import { connect } from 'react-redux';
import s from './App.module.scss';
import ContactForm from './components/ContactForm/ContactForm ';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { fetchedContacts } from './redux/operations';

const App = ({fetchedContacts}) => {

  useEffect(()=>{
    fetchedContacts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={s.AppContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contacts__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchedContacts: () => dispatch(fetchedContacts())
})

export default connect(null, mapDispatchToProps)(App);
