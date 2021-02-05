import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {  
  return (
    <Menu inverted size='large' style={{borderRadius: 0, marginBottom: '5px'}}>
      <Menu.Item header as={Link} to={'/'}>Viewer</Menu.Item>
      <Menu.Item as={Link} to={'/'}>Home</Menu.Item>
      <Menu.Item as={Link} to={'/Single'}>Single Page</Menu.Item>
      <Menu.Item as={Link} to={'/Functions'}>Functions</Menu.Item>
    </Menu>
  );
}

export default Navbar;