const FoundResult = ({Site, Text, Found}) => {
  return (
    <>
      {Found.found ? 
      `${Text} was found ${Found.amountFound.length} times on ${Site}.`
      :
      `${Text} was not found on ${Site}.`
      }
    </>
  );
}

export default FoundResult;