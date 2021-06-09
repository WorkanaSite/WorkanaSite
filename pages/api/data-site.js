import {zones, agencies, models, top, advertisements} from 'data';

const getDataSite = (req, res) => {
  res.status(200).json({zones, agencies, models, top, advertisements});
};

export default getDataSite;
