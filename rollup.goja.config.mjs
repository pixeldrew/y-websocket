import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: './src/y-websocket.js',
  //external: id => /^(lib0|yjs|y-protocols)/.test(id),
  output: [{
    name: 'y-websocket',
    file: 'dist/y-websocket.js',
    format: 'es',
  }],
  plugins: [
    // resolve node_modules in k6 script
    resolve({
      jsnext: true
    }),
    babel({
      // transpile non-supported ES features: https://github.com/grafana/k6/issues/3265
      plugins: [
        '@babel/plugin-transform-optional-chaining',
        '@babel/plugin-transform-object-rest-spread',
        '@babel/plugin-transform-private-property-in-object',
        '@babel/plugin-transform-private-methods',
        '@babel/plugin-transform-class-properties',
      ],
      babelHelpers: 'bundled',
    }),
  ]
}
