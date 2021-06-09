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
  // refactor para devolver los modelos de ese genero
};
