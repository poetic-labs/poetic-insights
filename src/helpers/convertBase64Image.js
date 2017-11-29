const convertBase64Image = (data) => {
  if (data) {
    let image = data.replace(/_/gi, '/');
    image = image.replace(/-/gi, '+');
    image = `data:image/jpeg;base64,${image}`;

    return image;
  }

  return null;
}

export default convertBase64Image;
