import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'index.js',
    dest:'dist/bundle.js',
    format:'umd',
    output:{
        name:'volca-beats'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
    ],
}