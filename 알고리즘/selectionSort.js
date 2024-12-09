/**
 * 선택정렬
 * O(N²/2)
 */
function selectionSort(list){

    let steps = 0;
    for(let i=0;i<list.length;i++){

        let lowestNumberIndex = i;

        for(let j=i+1;j<list.length;j++){
            steps++;
            if(list[j]<list[lowestNumberIndex]){

                lowestNumberIndex=j;

            }
        }

        if(lowestNumberIndex!==i){
            let temp = list[lowestNumberIndex];
            list[lowestNumberIndex] = list[i];
            list[i] = temp;
        }
    }

    console.log("steps: ",steps)
    return list

}


const arr = [340,6,3,2,9]

const sortArr = selectionSort(arr)

console.log("sortArr :",sortArr)
