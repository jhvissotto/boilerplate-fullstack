module.exports = {
    locales: ['en', 'br'],
    defaultLocale: 'en',
    pages: {
        '*': ['dictionary'],
    },
    loadLocaleFrom: (lang, ns) => import(`./languages/locales/${lang}/${ns}.json`).then((m) => m.default),
}
