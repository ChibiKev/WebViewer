import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import Search from '../../components/Search/Search';
import FoundResult from '../../components/FoundResult/FoundResult';
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
  const [textCases, setTextCases] = useState('');
  const [webView, setWebView] = useState('');
  const [found, setFound] = useState('');

  useEffect(
    () => {
      const viewImageFunction = async () => {
        await fetch(`/view/image?url=${site}&device=${device}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      const viewPDFFunction = async () => {
        await fetch(`/view/pdf?url=${site}&device=${device}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      const viewHTMLFunction = async () => {
        await fetch(`/view/html?url=${site}&device=${device}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      const findImageFunction = async () => {
        await fetch(`/find/image?url=${site}&device=${device}&text[text]=${text}&text[cases]=${textCases}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      const findPDFFunction = async () => {
        await fetch(`/find/pdf?url=${site}&device=${device}&text[text]=${text}&text[cases]=${textCases}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      const findHTMLFunction = async () => {
        await fetch(`/find/html?url=${site}&device=${device}&text[text]=${text}&text[cases]=${textCases}`)
        .then(response => response.blob())
        .then(blob => {
          setWebView('');
          setWebView(URL.createObjectURL(blob));
        })
        .catch(error => {console.log(error)})
      }
      if(functions === 'view'){
        if(view === 'image'){
          viewImageFunction();
        }
        else if(view === 'PDF'){
          viewPDFFunction();
        }
        else if(view === 'HTML'){
          viewHTMLFunction();
        }
      }
      else if(functions === 'refresh'){
        if(view === 'image'){
          setInterval(viewImageFunction, timer*1000);
        }
        else if(view === 'PDF'){
          setInterval(viewPDFFunction, timer*1000);
        }
        else if(view === 'HTML'){
          setInterval(viewHTMLFunction, timer*1000);
        }
      }
      else if(functions === 'find'){
        fetch(`/find/text?url=${site}&text[text]=${text}&text[cases]=${textCases}`)
        .then(response => response.json())
        .then(response => setFound(response))
        .catch(error => {console.log(error)})

        if(view === 'image'){
          findImageFunction();
        }
        else if(view === 'PDF'){
          findPDFFunction();
        }
        else if(view === 'HTML'){
          findHTMLFunction();
        }
      }
      else if(functions === 'refreshfind'){
        if(view === 'image'){
          viewImageFunction();
        }
        else if(view === 'PDF'){
          viewPDFFunction();
        }
        else if(view === 'HTML'){
          viewHTMLFunction();
        }
      }
    },
    [site, device, functions, view, timer, text, textCases],
  );

  return (
    <Container>
      <Search
        siteChange={(siteChange) => setSite(siteChange)}
        viewChange={(viewChange) => setView(viewChange)}
        deviceChange={(deviceChange) => setDevice(deviceChange)}
        functionChange={(functionChange) => setFunctions(functionChange)}
        timerChange={(timerChange) => setTimer(timerChange)}
        textChange={(textChange) => setText(textChange)}
        textCasesChange={(textCasesChange) => setTextCases(textCasesChange)}
      />
      {functions === 'find' && 
        <FoundResult Site={site} Text={text} Found={found} />
      }
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