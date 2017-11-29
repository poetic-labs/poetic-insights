const getScore = (jsonData, type) => {
  if ('error' in jsonData) {
    return null;
  }

  const  { ruleGroups: { SPEED, USABILITY }} = jsonData;
  
  if (type === 'desktop') {
    return {
      desktopScore: SPEED.score,
    }  
  }
  
  return {
    mobileScore: SPEED.score,
    mobileUsability: USABILITY.score,
  }
}

export default getScore;
