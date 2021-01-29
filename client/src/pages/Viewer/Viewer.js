import { useState, useEffect } from 'react';
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
    <>
      <Search siteChange={(siteChange) => setSite(siteChange)} />
      <ImageViewer Image={image} />
    </>
  );
}

export default Viewer;