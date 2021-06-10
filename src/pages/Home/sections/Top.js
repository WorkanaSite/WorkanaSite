import {Box} from '@chakra-ui/react';
import Models from 'src/components/Models';

const Top = ({models = []}) => {
  return (
    <Box
      bg="l_bg"
      zIndex="modal"
      as="div"
      // position="sticky"
      // top={0}
      justifyContent={{base: 'flex-start', xl: 'center'}}
      height={{base: 90, sm: 170, md: 200, lg: 240}}
      style={{
        display: 'flex',
        overflow: 'scroll',
      }}>
      <Models models={models} />
    </Box>
  );
};

export default Top;
