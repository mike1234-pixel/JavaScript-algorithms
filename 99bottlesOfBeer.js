// use a while loop to print the lyrics of 99 bottles of beer

function bottles99() {
    
    var count = 99;
    
    while (count >= 1) {
        var countMinusOne = count - 1;
        console.log(count + " bottles of beer on the wall," + count + " bottles of beer. Take one down and pass it around, " + countMinusOne + " bottles of beer on the wall");
        count--;
    } 

}
    
bottles99();
