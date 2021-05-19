console.log("Masiv_FOR")
let a = [1,2,5,4,6,8]
    console.log(a);

for (let index = 0; index < a.length; index++){
    console.log(a[index]);
}

console.log("Masiv_while")
let b = 0;
while ( b > a.length){
    console.log(a[b]);
    b++;
}

console.log("Masiv_do_while")
let v = '';
let c = 0;
do {
  c = c + 1;
  v = v + c;
} while (c < 5);
console.log(v);

console.log("Masiv_for of")
for (const element of a) {
    console.log(element);
}
