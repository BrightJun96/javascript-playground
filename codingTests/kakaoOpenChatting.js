
/**
 - 오픈채팅방
 - https://school.programmers.co.kr/learn/courses/30/lessons/42888
 - 들어왔다 나갔는데 이 사람이 다시 들어오지 않으면 배열 요소 처리해줄 필요없음.
 - 들어왔다 나갔는데 이 사람이 닉네임을 변경하고 들어왔으면처리
 > 들어왔다 나간 것을 어떻게 구별할까?


 - 들어와있는 상태에서 닉네임 변경했어도 처리


 > 아이디가 기준이 되어야함.
 */

function solution(record) {

    // 유저별로 기록을 남겨야함.
    /**
     * userRecord
     * {
     *     uuid1234:{
     *         Enter:"Muzi"
     *         Change:"Prodo"
     *     }
     * }
     */

    const userRecord={}

    for(let i = 0; i<record.length; i++){

        const splitedRecord = record[i].split(" ")

        const action =  splitedRecord[0]
        const id =  splitedRecord[1]
        const nickname = splitedRecord[2]

        userRecord[id] = {...userRecord[id] ,[action]:nickname??null}

    }

    // 닉네임이 변경이 있는 유저들
    const nicknameChangeUsers = []
    console.log("userRecord",userRecord)
    for(const key in userRecord){

        const Enter = userRecord["Enter"]
        const Change = userRecord["Change"]
        const Leave = userRecord["Leave"]

        if(Change&& (Enter!==Change)){
            console.log("실행")
            nicknameChangeUsers.push({[key]:Change})

        }

    }


    console.log("nicknameChangeUsers",nicknameChangeUsers)


}

const record =["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
solution(record)
