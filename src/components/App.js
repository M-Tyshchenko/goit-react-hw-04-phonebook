import { Component } from 'react';
import { GlobalStyles } from './GlobalStyle';
import { Container, MainTitle, Title } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const localStorageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem(localStorageKey);
    if (storageContacts !== null) {
      this.setState({
        contacts: JSON.parse(storageContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: currentContacts } = this.state;

    if (prevContacts !== currentContacts) {
      localStorage.setItem(localStorageKey, JSON.stringify(currentContacts));
    }
  }

  addContact = newContact => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    ) === undefined
      ? this.setState(prevState => {
          return { contacts: [...prevState.contacts, newContact] };
        })
      : alert(`${newContact.name} is already in contacts`);
  };

  deleteContact = delContactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== delContactId
        ),
      };
    });
  };

  changeFilterByName = name => {
    this.setState({ filter: name });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addContact={this.addContact} />

        <Title>Contacts</Title>
        <Filter filterByName={filter} onChangeName={this.changeFilterByName} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />

        <GlobalStyles />
      </Container>
    );
  }
}
