import {top} from 'data';

const getTopModels = (req, res) => {
  res.status(200).json({top});
};
export default getTopModels;
