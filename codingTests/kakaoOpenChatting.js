
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

        // action이 나가기라면 이전 들어왔던 닉네임을 가져와 할당
        userRecord[id] = {...userRecord[id] ,[action]:action==="Leave"?userRecord[id]["Enter"]:nickname}

    }

    // 닉네임이 변경이 있는 유저들
    const nicknameChangeUsers = []
    console.log("userRecord",userRecord)
    for(const key in userRecord){

        console.log("key :",key)
        const Enter = userRecord[key]["Enter"]
        const Change = userRecord[key]["Change"]
        const Leave = userRecord[key]["Leave"]

        /**
         * 들어와있는 상태에서 닉네임이 변경되었을 때
         */
        if(Change&& (Enter!==Change)){
            nicknameChangeUsers.push({[key]:Change})

        }

        /**
         * 나갔는데 들어왔을 때, 닉네임이 변경하고 들어왔을 때
         * 나갔을 때 닉네임과 들어왔을 때 닉네임이 다르다면 닉네임을 변경하고 들어왔다고 간주할 수 있음.
         */
        if(Leave && (Enter!==Leave)){
            nicknameChangeUsers.push({[key]:Enter})
        }



    }



   return record
       .filter((rec) => rec.split(" ")[0]!=="Change")
       .map((rec) => {
        const splitedRecord = rec.split(" ")
        const action =  splitedRecord[0]
        const id =  splitedRecord[1]
        const nickname = splitedRecord[2]

      const changeUser =   nicknameChangeUsers.find((user) => user[id])
        console.log("changeUser",changeUser)
           const processedUser = changeUser?changeUser[id]:nickname

       switch (action) {
           case "Enter":
               return `${processedUser}님이 들어왔습니다.`
           case "Leave":
                return `${processedUser}님이 나갔습니다.`
           default:
               break;
       }


    })

    // nicknameChangeUsers의 배열 중 id가 같은 게 있다면 해당 닉네임으로 교체

}

const record =["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]


const result =  solution(record)
console.log("result",result)
