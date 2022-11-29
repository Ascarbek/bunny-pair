const nodemon = require('nodemon');

nodemon({
  script: 'src/rebuild.js',
  ext: 'ts js html json svelte',
  ignore: 'dist/*',
});

nodemon
  .on('start', () => {
    console.log('Nodemon has started');
  })
  .on('quit', () => {
    console.log('Quitting');
    process.exit();
  })
  .on('exit', () => {})
  .on('restart', (files) => {
    console.log('Rebuilding due to: ', files);
  });
