module.exports = {
  outputDir: 'dist/sp',
  pages: {
    index: {
      entry: 'src/entry/sp/main.ts',
      template: 'public/index_sp.html',
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
