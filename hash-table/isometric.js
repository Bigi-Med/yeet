var isIsomorphic = function(s, t) {
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}
let sHash = new Map();
let tHash = new Map();
let invertedSHash = new Map();
let invertedTHash = new Map();
for(let i = 0; i<s.length;i++){
    if(sHash.has(s.charAt(i))){
     let key = s.charAt(i);
    let value = sHash.get(key);
    let firstChar = value.charAt(0);
    let incrementedFirstChar = String(Number(firstChar) + 1);
    let newValue = incrementedFirstChar + value.substring(1);
        sHash.set(s.charAt(i),`${newValue}${i}`);
    } else{
        sHash.set(s.charAt(i),`1${i}`)
    }
}

for(let i = 0; i<t.length;i++){
    if(tHash.has(t.charAt(i))){
     let key = t.charAt(i);
    let value = tHash.get(key);
    let firstChar = value.charAt(0);
    let incrementedFirstChar = String(Number(firstChar) + 1);
    let newValue = incrementedFirstChar + value.substring(1);
        tHash.set(t.charAt(i),`${newValue}${i}`);
    } else{
        tHash.set(t.charAt(i),`1${i}`)
    }

}
 
 //inverting the hashmaps
 
 for(let[key,value] of sHash){
     invertedSHash.set(value,key);
 }
 for(let[key,value] of tHash){
     invertedTHash.set(value,key);
 }

console.log(invertedSHash)
console.log(invertedTHash)

if(invertedSHash.size != invertedTHash.size){
    return false;
}
for(let[key,value] of invertedSHash.entries()){
    console.log(invertedTHash.has([1,0]))
    if(!invertedTHash.has(key)){
        return false;
    }
}
return true;
};