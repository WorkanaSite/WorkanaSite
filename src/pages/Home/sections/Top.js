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
      justifyContent={'center'}
      height={{base: 80, lg: 150}} // cambiar el
      style={{
        display: 'flex',
        overflow: 'scroll',
      }}>
      <Models models={models} />
    </Box>
  );
};

export default Top;
