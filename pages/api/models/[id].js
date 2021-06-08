import {models, zones, agencies} from 'data';
export default (req, res) => {
  const {
    query: {id},
  } = req;
  const model = models.find(item => item.id == id);
  if (!model) {
    res.statusCode = 404;
    res.end('Not found');
  } else {
    const zone = zones.find(item => item.id == model.zoneId) || {};
    const agency = agencies.find(item => item.id == model.agencyId) || {};
    res.status(200).json({...model, zone, agency});
  }
};
