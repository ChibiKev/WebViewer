import { useState } from 'react';
import { Container } from 'semantic-ui-react'
import UserSearch from '../../components/UserSearch/UserSearch';
import Account from '../../components/Account/Account';

const User = () => {
  const [site, setSite] = useState('');
  const [view, setView] = useState('');
  const [properties, setProperties] = useState('');

  return (
    <Container>
      <UserSearch
        siteChange={(siteChange) => setSite(siteChange)}
        viewChange={(viewChange) => setView(viewChange)}
        propertiesChange={(propertiesChange) => setProperties(propertiesChange)}
      />
      {((properties.username || properties.email || properties.phone) && properties.password) &&
        <Account Site={site} />
      }
    </Container>
  );
}

export default User;