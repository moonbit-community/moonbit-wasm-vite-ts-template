import ViteRestart from 'vite-plugin-restart'

export default {
  plugins: [
    ViteRestart({
      restart: [
        'target/wasm-gc/release/build/mbt/mbt.wasm',
      ]
    })
  ],
}