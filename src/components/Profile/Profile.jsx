import PropTypes from 'prop-types';
import {
  CardProfile,
  DescriptionProfile,
  ProfileImg,
  ProfileName,
  ProfileInfo,
  List,
  Item,
  Label,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <CardProfile>
      <DescriptionProfile>
        <ProfileImg src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </DescriptionProfile>

      <List>
        <Item>
          <Label>Followers</Label>
          <span>{followers}</span>
        </Item>
        <Item>
          <Label>Views</Label>
          <span>{views}</span>
        </Item>
        <Item>
          <Label>Likes</Label>
          <span>{likes}</span>
        </Item>
      </List>
    </CardProfile>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
