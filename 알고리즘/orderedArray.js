const orderedArray = [3,17,80,202]

// 정렬된 배열의 검색
/**
 * 찾으려는 요소가 정렬된 배열에 있는지 확인하는 함수를 작성
 * @param arr
 * @param target
 */
// @return {boolean}
function searchOrderedArray(arr, target) {

    let searchIndex = 0


    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < target) {
            searchIndex++
        }else if(arr[i] === target) {
            return {
                result: true, // 결과
                executedCount: searchIndex + 1 // 실행된 횟수
            }
        } else if(arr[i] > target) {
            return {
                result: false,
                executedCount: searchIndex + 1
            }
        }
    }
}

searchOrderedArray(orderedArray, 201)
