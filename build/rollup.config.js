import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/index.js',
  output: {
    name: 'VueDropdownBreadcrumb',
    exports: 'named',
    globals: {
      'vue': 'Vue',
    }
  },
  plugins: [
    vue({
      css: false,
      compileTemplate: true,
    }),
    css({ output: 'dist/vue-dropdown-breadcrumb.css' }),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ],
  external: ['vue']
};

if (argv.format === 'iife') {
  config.plugins.push(terser());
  config.external.splice(1)
}

export default config;
