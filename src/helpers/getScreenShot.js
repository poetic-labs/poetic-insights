const getScreenShot = (jsonData, type) => {
  if ('error' in jsonData) {
    return null;
  }
  
  const  { screenshot: { data }} = jsonData;

  if (type === 'desktop') {
    return { desktopScreenShot: data };
  }

  return { mobileScreenShot: data };
}

export default getScreenShot;
