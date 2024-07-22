console.log('Loading custom visualization...');

looker.plugins.visualizations.add({
  id: "hello_world",
  label: "Hello World",
  options: {
    font_size: {
      type: "string",
      label: "Font Size",
      values: [
        { "Large": "large" },
        { "Medium": "medium" },
        { "Small": "small" }
      ],
      display: "select",
      default: "medium"
    }
  },
  create: function (element, config) {
    console.log('Creating visualization...');
    element.innerHTML = "<h1>Hello World</h1>";
  },
  update: function (data, element, config, queryResponse) {
    console.log('Updating visualization...');
    if (config.font_size) {
      element.querySelector("h1").style.fontSize = config.font_size;
    }
  }
});

console.log('Custom visualization loaded successfully.');