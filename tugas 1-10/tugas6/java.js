let startjam = 10;
let startmenit = 30;
let stopjam =12;
let stopmenit =10;

let menit1 = startjam * 60 + startmenit;
let menit2 = stopjam * 60 + stopmenit;

if(menit2 >= menit1){
   selang = menit2 - menit1;
}else{
    selang = ((12*60)-menit1)+menit2;
}

let JamDurasi = selang / 60
let   MenitDurasi =  selang % 60;

console.log(Math.floor (JamDurasi)+" jam")
console.log(MenitDurasi+" menit")