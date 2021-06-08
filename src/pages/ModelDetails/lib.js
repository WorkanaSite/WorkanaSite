function insertAt(array, index, ...elementsArray) {
  array.splice(index, 0, ...elementsArray);
}
export const formatPhotos = photos => {
  const aux = [];

  for (let counter = 0; counter < photos.length; counter++) {
    const currenPhoto = photos[counter];
    const nextIndex = counter + 1;
    const prevIndex = counter - 1;

    if (counter === 0) {
      if (currenPhoto?.isVertical && photos[nextIndex]?.isVertical) {
        aux.push(currenPhoto);
      } else {
        aux.push(photos[nextIndex]);
      }
    } else if (photos.length > nextIndex) {
      const rightPhoto = photos[nextIndex];
      const leftPhoto = photos[prevIndex];
      if (
        !leftPhoto?.isVertical &&
        currenPhoto?.isVertical &&
        !rightPhoto?.isVertical
      ) {
        aux.push(rightPhoto);
        aux.push(currenPhoto);
        counter++;
      } else if (
        !leftPhoto?.isVertical &&
        currenPhoto?.isVertical &&
        rightPhoto?.isVertical
      ) {
        aux.push(currenPhoto);
        aux.push(rightPhoto);
        counter++;
      } else {
        insertAt(aux, counter - 1, currenPhoto);
      }
    } else {
      aux.push(currenPhoto);
    }
  }
  return aux.filter(Boolean);
};
