import {useRouter} from 'next/router';
import {getIconByGender} from './GenderIcons';

const {Image} = require('@chakra-ui/react');

const ModelCard = ({
  id,
  src,
  alt,
  position = 'relative',
  heigthImage,
  gender,
  indepent,
  ...props
}) => {
  const {push} = useRouter();
  const genderData = getIconByGender(gender);

  return (
    <Image
      onClick={() => push(`/modelos/${id}`)}
      src={src}
      alt={alt}
      objectFit="contain"
      loading="lazy"
      height={heigthImage}
      {...props}
    />
  );
};

export default ModelCard;
