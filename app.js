/**
 * 1. 객체의 모든 속성 값이 비어있거나, 속성 자체가 없으면 비어있다고 간주합니다.
 * 2. 배열의 모든 요소가 비어있으면 비어있다고 간주합니다.
 * 3. 원시 타입은 비어있지 않다고 간주합니다.
 * 4. 빈 문자열은 비어있다고 간주합니다.
 * 5. null과 undefined는 비어있다고 간주합니다. null과 undefined를 제외한 falsey value는 비어있지 않습니다.
 *
 * 비어있는 경우 true, 아닌 경우 false를 반환하는 함수를 작성
 */


// 비어있다고 판단하는 값들
const isFalsyValue = null | undefined | ""


function solution(value){




    // // 속성 자체가 없는지 검사
    // const isNoKeysInObject= Object.keys(value).length === 0
    // if(isNoKeysInObject){
    //     console.error("객체에 속성 자체가 없습니다.")
    //     return isNoKeysInObject
    // }
    // // 속성 값이 없는지 검사
    // const isNoValuesInObject =Object.values(value).every(v => v === null|undefined)
    // if(isNoValuesInObject){
    //     console.error("객체의 속성 값이 없습니다.")
    //     return isNoValuesInObject
    // }




    // value가 배열인 경우
    if(Array.isArray(value)){
        // 모든 요소가 비어있으면 비어있다고 간주
        if(value.length>0){
            console.error("배열 길이가 0입니다.")
            return true
        }else{
            for(const val of value){
                if(typeof val ==="object"){

                }
            }
        }

    }


    if(typeof value === 'object'){
        validateObject(value)
    }



}


// value가 객체인 경우, 비어있는 값을 검사하는 함수
function validateObject(object) {
    // console.log("validateObject 함수 실행중")
    for(const key in object) {
        // console.log("validateObject 함수 내부 반복문 실행 중")

        // 속성이 존재하면 false 반환
        if(object[key]){
            return false
        }

        // 속성 값이 없는지 검사
        if(object[key]===isFalsyValue){
            console.error("객체에 속성값이 존재하지 않습니다.")
            return true
        }
    }
    // 속성 자체가 없는지 검사
    console.error("객체에 속성 자체가 없습니다.")
    return true

}

const obj ={a:1}
validateObject(obj)


/**
 * 예시 입출력
 */
// solution(null) === false
// solution({}) === true
// solution(0) === false
// solution([{},{a:[]}]) === true
