# Troubleshooting

## Ubuntu

### Issue:

```
(node:1467) UnhandledPromiseRejectionWarning: Error: Failed to launch the browser process!
/home/m00nst3r/mk/node_modules/puppeteer/.local-chromium/linux-809590/chrome-linux/chrome: error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory


TROUBLESHOOTING: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md

    at onClose (/home/m00nst3r/mk/node_modules/puppeteer/lib/cjs/puppeteer/node/BrowserRunner.js:193:20)
    at Interface.helper_js_1.helper.addEventListener (/home/m00nst3r/mk/node_modules/puppeteer/lib/cjs/puppeteer/node/BrowserRunner.js:183:68)
    at Interface.emit (events.js:203:15)
    at Interface.EventEmitter.emit (domain.js:448:20)
    at Interface.close (readline.js:397:8)
    at Socket.onend (readline.js:173:10)
    at Socket.emit (events.js:203:15)
    at Socket.EventEmitter.emit (domain.js:448:20)
    at endReadableNT (_stream_readable.js:1145:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
(node:1467) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:1467) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

### Solution:

```
sudo apt-get install ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
```