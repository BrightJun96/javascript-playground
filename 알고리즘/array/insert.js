const fruits =  ["apples", "bananas", "cucumbers", "dates", "elderberries"]

// 삽입
fruits.splice(0, 0, "blueberries") // 6 단계
fruits.splice(1, 0, "grapes") // 5 단계
fruits.splice(2, 0, "honeydew") // 4 단계
fruits.splice(3, 0, "kiwi") // 3 단계
fruits.splice(4, 0, "lemons") // 2 단계
fruits.splice(5, 0, "mangoes") // 1 단계


/**
 * 배열의 요소를 삽입하는 연산은 O(n+1)의 시간 복잡도를 가집니다.
 * 최소 1단계 ~ 최대 n+1단계로 찾을 수 있습니다.
 */
