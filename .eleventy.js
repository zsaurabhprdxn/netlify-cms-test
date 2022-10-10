module.exports = function(config) {
    config.addPassthroughCopy("images");
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("admin");
}