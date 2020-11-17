async function getData(API) {
  try {
    const response = await fetch(API);
    return response;
  } catch (error) {
    return error;
  }
}

export default getData;
