import styled from '@emotion/styled';

export const Starus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 20px;
  background-color: ${({ status }) => {
    switch (status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'yellow';
    }
  }};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 1px dotted black;
  margin-right: 20px;
`;
export const Name = styled.p`
  margin: 0;
`;
