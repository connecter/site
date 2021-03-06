var dest = "./dist";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    },
    https: true,
    apiUrl: 'https://www.connecter.io/api'
  }, 
  sass: {
    src: src + "/styles/",
    entryFile: "main.scss",
    dest: dest + '/styles',
    settings: {
      // sourcemap: true, // TODO fix error while enabling source m
      bundleExec: true,
      require: "sass-css-importer"
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  pages: {
    src: src + "/pages/**",
    partials: src + "/partials/**",
    dest: dest
  },
  blog: {
    src: src + "/blog/**",
    partials: src + "/partials/**",
    dest: dest + "/blog"
  },

  scripts: {
    src: src + "/scripts/**",
    dest: dest + "/scripts"
  },
  production: {
    appSrc: src,
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};