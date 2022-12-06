var masuk = 10;
var keluar = 5;
 
function lama(){
    if(keluar > masuk ){
   return(lama = ( keluar - masuk + ' jam'))
   }else {
    return(lama = (12 - masuk)+keluar +' jam')   
   }
}
console.log(lama())

var lama = 7;

function biaya(){
    if(lama > 2){
     return('Rp.'+ (2000 +( lama -2)*500))
}else{
    return('Rp.'+ 2000)
}
}
console.log(biaya())    