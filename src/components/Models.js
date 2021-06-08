import {Image} from '@chakra-ui/react';
import {useRouter} from 'next/router';
const Models = ({models, ...props}) => {
  const {push} = useRouter();
  return models.map((item, index) => (
    <Image
      onClick={() => push(`/modelos/${item.id}`)}
      key={index}
      src={item.principalPhotoURL}
      alt={item.name}
      objectFit="contain"
      loading="lazy"
      height="100%"
      mx="4px"
      _first={{
        ml: 0,
      }}
      _last={{
        mr: 0,
      }}
      {...props}
    />
  ));
};

export default Models;
