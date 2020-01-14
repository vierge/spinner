const spinner = ['|', '/', '-', '\\'];
const interval = 100;
const spinTime = 5000;
let frame = 0;

for(let t = 0; t < spinTime; t+= interval) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[frame % 4]}`);
    frame++;
  }, t); 
}

setTimeout(() => {
  console.log('');
}, spinTime);