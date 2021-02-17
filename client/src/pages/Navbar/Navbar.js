import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import logo from '../../public/logo.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  } 

  return (
    <Segment inverted style={{borderRadius: 0}}>
      <Menu stackable inverted secondary>
        <Menu.Item as={Link} to={'/'} name='Home' onClick={handleItemClick}>
          <img src={logo} alt='' />
        </Menu.Item>
        <Menu.Item
          as={Link} 
          to={'/'}
          name='Home'
          active={activeItem === 'Home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to={'/Single'}
          name='Single Page'
          active={activeItem === 'Single Page'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to={'/Functions'}
          name='Functions'
          active={activeItem === 'Functions'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  );
}

export default Navbar;