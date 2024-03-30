module.exports = function override(config){
    const fallback = config.resolve.fallback || {};
    Object.assign{fallback, {
        "stream": require.resolve("stream-browserify"),
        "fs": false, // You might not need fs, path, and crypto in the browser
        "path": false,
        "crypto": false,
        "url": require.resolve("url/"),
        "net": false,
        "dns": false,
        "os": require.resolve("os-browserify/browser"),
        "util": require.resolve("util/"),
    }};
    config.resolve.fallback = fallback;
    return  config;
}