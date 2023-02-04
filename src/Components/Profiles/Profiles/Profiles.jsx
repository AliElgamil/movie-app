import React from 'react';
import {
  Container,
  Title,
  List,
  Item,
  Name,
  Picture,
} from '../style/SelectProfile';

export default function Profiles({ user, loading, setProfile, setLoading }) {
  const handleProfile = () => {
    setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    setLoading(true);
  };
  return (
    <Container>
      <Title>Who's watching?</Title>
      <List>
        <Item onClick={handleProfile}>
          {loading ? (
            <img src="images/misc/loading.gif" alt="Loading" />
          ) : (
            <Picture src={`${user.photoURL}`} alt="Profile image" />
          )}
          <Name>{user.displayName}</Name>
        </Item>
      </List>
    </Container>
  );
}
