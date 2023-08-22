import { FormField, FormItem, Wrapper } from './Filter.styled';

export const Filter = ({ filterByName, onChangeName }) => {
  return (
    <Wrapper>
      <FormItem>
        Find contacts by name
        <FormField
          type="text"
          value={filterByName}
          onChange={evt => onChangeName(evt.target.value)}
        />
      </FormItem>
    </Wrapper>
  );
};
