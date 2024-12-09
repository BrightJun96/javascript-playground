

function bubbleSort(list) {

    let lastIndex = list.length;

    let sorted = false;

    while (!sorted){
        sorted = true
        for(let i=0;i<lastIndex;i++){

            if(list[i]>list[i+1]){

                let firstItem = list[i];
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

console.log("sortArr :",sortArr)
