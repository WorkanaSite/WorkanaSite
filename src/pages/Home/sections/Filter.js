import {Flex, Select, Stack, Container, Text} from '@chakra-ui/react';
import {MAX_WIDHT} from 'src/constants';

const Filter = ({
  zoneOptions = [],
  agenciesOptions = [],
  handleSelectGender,
  handleSelectZone,
  handleSelectAgency,
  zone,
  agency,
  gender,
  top = 65,
}) => (
  <Flex
    zIndex="banner"
    flexWrap="wrap"
    justifyContent="flex-end"
    alignItems="center"
    bg="transparent"
    maxW={MAX_WIDHT}
    as={Container}
    py="2">
    <div>
      <Stack
        direction="row"
        mb="2"
        // centrado cuando este en grande
        justifyContent={{base: 'flex-end', lg: 'center'}}>
        <div>
          <Text as="sub" ml="2">
            Zona
          </Text>
          <Select
            placeholder="Selecciona una zona"
            width={{base: '32', lg: '64'}} // arreglar aqui
            height={{base: '4', lg: '8'}}
            mx="2"
            variant="outline"
            value={zone}
            onChange={({target}) => handleSelectZone(target.value)}
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
            placeholder="Selecciona una agencia"
            width={{base: '32', lg: '64'}} // arreglar aqui
            height={{base: '4', lg: '8'}}
            mx="2"
            value={agency}
            onChange={({target}) => handleSelectAgency(target.value)}
            bgColor="white">
            {agenciesOptions.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </div>
      </Stack>
    </div>
  </Flex>
);

export default Filter;
