
// console.log("Memory Usage Before Array Allocation:", process.memoryUsage());

/**
 * 배열 중 가장 큰 값이 반복문마다 제일 상단으로 올라간다하여 버블 정렬이라함.
 * 비교(comparison): 어느 쪽이 더 큰지 두 수를 비교 (N-1) + (N-2)+ ... +2+1
 * 교환(swap): 정렬하기 위해 두 수를 교환 (N-1) + (N-2)+ ... +2+1
 * O(N²)
 */
function bubbleSort(list) {

    let steps =0;
    let lastIndex = list.length;

    let sorted = false;

    while (!sorted){
        sorted = true

        console.log("총 반복횟수 :",lastIndex-1)
        for(let i=0;i<lastIndex;i++){
            steps++;
           let firstItem = list[i];

            if(list[i]>list[i+1]){

                list[i] = list[i + 1];
                list[i+1] = firstItem;
                sorted=false;

            }

        }
        lastIndex = lastIndex-1

    }

    console.log("steps :",steps)
        return list

}

const unOrderedArray = [5,2,10,6,4]

const sortArr = bubbleSort(unOrderedArray)
console.log("sortArr ",sortArr)
// console.log("Memory Usage After Array Allocation:", process.memoryUsage());
