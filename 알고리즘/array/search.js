const fruits =  ["apples", "bananas", "cucumbers", "dates", "elderberries"]


// 검색 연산- 단계 계산
fruits.find(fruit => fruit === "apples") // 1 단계
fruits.find(fruit => fruit === "bananas") // 2 단계
fruits.find(fruit => fruit === "cucumbers") // 3 단계
fruits.find(fruit => fruit === "dates") // 4 단계
fruits.find(fruit => fruit === "elderberries") // 5 단계

/**
 * 배열의 요소를 검색하는 연산은 O(n)의 시간 복잡도를 가집니다.
 * 최소 1단계 ~ 최대 n단계로 찾을 수 있습니다.
 */
