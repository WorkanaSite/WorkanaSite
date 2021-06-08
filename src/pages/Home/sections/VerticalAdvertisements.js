import {Image} from '@chakra-ui/react';

const VerticaAdvertisements = ({data}) => {
  return data.map((item, index) => (
    <Image key={index} src={item.imageURL} width="100%" />
  ));
};
export default VerticaAdvertisements;
