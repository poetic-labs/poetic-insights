import to from 'await-to-js';
import getScore from './getScore';
import getScreenShot from './getScreenShot';

const pageSpeedInsightsAPI = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed';

const fetchPageSpeedInsights = async (site, type) => {
  const api = `${pageSpeedInsightsAPI}?url=${site}&strategy=${type}&screenshot=true`;
  
  const [error, result] = await to(fetch(api));

  if (error) {
    console.log('error: ', error);

    return null;
  }

  if (result.status !== 200) {
    console.log('error: ', result.error.message);

    return null;
  }

  const jsonResult = await result.json();  

  const score = getScore(jsonResult, type);

  const screenshot = getScreenShot(jsonResult, type);

  return Object.assign(score, screenshot);
}

export default fetchPageSpeedInsights;