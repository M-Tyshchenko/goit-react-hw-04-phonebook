import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 16px;
`;

export const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormField = styled.input`
  border-color: #eef0f2;
  border-style: solid;
  font-size: 16px;
  font-weight: 400;

  &:hover,
  &:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;
