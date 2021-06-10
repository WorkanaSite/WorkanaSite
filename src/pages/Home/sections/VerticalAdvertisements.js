import {Image} from '@chakra-ui/react';
import {useRouter} from 'next/router';

const VerticaAdvertisements = ({data}) => {
  const {push} = useRouter();
  return data.map((item, index) =>
    item?.disabled ? (
      <div key={index} />
    ) : (
      <Image
        key={index}
        src={item.imageURL}
        width="100%"
        onClick={() => {
          if (!item.isURLToSite && item.url) {
            window.open(item.url, '_blank');
          }
          if (item.isURLToSite && item.url) {
            console.log(item.url);
            push(item.url, item.url, {shallow: false});
          }
        }}
        mb="4"
        loading="lazy"
      />
    ),
  );
};
export default VerticaAdvertisements;
