import {Image} from '@chakra-ui/react';

const Models = ({models, ...props}) => {
  return models.map((item, index) => (
    <Image
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