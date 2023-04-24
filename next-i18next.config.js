const path = require("path");

const PROJECT_CONFIG_DEFAULT_LOCALE = "en";
const PROJECT_CONFIG_LOCALES = ["en"];

// reminder: using `fallback: 'blocking'` resolved issue of untranslated slugs on 404 pages
// reminder: the previous/legacy WordPress+WPML based site used 'zh-hans' as Chinese locale vs. 'zh-CN'

module.exports = {
  i18n: {
    defaultLocale: PROJECT_CONFIG_DEFAULT_LOCALE,
    locales: [...PROJECT_CONFIG_LOCALES],

    // refer to pages/_middleware.ts for redirection of /zh-hans/ to /zh-CN/
    // note that fallbackLng didn't work as expected per docs: <https://www.i18next.com/principles/fallback#language-fallback>
    // fallbackLng: {
    //   'zh-hans': ['zh-CN'],
    // },

    // also note that next.config.js redirects also did not work for zh-hans -> zh-CN because they are very unexpectedly
    // lower priority vs. the dynamic page routes so the dynamic [section]/ would always get called first w/ 'en' locale

    // vercel + netlify require the use of `path` to resolve in their deploy environments
    localePath: path.resolve("./public/locales"),
  },
};
