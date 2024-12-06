/**
 * while 문으로 이진 검색
 */

const orderedArray = [3,17,45,80,77,102,140,177,202]


// 두 수 사이에 더 이상 정수가 없을 경우
function noMoreIntegerBetweenStartAndEnd(start,end){

    console.log("두 수 사이에 정수가 더이상 존재하지 않습니다.")

    return start+1===end

}

function binarySearchOrderedArray(arr,target) {

    let start = 0;
    let end = arr.length-1;
    let executedCount=0
    while(start<=end){
        executedCount++
        let middle = Math.floor((start+end)/2)
        let middleValue = arr[middle]
        if(target<middleValue) {
            end = middle - 1
            if(noMoreIntegerBetweenStartAndEnd(start,end)) {
                console.log(`값을 찾을 수 없습니다. 다만,값은 ${start}와 ${end} 사이에 없습니다.`)
                return {
                    result:false,
                    executedCount: i+1
                }
            }
        }

        else if(target>middleValue){
            start= middle+1
            if(noMoreIntegerBetweenStartAndEnd(start,end)) {
                console.log(`값을 찾을 수 없습니다. 다만,값은 ${start}와 ${end} 사이에 없습니다.`)
                return {
                    result:false,
                    executedCount: i+1
                }
            }
        }

        else if(target === middleValue){
            return {
                result:true,
                executedCount
            }
        }


    }

}

const result = binarySearchOrderedArray(orderedArray,17)

console.log("result :",result)
