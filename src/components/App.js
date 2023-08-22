import { GlobalStyles } from './GlobalStyle';
import { Container, MainTitle, Title } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

const localStorageKey = 'contacts';

const getInitialContacts = () => {
  const storageContacts = localStorage.getItem(localStorageKey);
  if (storageContacts !== null) {
    return JSON.parse(storageContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    ) === undefined
      ? setContacts(prevState => [...prevState, newContact])
      : toast(`${newContact.name} is already in contacts`, {
          icon: '❗',
        });
  };

  const deleteContact = delContactId =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== delContactId)
    );

  const changeFilterByName = name => setFilter(name);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm addContact={addContact} />

      <Title>Contacts</Title>
      <Filter filterByName={filter} onChangeName={changeFilterByName} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />

      <Toaster />
      <GlobalStyles />
    </Container>
  );
};
