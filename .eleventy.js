const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addPassthroughCopy('./.htaccess');
    eleventyConfig.addPlugin(pluginRss);

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};