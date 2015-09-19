var palindrome = function (str) {
    for (var i=0; i<(str.length/2); i++){
        if (str[i]!==str[str.length-1-i])
            return false
        else
            return true
    }
    
}


var dashInsert = function (num) {
    var m=0;
    var arr = num.toString().split("")
    var arr2 = num.toString().split("")
    for (var i=0; i<(arr.length-1); i++){
        if ((Number(arr[i])%2)!==0 && (Number(arr[i+1])%2)!==0){
            arr2.splice(m+1, 0,'-')
            m++
        }
        m++
    } 
        
        return arr2.join("");
    
}


dashInsert(454793);

var ceaserCipher = function (str, num) {
    var arr = str.split("")
    var code;
    for (var i=0; i<str.length; i++){
        code = str.charCodeAt(i);
        if ( ((code >= 65) && (code <= 90)) || ((code >= 97) &&                 (code <= 122)) ) {
                arr[i]=String.fromCharCode(code+num)
  
        }
  
     } 
       
    return arr.join("");
    
}


ceaserCipher("Caesar Cipher", 2);