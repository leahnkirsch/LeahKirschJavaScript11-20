/* Leah Kirsch
 * Javasctipt problems 11-20
 * October 20, 2017
 */

// 1. firstLast6
function firstLast6 (arr){
    if (arr[0] == 6 || arr[arr.length - 1] == 6){
        return true;
    } else {
        return false;
    }

}

// 2. has_23
function has_23 (arr){
    var firstNum = arr[0];
    var lastNum = arr[1];
    if (firstNum == 2 || firstNum == 3 || lastNum == 2 || lastNum == 3){
        return true;
    } else {
        return false;
    }
}

// 3. fix_23
function fix_23 (arr){
    var firstNum = arr[0];
    var secondNum = arr[1];
    var thirdNum = arr[2];
    if (firstNum == 2 && secondNum == 3){
        return [firstNum, 0, thirdNum];
    }
    if (secondNum == 2 && thirdNum == 3){
        return [firstNum, secondNum, 0];
    }
    return [arr];
}

// 4. countYZ
function countYZ (string){
    var length = string.length;
    var count = 0;
    for (var i = 0; i <= length; i ++){
        if ((string[i] == " ")) {
            if (string[i - 1] == "y" || string[i - 1] == "z" || string[i - 1] == "Y" || string[i - 1] == "Z") {
                count += 1;
            }
        }
    }
    if (string.endsWith("y") || string.endsWith("z") || string.endsWith("Y") || string.endsWith("Z")){
        count+=1
    }
   return count;
}

// 5. endOther
function endOther (x, y){
    var stringOne = x.toLowerCase();
    var stringTwo = y.toLowerCase();
    if (stringOne.endsWith (stringTwo) || stringTwo.endsWith (stringOne)){
        return true;
    } else {
        return false;
    }
}

// 6. starOut
function starOut (string){
    var length = string.length;
    var result = "";
    for (var i = 0; i <= length - 1; i++){
        if (string [i-1] != "*" && string [i+1] != "*" && string [i] != "*"){
            result = result + string[i];
        }
    }
    return result;

}

// 7. getSandwich
function getSandwich (string){
    if (!string.includes("bread")){
        return "";
    } else {
        return (string.slice(string.indexOf("bread")+5, string.lastIndexOf("bread")));
    }
}

// 8. canBalance
function canBalance(array){
    console.log (array);
    var totalSum = 0;
    for (i = 0; i < array.length; i++){
        totalSum += array [i];
    }
    var halfSum = totalSum/2;
    var emptyBit = 0;
    for (var i = 0; i < array.length; i++) {
        emptyBit += array [i];
        if (emptyBit== halfSum) {
            return true;
        }
    }
    if (emptyBit != halfSum){
        return false;
    }
}


// 9. countClumps
function countClumps (array){
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] == array[i+1] && array [i] !== array[i-1]){
            count += 1;
        }
    }
    return count;
}


// 10. evenlySpaced
function evenlySpaced (numOne, numTwo, numThree){
    if (numThree - numTwo == numTwo - numOne || numThree-numOne == numTwo-numThree || numOne-numThree == numThree-numTwo || numThree-numOne == numOne-numTwo){
        return true
    } else {
        return false;
    }
}



function tester() {

    document.getElementById("output1").innerHTML = firstLast6([6, 5, 7, 2]);
    document.getElementById("output2").innerHTML = has_23([6, 5, 7, 2]);
    document.getElementById("output3").innerHTML = fix_23([1, 2, 3]);
    document.getElementById("output4").innerHTML = countYZ("hey hey");
    document.getElementById("output5").innerHTML = endOther("hey", "hi");
    document.getElementById("output6").innerHTML = starOut("hee*lllo");
    document.getElementById("output7").innerHTML = getSandwich("breadhibread");
    document.getElementById("output8").innerHTML = canBalance([1, 2, 3, 6]);
    document.getElementById("output9").innerHTML = countClumps([2, 2, 2, 3, 3, 4]);
    document.getElementById("output10").innerHTML = evenlySpaced(3, 15, 9);
}

