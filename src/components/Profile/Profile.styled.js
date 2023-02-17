import styled from '@emotion/styled';

export const CardProfile = styled.div`
  width: 600px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 15px;
`;
export const DescriptionProfile = styled.div`
  padding-top: 40px;
  text-align: center;
`;
export const ProfileImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  font-weight: 600;
`;
export const ProfileInfo = styled.p`
  font-size: 35px;
  font-weight: 300;
  color: #b4adad;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  background-color: #f4efef;
  margin: 0;
  padding: 0;
  border-radius: 0px 0px 15px 15px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid rgb(183, 166, 166);
  &:not(:last-child) {
    border-right: 1px solid rgb(183, 166, 166);
  }
`;
export const Label = styled.span`
  font-size: 25px;
  color: #9a9292;
  margin-bottom: 10px;
`;
