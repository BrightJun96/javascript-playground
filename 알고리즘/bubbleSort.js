
// console.log("Memory Usage Before Array Allocation:", process.memoryUsage());

/**
 * 배열 중 가장 큰 값이 반복문마다 제일 상단으로 올라간다하여 버블 정렬이라함.
 */
function bubbleSort(list) {

    let lastIndex = list.length;

    let sorted = false;

    while (!sorted){
        sorted = true

        for(let i=0;i<lastIndex;i++){
           let firstItem = list[i];

            if(list[i]>list[i+1]){

                list[i] = list[i + 1];
                list[i+1] = firstItem;
                sorted=false;

            }

        }
        lastIndex = lastIndex-1

    }

        return list

}

const unOrderedArray = [5,2,10,6,4]

const sortArr = bubbleSort(unOrderedArray)
console.log("sortArr ",sortArr)
// console.log("Memory Usage After Array Allocation:", process.memoryUsage());
