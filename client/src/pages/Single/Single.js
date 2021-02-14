import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import Search from '../../components/Search/Search';
import ImageViewer from '../../components/ImageViewer/ImageViewer';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import HTMLViewer from '../../components/HTMLViewer/HTMLViewer';

const Single = () => {
  const [site, setSite] = useState('');
  const [device, setDevice] = useState('');
  const [functions, setFunctions] = useState('');
  const [view, setView] = useState('');
  const [timer, setTimer] = useState('');
  const [text, setText] = useState('');
  const [webView, setWebView] = useState('');

  useEffect(
    () => {
      const viewImageFunction = async () => {
        await fetch(`/view/image?url=${site}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      const viewPDFFunction = async () => {
        await fetch(`/view/pdf?url=${site}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      const viewHTMLFunction = async () => {
        await fetch(`/view/html?url=${site}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      if(functions === 'view' && view === 'image'){
        viewImageFunction();
      }
      else if(functions === 'view' && view === 'PDF'){
        viewPDFFunction();
      }
      else if(functions === 'view' && view === 'HTML'){
        viewHTMLFunction();
      }
      else if(functions === 'refresh' && view === 'image'){
        setInterval(viewImageFunction, timer*1000);
      }
      else if(functions === 'refresh' && view === 'PDF'){
        setInterval(viewPDFFunction, timer*1000);
      }
      else if(functions === 'find' && view === 'image'){
        viewImageFunction();
      }
      else if(functions === 'find' && view === 'PDF'){
        viewPDFFunction();
      }
      else if(functions === 'refreshfind' && view === 'image'){
        viewImageFunction();
      }
      else if(functions === 'refreshfind' && view === 'PDF'){
        viewPDFFunction();
      }
    },
    [site, device, functions, view, timer, text],
  );

  return (
    <Container>
      <Search
        siteChange={(siteChange) => setSite(siteChange)}
        viewChange={(viewChange) => setView(viewChange)}
        functionChange={(functionChange) => setFunctions(functionChange)}
        deviceChange={(deviceChange) => setDevice(deviceChange)}
        timerChange={(timerChange) => setTimer(timerChange)}
        textChange={(textChange) => setText(textChange)}
      />
      {view === 'image' && 
        <ImageViewer WebView={webView} Site={site} />
      }
      {view === 'PDF' && 
        <PDFViewer WebView={webView} Site={site} />
      }
      {view === 'HTML' && 
        <HTMLViewer WebView={webView} Site={site} />
      }
    </Container>
  );
}

export default Single;