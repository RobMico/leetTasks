var searchInsert = function(nums, target) {
    let arr = nums, pos=0;
    while(true){
        if(arr.length==0)
        {
            return pos;
        }
        if(arr.length==1){
            if(arr[0]==target)
            {
                return pos;
            }
            return arr[0]>target?pos:pos+1;
        }
        let diviner = Math.floor(arr.length/2);
        if(arr[diviner]==target){
            return diviner;
        }
        else if(arr[diviner]>target){
            arr = arr.slice(0, diviner);
        }
        else{
            arr = arr.slice(diviner+1);
            pos+=diviner+1;
        }
    }
};


console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));