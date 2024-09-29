var topKFrequent = (nums,k) => {
 
    var maxValues = []
    var count = Array.from({length: nums.length + 1}, () => [])
    if(nums.length === 1 ){
        return nums;
    }

    var freqMap = new Map();

    for(var i = 0; i<nums.length;i++){
        if(freqMap.has(nums[i])){
         freqMap.set(nums[i],freqMap.get(nums[i])+1)   
        }else{
            freqMap.set(nums[i],1)
        }
    }
    
    freqMap.forEach((value,key) => {
        count[value].push(key)
    })

    for(var i = 0; i<count.length;i++){
        if(count[count.length-1-i] != []){
            maxValues = [...maxValues,...count[count.length-1-i]]
        }
        if(maxValues.length === k){
            break;
        }
        }
    /*var maxKey = 0
    for(var i =0; i<k;i++){
    var max = 1
        freqMap.forEach((value,key) => {
            if(value >= max){
                max = value
                maxKey = key
            }       
        });
        maxValues.push(maxKey);
        freqMap.set(maxKey,-1)
    }*/

    return maxValues;

}


/*
  [1,1,1,2,3,3,4,4,4,4]

    */ 
