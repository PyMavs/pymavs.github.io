// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/mnt/c/Users/Ivan/dev/pymavs.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/c/Users/Ivan/dev/pymavs.github.io/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/mnt/c/Users/Ivan/dev/pymavs.github.io/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/json/404.json"),
  "index.json": require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/json/index.json"),
  "page-2.json": require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/json/page-2.json"),
  "404-html.json": require("/mnt/c/Users/Ivan/dev/pymavs.github.io/.cache/json/404-html.json")
}