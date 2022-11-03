const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

    eleventyConfig.setLiquidOptions({
        strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
      });

    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addPassthroughCopy('./.htaccess');
    eleventyConfig.addPassthroughCopy({"./src/favicons/" : "./"});
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPlugin(pluginRss);

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};