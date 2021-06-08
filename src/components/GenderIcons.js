import {AiOutlineWoman, AiOutlineMan} from 'react-icons/ai';
import {FaTransgender, FaGenderless} from 'react-icons/fa';

const defaultGender = {
  Icon: FaGenderless,
  color: 'gray.600',
  label: 'No definido',
  value: 'No definido',
};
export const gendersOptions = {
  Hombre: {
    Icon: AiOutlineMan,
    color: 'blue.300',
    label: 'Hombres',
    value: 'Hombre',
  },
  Mujer: {
    Icon: AiOutlineWoman,
    color: 'red.300',
    label: 'Mujeres',
    value: 'Mujer',
  },
  Trans: {
    Icon: FaTransgender,
    color: 'purple.300',
    label: 'Trans',
    value: 'Trans',
  },
};

export const getIconByGender = gender =>
  gender in gendersOptions ? gendersOptions[gender] : defaultGender;
