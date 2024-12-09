
console.log("Memory Usage Before Array Allocation:", process.memoryUsage());

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


    }

        return list

}

const unOrderedArray = [5,2,10,6,4]

const sortArr = bubbleSort(unOrderedArray)
// console.log("sortArr ",sortArr)
console.log("Memory Usage After Array Allocation:", process.memoryUsage());
