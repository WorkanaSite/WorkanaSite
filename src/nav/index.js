import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  useDisclosure,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import NextLink from 'src/components/NextLink';
import {COLOR_MENU, NAV_ITEMS} from 'src/constants/nav';
import CustomTag from './GenderTag';
import {gendersOptions} from 'src/components/GenderIcons';

const Navigation = ({top = 0, handleSelectGender, gender}) => {
  const {isOpen, onToggle} = useDisclosure();
  return (
    <Box position="sticky" top={top} zIndex="modal" bg={COLOR_MENU.bg} p="2">
      <Grid
        h={{base: '85px', lg: '64px'}}
        templateRows={{base: 'repeat(2, 1fr)', lg: '1fr'}}
        templateColumns={{base: '75px 1fr 75px', lg: '.5fr 1fr 1fr'}}
        gap={1}>
        <GridItem rowSpan={1} colSpan={1}>
          <IconButton
            display={{base: 'flex', md: 'none'}}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          display="flex"
          justifyContent="center">
          <NextLink href="/">
            <Image
              align={useBreakpointValue({base: 'center'})}
              src="/logo.png"
              alt="site logo"
              height={{base: '44px', lg: '100%'}}
            />
          </NextLink>
          <Flex
            display={{base: 'none', md: 'flex'}}
            justifyContent="center"
            ml={10}>
            <DesktopNav />
          </Flex>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Box
            display={{base: 'none', lg: 'flex'}}
            h="full"
            justifyContent="flex-end"
            alignItems="center">
            {Object.values(gendersOptions).map(
              ({label, value, Icon}, index) => (
                <CustomTag
                  key={index}
                  label={label}
                  value={value}
                  Icon={Icon}
                  colorScheme="red"
                  isSelected={gender === value}
                  handleSelect={handleSelectGender}
                />
              ),
            )}
          </Box>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={3}
          display={{base: 'flex', lg: 'none'}}
          justifyContent="center">
          {Object.values(gendersOptions).map(({label, value, Icon}, index) => (
            <CustomTag
              key={index}
              label={label}
              value={value}
              Icon={Icon}
              colorScheme="red"
              isSelected={gender === value}
              handleSelect={handleSelectGender}
            />
          ))}
        </GridItem>
      </Grid>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
        <Stack direction="row" mb="1"></Stack>
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4} alignItems="center">
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={navItem.isNextLink && NextLink}
                target={navItem.isNextLink ? '' : '_blank'}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={COLOR_MENU.text}
                _hover={{
                  textDecoration: 'none',
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({label, href, subLabel}) => {
  return (
    <Link href={href} role={'group'} display={'block'} p={2} rounded={'md'}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{color: 'pink.400'}}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{md: 'none'}} bg={COLOR_MENU.bg}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({label, children, href}) => {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <NextLink href={href}>
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text fontWeight={600} color={COLOR_MENU.text}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Stack>
    </NextLink>
  );
};

export default Navigation;
