import {zones, agencies, models, top, advertisements} from 'data';

export default (req, res) => {
  res.status(200).json({zones, agencies, models, top, advertisements});
};
