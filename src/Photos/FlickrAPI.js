export function searchPhotos(keyword, page) {
    const apiKey = 'afdcacfe332c0b7b0993f9f163a8d445'
    const secret ='57521630eb82052a'
    const per_page = 5
    const photosSearchURL = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apiKey+
                "&tags="+keyword+"&per_page="+per_page+"&page="+page+"&format=json&nojsoncallback=1";
    console.log('searching for',keyword+' '+page);
    return fetch(photosSearchURL)
    .then(response => response.json())
    .then(jsonData => {
    const results = jsonData['photos'] 
    const photos = results['photo'] 
    return photos
      })
      .catch(err => console.error(err))
}
