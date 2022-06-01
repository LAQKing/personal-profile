module.exports = {
  'presets': [
    ['@vue/cli-plugin-babel/preset'],
    ['@babel/preset-env', { 'modules': false }]
  ],
  'plugins': [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
};
