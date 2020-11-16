module.exports = {
  pwa: {
    name: '2-mores',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    start_url: '/?source=pwa',
    fullscreen: 'fullscreen',
    icons: [
      {
        src: '/img/icons/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/img/icons/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
  },
};
