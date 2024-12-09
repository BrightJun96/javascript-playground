/**
 * 배열에서 가장 큰 수를 찾는 함수
 * O(N²)
 */
function greatestNumberOn2(list){
    let steps =0;
    for(let i of list){
        let isValTheGreatest = true;
        for(let j of list){
            steps++
            if(j>i){
                isValTheGreatest=false;
            }
        }
        console.log("steps: ",steps)
        if(isValTheGreatest) return i
    }
}

/**
 * 배열에서 가장 큰 수를 찾는 함수
 * O(N)
 */
function greatestNumberOn(list){

    let greatestNum = list[0];
    for(let i of list){

        if(i>greatestNum){
            greatestNum=i;
        }


    }
    return greatestNum

}


const arr =[1,10,3,4,5,6]

// console.log("greatestNumber :",greatestNumberOn2(arr))
console.log("greatestNumber :",greatestNumberOn(arr))
