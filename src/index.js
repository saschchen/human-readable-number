module.exports = function toReadable (n) {
        var arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        var arr1 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var arr2 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        var arr3 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        var str = n.toString();
        var result = '';
        
        if (n < 20){
         result = arr[n];
        }
        
        else if (n> 19 && str.length===2) {
        if(str[1]==='0'){
        
        
        result = arr1[str[0]];
        }
        
        else {
        result = arr1[str[0]] + " " + arr2[str[1]];
        }
        
        }
        else {
        if (n>99 && str[1]==='0' && str[2]=== '0') {
        result = arr2[str[0]]+' '+ 'hundred';
        }
        
        else if (n>99 && str[1]!=='0' && str[1]!=='1' && str[2]=== '0') {
        result = arr2[str[0]]+' '+ 'hundred' + ' '+ arr1[str[1]];
        }
        
        else if (n>99 && str[1]==='0' && str[2]!== '0') {
        result = arr2[str[0]]+' '+ 'hundred' + ' '+ arr2[str[2]];
        }
        else if (n>99 && str[1]==='1') {
            result = arr2[str[0]]+' '+ 'hundred' + ' '+ arr3[str[2]];
            }
        else {
        result = arr2[str[0]]+' '+ 'hundred' + ' '+ arr1[str[1]]+ ' ' + arr2[str[2]];
        }
        }
        
        return result;
        }

