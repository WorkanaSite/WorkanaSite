import {
  Flex,
  Select,
  Stack,
  Badge,
  HStack,
  Tag,
  TagLabel,
  TagRightIcon,
} from '@chakra-ui/react';
import {AiOutlineWoman, AiOutlineMan} from 'react-icons/ai';
import {FaTransgenderAlt} from 'react-icons/fa';

const CustomTag = ({Icon, colorScheme, label, handleSelect, isSelected}) => {
  return (
    <HStack spacing={4}>
      <Tag
        onClick={() => handleSelect(label)}
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
    py="2">
    <Stack direction="row">
      <CustomTag
        label="Mujeres"
        Icon={AiOutlineWoman}
        colorScheme="red"
        isSelected={gender === 'Mujeres'}
        handleSelect={handleSelectGender}
      />
      <CustomTag
        label="Hombres"
        Icon={AiOutlineMan}
        colorScheme="blue"
        isSelected={gender === 'Hombres'}
        handleSelect={handleSelectGender}
      />
      <CustomTag
        label="Trans"
        Icon={FaTransgenderAlt}
        colorScheme="purple"
        isSelected={gender === 'Trans'}
        handleSelect={handleSelectGender}
      />
    </Stack>
    <Select
      placeholder="Zona"
      width="44"
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
      width="44"
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
  </Flex>
);

export default Filter;
