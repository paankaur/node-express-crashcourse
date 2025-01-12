// argv property
console.log(process.argv);

//cwd()
console.log(process.cwd());
console.log('new line');

// title
console.log(process.title);

//memoryUsage
console.log(process.memoryUsage());

//uptime()
console.log(process.uptime());

//exit() zero means success?

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.exit(0);
console.log('helos');