import {
  Stat,
  StatLabel,
  StatNumber,
  Icon as ChakraIcon,
  StatHelpText,
} from '@chakra-ui/react';

const InfoModel = ({color, Icon, title, value, details = [], href}) => {
  return (
    <Stat
      p="2"
      mb="2"
      color={color}
      borderRadius="8"
      borderColor={color}
      border="1px solid">
      <StatLabel fontSize="md">{title}</StatLabel>
      <StatNumber
        onClick={() => href && window.open(href, '_blank')}
        display="flex"
        flexDirection="row"
        my="2"
        cursor={href && 'pointer'}>
        <ChakraIcon as={Icon} mr="4" />
        {value}
      </StatNumber>
      {details.map(({label, ...props}, index) => (
        <StatHelpText key={index} {...props}>
          {label}
        </StatHelpText>
      ))}
    </Stat>
  );
};

export default InfoModel;
