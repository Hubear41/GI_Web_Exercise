// importAll by Patrick Santos
// assigns a key of the image path to the webpacked url path
const importAll = require => {
    return require.keys().reduce((acc, next) => {
        acc[next.replace("./", "").replace(".png", "").replace(".jpg", "")] = require(next); // removes the first occurence of "./" and ".png"
        return acc;
    }, {});
}

// imports all images
const imageIndex = importAll(
    require.context("../assets/images", true, /\.(png|jpg)$/)
);

export default imageIndex;