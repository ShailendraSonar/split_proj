module.exports = function override(config, env) {
    const cssRule = config.module.rules.find(
      (rule) => rule.oneOf !== undefined
    );
  
    if (cssRule) {
      const postCssLoaderRule = cssRule.oneOf.find((rule) =>
        String(rule.test).includes('.css')
      );
  
      if (postCssLoaderRule) {
        postCssLoaderRule.use = postCssLoaderRule.use.map((useRule) => {
          if (useRule.loader && useRule.loader.includes('postcss-loader')) {
            // Exclude Ionic CSS files from PostCSS processing
            useRule.options.sourceMap = true;
            useRule.options.postcssOptions = {
              ident: 'postcss',
              plugins: () => [
                require('autoprefixer')(),
                require('postcss-flexbugs-fixes'),
              ],
            };
          }
          return useRule;
        });
      }
    }
  
    return config;
  };
  