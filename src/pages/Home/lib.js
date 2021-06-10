export const filterByGenderZoneAndAgency = ({
  zone,
  agency,
  gender,
  models = [],
}) => {
  if (!zone && !agency) {
    return models.filter(item => item.gender == gender);
  } else if (zone && agency) {
    return models.filter(
      item =>
        item.agencyId == agency && item.zoneId == zone && item.gender == gender,
    );
  } else if (!zone && agency) {
    return models.filter(
      item => item.gender == gender && item.agencyId == agency,
    );
  } else {
    return models.filter(item => item.gender == gender && item.zoneId == zone);
  }
};

export const formatModels = ({data, steps, advertisements = {}}) => {
  const _data = [];
  let aux = 1;

  for (let index = 0; index < data.length + steps; index += steps) {
    const advertisement = advertisements[aux] || [];
    const windowSteps = steps * aux;
    const modelsFormat = data.slice(index, windowSteps);

    if (modelsFormat.length) {
      _data.push({models: modelsFormat, advertisement});
    }
    aux++;
  }
  return _data;
};

export const isSameRouteParams = ({query, state}) =>
  state.gender === query.genero &&
  state.zone === query.zona &&
  state.agency === query.agencia;
