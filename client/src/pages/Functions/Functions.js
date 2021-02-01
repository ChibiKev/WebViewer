import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import Search from '../../components/Search/Search';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const Functions = () => {
  const [site, setSite] = useState('')
  const [webView, setWebView] = useState('')

  useEffect(
    () => {
      fetch(`/screenshot?url=${site}`)
      .then(response => {
        console.log(response)
        setWebView(response.url)
      })
      .catch(error => {console.log(error)})
    },
    [site],
  );

  return (
    <Container>
      <Search siteChange={(siteChange) => setSite(siteChange)} />
      <ImageViewer WebView={webView} Site={site} />
    </Container>
  );
}

export default Functions;