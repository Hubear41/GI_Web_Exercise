// importAll by Patrick Santos
// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
const importAll = require => {
    return require.keys().reduce((acc, next) => {
        acc[next.replace("./", "").replace(".png", "")] = require(next);
        return acc;
    }, {});
}

const imageIndex = importAll(
    require.context("../assets/images", true, /\.png$/)
);

export default imageIndex;