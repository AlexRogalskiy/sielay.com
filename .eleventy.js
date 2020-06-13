// based on https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/

const pluginSass = require("eleventy-plugin-sass");
const blog = require("eleventy-plugin-blog");
const readingTime = require("eleventy-plugin-reading-time");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const excerpt = require("eleventy-plugin-excerpt");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const cacheBuster = require("@mightyplow/eleventy-plugin-cache-buster");
const util = require("util");
const embedInstagram = require("eleventy-plugin-embed-instagram");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["./*.scss", "!node_modules/**", "!_site"],
    sourcemaps: true,
    additionalSteps: [
      () => postcss([tailwindcss("./tailwind.config.js")])
    ],
  });

  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(excerpt);
  eleventyConfig.addPlugin(embedInstagram);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(blog, {
    input: "./_content",
    blogPostTemplate: "blogpost.njk",
    itemsPerPage: 20,
    blogPaths: ["./_content/blog/**/*.md"],
  });
  blog.generateBooleanCollection(eleventyConfig, "topNav", "topNav", {
    blog: ["./_content/*.md"],
  });
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(cacheBuster({}));
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("_content/**/*.jpg");
  eleventyConfig.addPassthroughCopy("_content/**/*.png");

  // filters
  eleventyConfig.addFilter("safejson", (data) => {
    try {
      return util.inspect(data, false, 1);
    } catch (error) {
      return `${data}`;
    }
  });
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "./_content",
    },
  };
};
