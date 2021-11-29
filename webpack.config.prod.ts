import webpackConfig from './webpack.config';
import {Configuration} from 'webpack';

export const prodWebpackConfig: Configuration = {
  ...webpackConfig,
  output: {
    publicPath: 'https://module-federation-app1.web.app/', // production server,
    uniqueName: 'home'
  },
};

export default prodWebpackConfig;
