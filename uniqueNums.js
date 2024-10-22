function finduniqueNums(nums){
    const set = new set(nums);
    const result =[];
    for(const value of set){
        result.push(value);
    }
    return result;
}
const arr =[1,2,3,3,4];
const result =finduniqueNums(arr);
 console.log(result);