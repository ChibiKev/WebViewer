import { Grid, Label, Image } from 'semantic-ui-react';

const ImageViewer = ({WebView, Site}) => {
  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Image src={WebView} alt="" rounded fluid/>
        {Site && 
          <Label basic pointing>
            {Site}
          </Label> 
        }
      </Grid.Column>
    </Grid>
  );
}

export default ImageViewer;