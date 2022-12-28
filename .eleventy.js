const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/imgs");
  eleventyConfig.addPassthroughCopy("./src/themes.js");

  eleventyConfig.addFilter('dateIso', date => {
  return moment(date).toISOString();
  });
  
  eleventyConfig.addFilter('dateReadable', date => {
  return moment(date).format('DD MMMM YYYY');
  });

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  };
};