import { Message } from 'semantic-ui-react';

const FoundResult = ({Site, Text, Found}) => {
  return (
    <>
      {Found.found ? 
        <Message positive>
          <Message.Header>Found!</Message.Header>
          {`${Text} was found ${Found.amountFound.length} times on ${Site}.`}
        </Message>
      :
        <Message negative>
          <Message.Header>Not Found!</Message.Header>
          {`${Text} was not found on ${Site}.`}
        </Message>
      }
    </>
  );
}

export default FoundResult;