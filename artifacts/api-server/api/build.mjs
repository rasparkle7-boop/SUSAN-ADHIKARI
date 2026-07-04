import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/app.ts'],
  bundle: true,
  platform: 'node',
  // Output to api/index.mjs so Vercel detects it automatically
  outfile: 'api/index.mjs', 
  format: 'esm',
}).catch(() => process.exit(1));