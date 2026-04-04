import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const out = join(root, '_site')
const atlasOut = join(out, 'atlas')

if (!existsSync(dist)) {
  console.error('Run a Vite build first (e.g. npm run build:pages-atlas). Missing dist/.')
  process.exit(1)
}

rmSync(out, { recursive: true, force: true })
mkdirSync(atlasOut, { recursive: true })
cpSync(dist, atlasOut, { recursive: true })
cpSync(join(root, 'portfolio', 'index.html'), join(out, 'index.html'))
cpSync(join(root, 'portfolio', 'styles.css'), join(out, 'styles.css'))

console.log('Site folder ready: _site/')
console.log('Preview: npx serve _site  then open / and the embedded map.')
