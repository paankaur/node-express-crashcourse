import crypto from 'crypto';

// createHash()
/* const hash = crypto.createHash('sha256');
hash.update('qwerty');
console.log(hash.digest('hex'));

//randomBytes()
crypto.randomBytes(16, (err,buf) => {
    if (err) throw err;
    console.log(buf.toString('hex'));
}); */

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update('Hi, its secret msg','utf8','hex');
encrypted += cipher.final('hex');
console.log('uus rida');
console.log(encrypted);

const decipher = crypto.createCipheriv(algorithm,key,iv);
let decrypted = decipher.update(encrypted, 'hex','utf8');
decrypted += decipher.final('utf8');
console.log('uus rida');
console.log(decrypted);