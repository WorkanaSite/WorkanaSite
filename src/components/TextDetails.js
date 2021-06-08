import {Text} from '@chakra-ui/react';

const TextDetails = ({label, value}) => (
  <Text display="block" mb="4" fontSize="lg" color="black">
    <Text as="span" color="blue.400">
      {label}:{' '}
    </Text>
    <b>{value}</b>
  </Text>
);
export default TextDetails;
