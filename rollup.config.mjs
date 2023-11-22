import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import banner2 from 'rollup-plugin-banner2'
import dts from 'rollup-plugin-dts'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'

const plugins = [
  commonjs(),
  injectProcessEnv({
    NODE_ENV: 'production',
  }),
  PeerDepsExternalPlugin(),
  resolve(),
  terser(),
  banner2(
    () => `'use client'
  `
  ),
]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      ...plugins,
      typescript({ tsconfig: './rollup.tsconfig.cjs.json' }),
    ],
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning)
      }
    },
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
  },
]
