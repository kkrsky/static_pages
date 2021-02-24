// const Dotenv = require("dotenv-webpack"); //APIなどの環境変数をローカルに保存、process.env.OOOで取得可能

module.exports = {
  publicPath: "./",
  outputDir: "docs",
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/scss/_index.scss";',
      },
    },
  },
  // configureWebpack: {
  //   plugins: [new Dotenv()],
  // },
};
