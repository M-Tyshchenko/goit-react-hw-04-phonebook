import { Formik } from 'formik';
import {
  FormItem,
  StyledField,
  StyledForm,
  SubmitBtn,
  ErrMessage,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Required'),
  number: Yup.number().required('Required'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        addContact({...values, id: nanoid()});
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormItem>
          Name
          <StyledField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrMessage name="name" component="div" />
        </FormItem>

        <FormItem>
          Number
          <StyledField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrMessage name="number" component="div" />
        </FormItem>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </StyledForm>
    </Formik>
  );
};
