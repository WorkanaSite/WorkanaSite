import {Flex, Select} from '@chakra-ui/react';

const Filter = ({zoneOptions = [], agenciesOptions = []}) => (
  <Flex
    flexWrap="wrap"
    position="sticky"
    top="65px"
    justifyContent="center"
    alignItems="center"
    bg="white"
    py="2">
    <Select
      placeholder="Zona"
      width="44"
      mx="2"
      variant="outline"
      borderColor="tomato"
      color="tomato">
      {zoneOptions.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
    <Select
      placeholder="Agencia"
      width="44"
      mx="2"
      borderColor="blue.400"
      color="blue.400">
      {agenciesOptions.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Select>
  </Flex>
);

export default Filter;
