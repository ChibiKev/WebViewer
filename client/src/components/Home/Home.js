import Search from '../Search/Search';
import ImageViewer from '../ImageViewer/ImageViewer';

const Search = ({onAdd, Image}) => {
  return (
    <>
      <Search onAdd={onAdd}/>
      <ImageViewer Image={Image} />
    </>
  );
}

export default Home;