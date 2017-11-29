import to from 'await-to-js';

const fetchData = async (api) => {
  const [error, result] = await to(fetch(api));

  if( error ) {
    throw error;
  }

  return result.json();
}


export default fetchData;