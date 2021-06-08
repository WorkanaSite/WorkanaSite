import {
  Flex,
  Select,
  Stack,
  Badge,
  HStack,
  Tag,
  TagLabel,
  TagRightIcon,
  Container,
} from '@chakra-ui/react';
import {AiOutlineWoman, AiOutlineMan} from 'react-icons/ai';
import {FaTransgenderAlt} from 'react-icons/fa';
import {MAX_WIDHT} from 'src/constants';

const CustomTag = ({
  Icon,
  colorScheme,
  label,
  value,
  handleSelect,
  isSelected,
}) => {
  return (
    <HStack spacing={4}>
      <Tag
        onClick={() => handleSelect(value)}
        variant="solid"
        colorScheme={isSelected ? colorScheme : 'gray'}>
        <TagLabel>{label}</TagLabel>
        <TagRightIcon as={Icon} />
      </Tag>
    </HStack>
  );
};
const Filter = ({
  zoneOptions = [],
  agenciesOptions = [],
  handleSelectGender,
  handleSelectZone,
  handleSelectAgency,
  zone,
  agency,
  gender,
}) => (
  <Flex
    flexWrap="wrap"
    position="sticky"
    top="65px"
    justifyContent="flex-end"
    alignItems="center"
    bg="white"
    maxW={MAX_WIDHT}
    as={Container}
    py="2">
    <Stack direction="row" mb="2">
      <CustomTag
        label="Mujeres"
        value="Mujer"
        Icon={AiOutlineWoman}
        colorScheme="red"
        isSelected={gender === 'Mujer'}
        handleSelect={handleSelectGender}
      />
      <CustomTag
        label="Hombres"
        value="Hombre"
        Icon={AiOutlineMan}
        colorScheme="blue"
        isSelected={gender === 'Hombre'}
        handleSelect={handleSelectGender}
      />
      <CustomTag
        label="Trans"
        value="Trans"
        Icon={FaTransgenderAlt}
        colorScheme="purple"
        isSelected={gender === 'Trans'}
        handleSelect={handleSelectGender}
      />
    </Stack>
    <Stack direction="row" mb="2" flexWrap="wrap">
      <Select
        placeholder="Zona"
        width="32"
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
      <Select
        placeholder="Agencia"
        width="32"
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
    </Stack>
  </Flex>
);

export default Filter;
