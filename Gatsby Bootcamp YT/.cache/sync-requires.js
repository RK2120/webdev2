const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rahul/webdev/webdev2/Gatsby Bootcamp YT/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/rahul/webdev/webdev2/Gatsby Bootcamp YT/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/rahul/webdev/webdev2/Gatsby Bootcamp YT/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/rahul/webdev/webdev2/Gatsby Bootcamp YT/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rahul/webdev/webdev2/Gatsby Bootcamp YT/src/pages/index.js")))
}

