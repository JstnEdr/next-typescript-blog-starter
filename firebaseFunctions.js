// https://github.com/vercel/next.js/tree/canary/examples/with-firebase-hosting

const { join } = require('path');
const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = process.env.NODE_ENV !== 'production';

// TODO how to use the distDir from next.config
// const nextjsDistDir = join('src', require('./next.config.js').distDir);
// const nextjsDistDir = join('src', '.next');

const nextjsServer = next({
  dev: isDev,
  conf: {
    // distDir: nextjsDistDir,
    distDir: './.next',
  },
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});
