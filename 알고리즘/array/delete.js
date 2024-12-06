const fruits =  ["apples", "bananas", "cucumbers", "dates", "elderberries"]

// 삭제
fruits.splice(0, 1) // 5 단계
fruits.splice(1, 1) // 4 단계
fruits.splice(2, 1) // 3 단계
fruits.splice(3, 1) // 2 단계
fruits.splice(4, 1) // 1 단계

/**
 * 배열의 요소를 삭제하는 연산은 O(n)의 시간 복잡도를 가집니다.
 * 최소 1단계 ~ 최대 n단계로 찾을 수 있습니다.
 */
