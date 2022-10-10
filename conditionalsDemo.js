var sayı1 = 291
var sayı2 = 30
var sayı3 = 211

// En büyük sayısı bulunuz

var enBuyuk = sayı1 // 29

if(enBuyuk<sayı2){
    enBuyuk = sayı2 // En büyük sayı liderliği sayı1 den aldı
}

if(enBuyuk<sayı3){
    enBuyuk = sayı3
}
 
console.log("Bu sayıların içinde en büyük : " + enBuyuk)