import { Grid, Label } from 'semantic-ui-react';

const PDFViewer = ({WebView, Site}) => {
  return (
    <Grid>
      <Grid.Column textAlign="center">
        <embed
          src={WebView}
          type="application/pdf"
          style={{width:"100%",height:"70vh"}}
          
        />
        {Site && 
          <Label basic pointing>
            {Site}
          </Label> 
        }
      </Grid.Column>
    </Grid>
  );
}

export default PDFViewer;