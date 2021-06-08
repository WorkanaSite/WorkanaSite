import {models} from 'data';
export default (req, res) => {
  const {
    query: {id},
  } = req;
  const model = models.find(item => item.id == id);
  if (!model) {
    res.statusCode = 404;
    res.end('Not found');
  } else {
    res.status(200).json({model});
  }
};
