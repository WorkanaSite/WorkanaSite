import {useRouter} from 'next/router';

const useNavigationByGender = () => {
  const {push} = useRouter();
  const navigateToHomeByGender = gender =>
    push(`/?genero=${gender}`, `/?genero=${gender}`);
  return {navigateToHomeByGender};
};
export default useNavigationByGender;
