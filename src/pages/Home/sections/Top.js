import {Box} from '@chakra-ui/react';
import Models from 'src/components/Models';

const Top = ({models}) => {
  return (
    <Box
      as="div"
      justifyContent={{base: 'flex-start', lg: 'center'}}
      style={{
        display: 'flex',
        overflow: 'scroll',
        height: 200,
      }}>
      <Models models={models} />
    </Box>
  );
};

export default Top;
