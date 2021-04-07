module.exports = function (eleventyConfig) {
    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./.htaccess');

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};