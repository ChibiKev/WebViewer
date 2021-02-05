import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import Search from '../../components/Search/Search';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const Single = () => {
  const [site, setSite] = useState('');
  const [functions, setFunctions] = useState('');
  const [timer, setTimer] = useState('');
  const [webView, setWebView] = useState('');

  useEffect(
    () => {
      const viewFunction = () => {
        return fetch(`/view?url=${site}`)
        .then(response => {
          setWebView('')
          console.log(response)
          setWebView(response.url)
        })
        .catch(error => {console.log(error)})
      }
      if(functions === 'view'){
        viewFunction();
      }
      else if(functions === 'refresh'){
        window.setInterval(viewFunction, timer*1000);
      }
    },
    [site, functions, timer],
  );

  return (
    <Container>
      <Search siteChange={(siteChange) => setSite(siteChange)} functionChange={(functionChange) => setFunctions(functionChange)} timerChange={(timerChange) => setTimer(timerChange)}/>
      <ImageViewer WebView={webView} Site={site} />
    </Container>
  );
}

export default Single;