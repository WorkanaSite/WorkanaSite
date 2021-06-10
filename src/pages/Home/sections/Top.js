import {Box, Image} from '@chakra-ui/react';
import {useRouter} from 'next/router';

const Top = ({models = []}) => {
  const {push} = useRouter();

  return (
    <Box
      bg="l_bg"
      zIndex="modal"
      as="div"
      // position="sticky"
      // top={0}
      justifyContent="center"
      height={{base: '65px', sm: 120, md: 120, lg: 200, xl: 240}}
      style={{
        display: 'flex',
        overflow: 'scroll',
      }}>
      {models.slice(0, 8).map((item, index) => (
        <Image
          id={item.id}
          onClick={() => push(`/modelos/${item.id}`)}
          key={index}
          src={item.principalPhotoURL}
          alt={item.name}
          objectFit="contain"
          loading="lazy"
          gender={item.gender}
          mx="1px"
          height="100%"
          _first={{
            ml: 0,
          }}
          _last={{
            mr: 0,
          }}
        />
      ))}
    </Box>
  );
};

export default Top;
