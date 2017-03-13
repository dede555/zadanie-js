function dd(a,b,c,d){

  // funkcja dokonująca permutacji zmiennnych
function permute(input) {
    var permArr = [],
        usedChars = [];
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    })();
}

function makeNumber(a){
        return a[0]*1000+a[1]*100+a[2]+a[3];
}
 // porównuję dwie zmienne i zwracam większą z nich
function getBigger(a,b) {
        if (makeNumber(a) >makeNumber(b)){
        return a;
    }
    else{ 
        return b; 
    }
}   
// sprawdzam czy zmienna spełnia warunki do stworzenia godziny
function isHour(input){
        var returnMe = true;
    if (input[0] > 2) {
        returnMe = false;
    }
    else if ( input[0] == 2) {
                    if( input[1] > 3) {
                returnMe = false;
            }
    }
    if (input[2] > 5) {
        returnMe = false;
    }
    return returnMe;
}
// lista wszystkich możliwych permutacji zmiennych a,b,c,d
var list = permute([a,b,c,d]); 
var maxHour  = [0,0,0,0];
var hourFound = false;

list.forEach(function(entry){
  // sprawdzam czy element listy jest godziną
    if(isHour(entry)){
        hourFound = true;
   // wyznaczam większą godzinę 
        maxHour=getBigger(maxHour,entry);
    }
}
);
  
if(!hourFound){
  //jeśli godzina nie została znaleziona zwracam false
  return "false";
}
else {
  //jeśli godzina została znaleziona tworzę string w postaci HH:MM
  return maxHour.slice(0,2).join('')
                + ":"
                + maxHour.slice(2,4).join('');
  }
}

//przypadki testowe
document.write(dd(1,2,6,8) + "<br>");
document.write(dd(2,2,6,8) + "<br>");
document.write(dd(7,6,1,8) + "<br>");
document.write(dd(1,2,4,9) + "<br>");
document.write(dd(0,0,0,0) + "<br>");
document.write(dd(2,4,4,2) + "<br>");
document.write(dd(9,9,9,9) + "<br>");
