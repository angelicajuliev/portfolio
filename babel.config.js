module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets/',
        },
      },
    ],
  ],
}