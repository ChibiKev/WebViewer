import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import Search from '../../components/Search/Search';
import ImageViewer from '../../components/ImageViewer/ImageViewer';

const Single = () => {
  const [site, setSite] = useState('');
  const [functions, setFunctions] = useState('');
  const [view, setView] = useState('');
  const [timer, setTimer] = useState('');
  const [text, setText] = useState('');
  const [webView, setWebView] = useState('');

  useEffect(
    () => {
      const viewImageFunction = () => {
        return fetch(`/view/image?url=${site}`)
        .then(response => {
          setWebView('')
          console.log(response)
          setWebView(response.url)
        })
        .catch(error => {console.log(error)})
      }
      const viewPDFFunction = () => {
        return fetch(`/view/pdf?url=${site}`)
        .then(response => {
          setWebView('')
          console.log(response)
          setWebView(response.url)
        })
        .catch(error => {console.log(error)})
      }
      if(functions === 'view' && view === 'image'){
        viewImageFunction();
      }
      else if(functions === 'view' && view === 'PDF'){
        viewPDFFunction();
      }
      else if(functions === 'refresh'){
        window.setInterval(viewImageFunction, timer*1000);
      }
      else if(functions === 'find'){
        viewImageFunction();
      }
      else if(functions === 'refreshfind'){
        viewImageFunction();
      }
    },
    [site, functions, view, timer],
  );

  return (
    <Container>
      <Search
        siteChange={(siteChange) => setSite(siteChange)}
        viewChange={(viewChange) => setView(viewChange)}
        functionChange={(functionChange) => setFunctions(functionChange)}
        timerChange={(timerChange) => setTimer(timerChange)}
        textChange={(textChange) => setText(textChange)} />
      <ImageViewer WebView={webView} Site={site} />
    </Container>
  );
}

export default Single;