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
    position="sticky"
    top={top}
    justifyContent="flex-end"
    alignItems="center"
    bg="white"
    maxW={MAX_WIDHT}
    as={Container}
    py="2">
    <div>
      <Stack
        direction="row"
        mb="2"
        flexWrap="wrap"
        justifyContent="flex-end"
        alignItems="center">
        <div>
          <Text as="sub" ml="2">
            Zona
          </Text>
          <Select
            placeholder="Selecciona una zona"
            width="64"
            height="8"
            mx="2"
            variant="outline"
            value={zone}
            onChange={({target}) => handleSelectZone(target.value)}
            borderColor="tomato"
            color="tomato">
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
            width="64"
            height="8"
            mx="2"
            value={agency}
            onChange={({target}) => handleSelectAgency(target.value)}
            borderColor="blue.400"
            color="blue.400">
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
