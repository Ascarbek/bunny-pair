require('child_process').spawn('yarn', ['run', 'run'], {
  stdio: ['ignore', 'inherit', 'inherit'],
  shell: true,
});
