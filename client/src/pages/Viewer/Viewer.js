import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import Search from '../../components/Search/Search';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const Viewer = () => {
  const [site, setSite] = useState('');
  const [functions, setFunctions] = useState('');
  const [timer, setTimer] = useState('');
  const [webView, setWebView] = useState('');

  useEffect(
    () => {
      const viewFunction = () => {
        return fetch(`/view?url=${site}`)
        .then(response => {
          console.log(response)
          setWebView(response.url)
        })
        .catch(error => {console.log(error)})
      }
      const refreshFunction = () => {
        return fetch(`/view?url=${site}`)
        .then(response => {
          console.log(response)
          setWebView(response.url)
        })
        .catch(error => {console.log(error)})
      }
      if(functions === 'view'){
        viewFunction();
      }
      else if(functions === 'refresh'){
        var intervalId = window.setInterval(function(){
          /// call your function here
          refreshFunction()
        }, timer*1000);
      }
      clearInterval(intervalId) 
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

export default Viewer;