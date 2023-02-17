import styled from '@emotion/styled';
import randomColor from 'utils/RandomColor';

export const Section = styled.section`
  width: 600px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 15px;
  margin-top: 30px;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  align-items: center;
  border-radius: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${randomColor};
`;
export const Label = styled.span`
  font-size: 20px;
  color: #ffffff;
`;
export const Percentage = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
`;
