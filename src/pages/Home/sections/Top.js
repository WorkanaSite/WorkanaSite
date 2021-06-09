import {Box} from '@chakra-ui/react';
import Models from 'src/components/Models';

const Top = ({models = []}) => {
  return (
    <Box
      bg="l_bg"
      zIndex="modal"
      as="div"
      position="sticky"
      top={0}
      justifyContent={{
        base: 'flex-start',
        lg: models.length > 16 ? 'flex-start' : 'center',
      }}
      style={{
        display: 'flex',
        overflow: 'scroll',
        height: 150,
      }}>
      <Models models={models} />
    </Box>
  );
};

export default Top;
