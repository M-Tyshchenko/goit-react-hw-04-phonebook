import { DeleteBtn, List, ListItem, Marker } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Marker></Marker>
          <p>
            {contact.name}: {contact.number}
          </p>

          <DeleteBtn onClick={() => onDelete(contact.id)}>Delete</DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};
