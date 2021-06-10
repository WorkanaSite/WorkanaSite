import {Flex, Select, Text} from '@chakra-ui/react';

const Filter = ({
  zoneOptions = [],
  agenciesOptions = [],
  handleSelectZone,
  handleSelectAgency,
  zone,
  agency,
}) => (
  <Flex
    flex={1}
    justifyContent={{base: 'flex-end', sm: 'center'}}
    mb={{base: '2', md: '6'}}>
    <div>
      <Text as="sub" ml="2">
        Zona
      </Text>
      <Select
        fontSize={{base: '9', md: '14', lg: '16'}}
        placeholder="Zonas disponibles"
        width={{base: '36', lg: '56'}}
        height={{base: '6', lg: '8'}}
        mx="2"
        variant="outline"
        value={zone}
        onChange={({target}) => handleSelectZone(target.value)}
        borderColor="black"
        bgColor="white">
        {zoneOptions.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </div>
    <div>
      <Text as="sub" ml="2">
        Agencia
      </Text>
      <Select
        fontSize={{base: '9', md: '14', lg: '16'}}
        placeholder="Agencias disponibles"
        width={{base: '36', lg: '56'}}
        height={{base: '6', lg: '8'}}
        mx="2"
        value={agency}
        onChange={({target}) => handleSelectAgency(target.value)}
        borderColor="black"
        bgColor="white">
        {agenciesOptions.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </div>
  </Flex>
);

export default Filter;
