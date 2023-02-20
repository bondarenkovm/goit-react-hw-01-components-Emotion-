import PropTypes from 'prop-types';

import Friend from './Friend';
import { List, Item } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <Item key={id}>
          <Friend avatar={avatar} status={isOnline} name={name} />
        </Item>
      ))}
    </List>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
