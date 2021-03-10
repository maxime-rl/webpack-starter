const presets = [
  [
    "@babel/preset-env",
    {
      useBuiltIns: "usage",
      debug: true,
      corejs: 3,
      targets: "> 0.25%, not dead"
    }
  ]
];

module.exports = { presets };