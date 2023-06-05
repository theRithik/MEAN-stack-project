const webpack = require('webpack');
const url = require('node:url')
module.exports = function override(config) {
   const fallback = config.resolve.fallback || {};
   Object.assign(fallback, {
       "crypto": require.resolve("crypto-browserify"),
       "stream": require.resolve("stream-browserify"),
       "path": require.resolve("path-browserify"),
       "http": require.resolve("stream-http"),
       "zlib": require.resolve("browserify-zlib")
       
   })
  
   config.resolve.fallback = fallback;
                   return config;
                  }