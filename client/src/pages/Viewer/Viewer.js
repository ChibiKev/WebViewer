import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import Search from '../../components/Search/Search';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const Viewer = () => {
  const [site, setSite] = useState('')
  const [image, setImage] = useState('')

  useEffect(
    () => {
      fetch(`/screenshot?url=${site}`)
      .then(response => {
        console.log(response)
        setImage(response.url)
      })
      .catch(error => {console.log(error)})
    },
    [site],
  );

  return (
    <Container>
      <Search siteChange={(siteChange) => setSite(siteChange)} />
      <ImageViewer Image={image} />
    </Container>
  );
}

export default Viewer;