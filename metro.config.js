const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    sourceExts: [...(getDefaultConfig(__dirname).resolver.sourceExts || []), 'svg'],
    assetExts: (getDefaultConfig(__dirname).resolver.assetExts || []).filter(ext => ext !== 'svg'),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);