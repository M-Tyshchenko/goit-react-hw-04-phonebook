import styled from 'styled-components';

export const List = styled.ul`
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 16px;
`;

export const Marker = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fff;
  border-color: transparent;
  width: fit-content;
  border-radius: 8px;

  &:hover,
  &:focus {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;
