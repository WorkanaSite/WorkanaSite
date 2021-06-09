import {HStack, Tag, TagLabel, TagRightIcon} from '@chakra-ui/react';
import useNavigationByGender from 'src/pages/hooks/useNavigationByGender';

const CustomTag = ({
  Icon,
  colorScheme,
  label,
  value,
  handleSelect = undefined,
  isSelected,
}) => {
  const {navigateToHomeByGender} = useNavigationByGender();
  const onClick =
    typeof handleSelect === 'function' ? handleSelect : navigateToHomeByGender;

  return (
    <HStack spacing={4} mx="2">
      <Tag
        p="2"
        onClick={() => onClick(value)}
        variant="solid"
        colorScheme={isSelected ? colorScheme : 'gray'}>
        <TagLabel>{label}</TagLabel>
        <TagRightIcon as={Icon} />
      </Tag>
    </HStack>
  );
};

export default CustomTag;
