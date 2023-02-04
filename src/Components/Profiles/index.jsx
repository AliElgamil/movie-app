import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Loading';
import { ReleaseBody } from '../Loading/Style';
import Profiles from './Profiles/Profiles';
import BroseContent from '../BroseContent';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {
  ContainerText,
  Dropdown,
  DropdownItem,
  Group,
  Pictuer,
  TextLink,
  GroupDropdown,
} from './style/SelectProfile';
import { getAuth } from 'firebase/auth';
import Search from '../Search';
import Fuse from 'fuse.js';

export default function SelectProfile({ user, slides }) {
  const [category, setCategory] = useState('movies');
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);
  const auth = getAuth();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    });

    const result = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && result.length > 0) {
      setSlideRows(result);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm, category, slides]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <ReleaseBody />}
      <Navbar user={user}>
        <ContainerText>
          <Group>
            <TextLink
              active={category === 'movies' ? true : false}
              onClick={() => setCategory('movies')}
            >
              Movies
            </TextLink>
            <TextLink
              active={category === 'series' ? true : false}
              onClick={() => setCategory('series')}
            >
              series
            </TextLink>
          </Group>
        </ContainerText>
        <Group>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <GroupDropdown>
            <Pictuer src={user.photoURL} alt="user" />
            <Dropdown>
              <DropdownItem>
                <Pictuer src={user.photoURL} alt="user" />
                <TextLink>{user.displayName}</TextLink>
              </DropdownItem>
              <DropdownItem>
                <TextLink onClick={signOut}>Sign out</TextLink>
              </DropdownItem>
            </Dropdown>
          </GroupDropdown>
        </Group>
      </Navbar>
      <BroseContent slideRows={slideRows} category={category} />
      <Footer />
    </>
  ) : (
    <Profiles
      user={user}
      setProfile={setProfile}
      loading={loading}
      setLoading={setLoading}
    />
  );
}
