const orderedArray = [3,17,45,80,77,102,140,177,202]


// 두 수 사이에 더 이상 정수가 없을 경우
function noMoreIntegerBetweenStartAndEnd(start,end){

    console.log("두 수 사이에 정수가 더이상 존재하지 않습니다.")

    return start+1===end

}


function binarySearchOrderedArray(arr,target){

    // 비교 시작 포인트
    let start = 0
    // 비교 끝 포인트
    let end = arr.length - 1
    // 중간지점
    let middle = Math.floor((start + end) / 2)

    for (let i=0;i<arr.length;i++){

        middle = Math.floor((start + end) / 2)
        let middleValue = arr[middle]
        if(target<middleValue){
            end = middle-1

            if(noMoreIntegerBetweenStartAndEnd(start,end)) {
                console.log(`값을 찾을 수 없습니다. 다만,값은 ${start}와 ${end} 사이에 없습니다.`)
                return {
                    result:false,
                    executedCount: i+1
                }
            }


        }else if(target > middleValue){
            start = middle+1
            if(noMoreIntegerBetweenStartAndEnd(start,end)) {
                console.log(`값을 찾을 수 없습니다. 다만,값은 ${start}와 ${end} 사이에 없습니다.`)
                return {
                    result:false,
                    executedCount: i+1
                }
            }


        }else if(target===middleValue){
            console.log(`값을 찾았습니다. 값은 ${i}번째에 있습니다.`)
            return {
                result:true,
                executedCount: i+1
            }
        }
    }


}

console.log(binarySearchOrderedArray(orderedArray,20))

