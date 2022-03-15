export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=z7DkchXR2uJkMlc6CJnn6cEBb1MmnPpI&q=${ category }`;
    const response = await fetch(url);
    const { data } = await response.json();
    console.log(data[0]);

    const gifs = data.map((element) => {
      return {
        id: element.id,
        title: element.title,
        url: element.images.downsized_medium.url,
      };
    });

    // console.log(gifs);
    return gifs;
  };