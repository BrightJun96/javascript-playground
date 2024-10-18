/**
 * 1. 객체의 모든 속성 값이 비어있거나, 속성 자체가 없으면 비어있다고 간주합니다.
 * 2. 배열의 모든 요소가 비어있으면 비어있다고 간주합니다.
 * 3. 원시 타입은 비어있지 않다고 간주합니다.
 * 4. 빈 문자열은 비어있다고 간주합니다.
 * 5. null과 undefined는 비어있다고 간주합니다. null과 undefined를 제외한 falsey value는 비어있지 않습니다.
 *
 * 비어있는 경우 true, 아닌 경우 false를 반환하는 함수를 작성
 */


class CustomCreateObject{

}

function CreateObjectFunction(){}

const customObjectByFunction = new CreateObjectFunction()

const customObject =  new CustomCreateObject()
// 비어있다고 판단하는 값들
const isFalsyValue = null | undefined | ""


function solution(value){

    // 원시값 검사
    if(validatePrimitive(value)) return

    // 배열 검사
     if(validateArray(value)) return

    // 객체 검사
    if(validateObject(value)) return

}


// value가 객체인 경우, 비어있는 값을 검사하는 함수
function validateObject(object) {

    if(typeof object==="object") {
        // 속성 자체가 없는지 검사
        if (Object.keys(object).length === 0) {
            console.error("객체에 속성 자체가 없습니다.")
            return true
        }

        for (const key in object) {
            // 속성값이 배열일때, 빈값 검사
            validateArray(object[key])
            validateObject(object[key])

            // 속성 값이 없는지 검사
            if (object[key] === isFalsyValue) {
                console.error("객체에 속성값이 존재하지 않습니다.")
                return true
            }
        }
    }
    else{
        return false
    }

}


// value가 배열인 경우
function validateArray(value){
    // console.log("배열 검사 함수 실행중")
    // value가 배열인 경우,비어있는 값을 검사하는 함수
    if(Array.isArray(value)){
        // 모든 요소가 비어있으면 비어있다고 간주
        if(value.length===0){
            console.error("배열 길이가 0입니다.")
            return true
        }
        else{
            for(const val of value){
                validateObject(val)
            }
        }

    }

}


// value가 원시값인 경우
function validatePrimitive(value){
    if(typeof value ==="string" && value===""){
        console.error("빈 문자열입니다.")
        return true
    }
    if(value ===null ){
        console.error("null 값이 존재합니다.")
        return true
    }
    if(value===undefined){
        console.error("undefined 값이 존재합니다.")
        return true
    }
}



const value = []

// solution(value)


// console.log("customobject :",customObject.constructor)
// console.log("customobjectByFunction :",customObjectByFunction.constructor===CreateObjectFunction)
/**
 * 예시 입출력
 */
// solution(null)
// solution({})
// solution(0)
// solution([{},{a:[]}])
solution([{a:{a:{
    a:{}
        }}}])
