import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  margin-top: 30px;
  text-align: center;
`;
export const HeaderTable = styled.th`
  background: #0dedaa;
  color: #f2e9e9;
  padding: 10px 10px;
`;
export const StringData = styled.tr`
  background-color: #ccdfe7;
  &:nth-of-type(2n) {
    background-color: rgb(221, 205, 175);
  }
`;
export const DataCell = styled.td`
  padding: 10px 10px;
`;
