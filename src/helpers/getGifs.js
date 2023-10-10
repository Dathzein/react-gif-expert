export const getGifs = async (category) =>{
    const apiKey = 'YHIR7R91XyqOwTTj2QmWvgoPIkgA6e7p'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=20`;  
    const resp = await fetch( url );
    // console.log(resp)
    const { data } = await resp.json();
    // console.log(data)
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    // console.log(gifs)
    return gifs;
}