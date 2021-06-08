import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
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
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import NextLink from 'src/components/NextLink';
import {COLOR_MENU, NAV_ITEMS} from 'src/constants/nav';

const Navigation = () => {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Box position="sticky" top={0} zIndex="modal">
      <Flex
        minH={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        borderBottom={1}
        bg={COLOR_MENU.bg}
        borderStyle={'solid'}
        align={'center'}>
        <Flex
          flex={{base: 1, md: 'auto'}}
          ml={{base: -2}}
          display={{base: 'flex', md: 'none'}}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{base: 1}}
          justify={{base: 'center', md: 'start'}}
          alignitems="center">
          <NextLink href="/">
            <Image
              align={useBreakpointValue({base: 'center'})}
              src="/logo.png"
              alt="site logo"
              height={12}
            />
          </NextLink>

          <Flex display={{base: 'none', md: 'flex'}} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack flex={{base: 1, md: 0}} justify={'flex-end'} direction={'row'} />
        {/* <Stack
          flex={{base: 1, md: 0}}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            display={{base: 'none', md: 'inline-flex'}}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.600',
            }}>
            Publica tu anuncio
          </Button>
        </Stack>
       */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
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
