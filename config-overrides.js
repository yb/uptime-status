const removePlugin = (plugins, name) => {
  const index = plugins.findIndex((plugin) => {
    return plugin.constructor && plugin.constructor.name && plugin.constructor.name === name;
  });
  if (index === -1) return plugins;
  return plugins.slice(0, index).concat(plugins.slice(index + 1));
}

const svgLoader = (rule) => {
  if (rule.oneOf instanceof Array) {
    return {
      ...rule,
      oneOf: [
        {
          test: [/\.svg$/],
          loader: require.resolve('url-loader'),
        },
        ...rule.oneOf
      ]
    }
  }
  return rule;
}

module.exports = (config) => {

  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  };
  
  config.plugins = removePlugin(config.plugins, 'ManifestPlugin');
  config.plugins = removePlugin(config.plugins, 'GenerateSW');
  config.module.rules = config.module.rules.map(svgLoader);

  return config;
}