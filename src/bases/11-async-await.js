
// const getImagen = async() => {
//     return "https://juhgtffs5fesw.com";
// }
// getImagen().then(console.log);


const getImagen = async () => {

    try {
        const apiKey = "qT1Ba4eBQE6CZ046Po4FMe3ME3HnfWgk";

        const resp = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    } catch {
       
    }

}

getImagen();
