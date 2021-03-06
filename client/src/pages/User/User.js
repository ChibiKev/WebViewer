import { useState } from 'react';
import { Container } from 'semantic-ui-react'
import UserSearch from '../../components/UserSearch/UserSearch';

const User = () => {
  const [site, setSite] = useState('');
  const [view, setView] = useState('');

  return (
    <Container>
      <UserSearch
        siteChange={(siteChange) => setSite(siteChange)}
        viewChange={(viewChange) => setView(viewChange)}
      />
    </Container>
  );
}

export default User;