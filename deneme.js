
let a = prompt("sayi giriniz");

if(a>=18){
    console.log("disari cikabilir");
}
else{
    console.log("disari cikamaz");
}

let a = prompt("sayi giriniz");
if(a>12 && a<18){
    alert("disari cik ama uzaklasma");
}
else if(a>=18 && a<65){
    alert("kalbinin goturdugu yere git");

}
else if(a>=65){
    alert(" yine evde otur")
}
else{
alert("evde otur");
}

 let a =15;
let b =14;

if (a>12 && a<18 && b>15)
{
    if(b===15)
    {
        console.log("abinle git");
    }
    if(b>16)
    {
        console.log("kendin cikabilirsin")
    }
}
else
{
    console.log("Disari cikamazsin");
}

let a =15;

ismantarZehiro=true;
if(ismantarZehiro){
    if(a<6 || a>65){
        console.log("yogun bakim")
    }
    else{
        console.log("ayakta tedavi")

    }
    
}

else{
    console.log("Afiyet olsun");
}

const inputValue=prompt("yasinizi giriniz");
console.log(inputValue);

if(inputValue<18){
    console.log(`${inputValue} yasindasiniz ve kucuksunuz.`)
}
else{
    console.log(`${inputValue} yasindasiniz.`);
}

console.log("10"-1)
let rain = 98; // true  // herhangi bir değer var ise
rain = false;
rain = 0;
rain = null;
rain = undefined;
rain = NaN;
rain = "";


console.log(rain);
if (rain) {
  console.log("şemsiyeni al");
} else {
  console.log("rain yok");
}


let x = 0;
let randum = Math.random();
console.log(randum);
let randumM = Math.floor((randum)*10);
console.log(randumM);
if (randumM> 5) {
    x++;
}
else {
    x--;
}

console.log(x);

let weekDay=prompt("Gunu Giriniz.");
let lower=(weekDay).toLowerCase();

switch(lower){
    case "monday":
    console.log(lower);
    break;

    case "tuesday":
    console.log(lower);
    break;

    case "wednesday":
    console.log(lower);
    break;

    case "thursday":
    console.log(lower);
    break;

    case "friday":
    console.log(lower);
    break;

    default:
        console.log("haftasonu")
}

let m=2;
let n=4;

switch (m>n) {
    case true:
        console.log(`${m} ${n}'den buyuktur`)
        break;

    default:
        console.log(`${m} ${n}'den kucuktur`)
        
        break;
}
let m=3;
let n=4;
switch (true) {
    case (m>n):
        console.log(`${m} ${n}'den buyuktur`)
    
        break;

    default:

        console.log(`${m} ${n}'den kucuktur`)

        break;
}

let hava="gunesli";

switch (hava) {
    case "yagmurlu":
        console.log(hava);
        break;

     case "karli":
        console.log(hava);
     break;

     case "gunesli":
        console.log(hava);
        break;

    default:
        console.log("yanlis");
        break;
}

isNight=false;

if(isNight){
    console.log("dislerini fircala");
}

else{
    console.log("Calismaya devam");

}

isNight ? console.log("dislerini fircala") : console.log("Calismaya devam");


let time=9;
let mesaj="";

time>=17 ? mesaj="mesai bitti" : time>=12 && time<=13  ? mesaj="ogle arasi": time<8 ? mesaj="mesai baslamadi" : mesaj="calismaya devam";
console.log(mesaj);

let mesaj2 = time < 8 ? "mesai baslamadi" : "mesai basladi";
console.log(mesaj2)

