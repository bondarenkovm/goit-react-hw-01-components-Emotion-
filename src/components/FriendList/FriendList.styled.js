import styled from '@emotion/styled';

export const List = styled.ul`
  width: 600px;
  text-align: center;
  padding: 0px;
  margin-top: 30px;
  margin-bottom: 0;
  list-style: none;
`;
export const Item = styled.li`
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  display: flex;
  border-radius: 10px;
  align-items: center;
  padding: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
