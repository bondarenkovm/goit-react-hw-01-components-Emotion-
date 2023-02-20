import PropTypes from 'prop-types';
import { Avatar, Name, Starus } from './Friend.styled';

export default function Friend({ avatar, name, status }) {
  return (
    <>
      <Starus status={status}></Starus>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
}

Friend.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
