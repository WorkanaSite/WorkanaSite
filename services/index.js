export const getDataFromServer = async ({path, res}) => {
  try {
    const result = await fetch(`${process.env.URL_END_POINT}/api/${path}`);
    const data = await result.json();
    return {...data};
  } catch (error) {
    res.writeHead(302, {
      Location: '/404',
    });
    res.end();
  }
};
