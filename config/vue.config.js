module.exports = {
  outputDir: 'dist/pc',
  pages: {
    index: {
      entry: 'src/entry/pc/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args[0][0].ignore.push('index_sp.html')
        return args
      })
  }
}
