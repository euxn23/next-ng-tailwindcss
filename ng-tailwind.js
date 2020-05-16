module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'src/_tailwind.css',
  outputCSS: 'src/tailwind.css',
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: process.env.NODE_ENV === 'production',
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: ['.tsx'],
  extractors: [],
  content: [],
};
