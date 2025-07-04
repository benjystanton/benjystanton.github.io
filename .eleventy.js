const pluginRss = require("@11ty/eleventy-plugin-rss");

const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
   
    eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("d LLLL yyyy");
  });

    eleventyConfig.setLiquidOptions({
        strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
      });

    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addPassthroughCopy('./.htaccess');
    eleventyConfig.addPassthroughCopy('./_redirects');
    eleventyConfig.addPassthroughCopy({"./src/favicons/" : "./"});
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/subscriptions.xml');
    eleventyConfig.addPassthroughCopy('./src/.well-known/atproto-did');
    eleventyConfig.addPlugin(pluginRss);

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};