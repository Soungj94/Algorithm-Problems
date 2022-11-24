//윷놀이
function solution(arr1){
  let answer = ''
  let count = 0
  for(let i = 0; i< arr1.length; i++){
    if(arr1[i] === 1){
      count ++
    }
  }
  if (count === 0) { // // 등 0
    answer = '윷';
  } else if (count === 1) { // 등 1
    answer = '걸';
  } else if (count === 2) { // 등 2
    answer = '개';
  } else if (count === 3) { // 등 3
    answer = '도';
  } else if (count === 4) { // 등 4
    answer = '모';
  }
  return answer;
  
}
console.log(solution([0,1,0,0]))

//도개걸윷모 는 0과 1로만 이루어져있고 
//도(배 1개, 등 3개), 개(배 2개, 등 2개), 걸(배 3개, 등 1개), 윷(배 4개), 모(등 4개) 
//도(0 1개, 1 3개), 개(0 2개, 1 2개), 걸(0 3개, 1 1개), 윷(0 4개), 모(1 4개)
//if 문을 돌면서 1의 갯수를 새어 몇개는 뭐다 값 출력

//별만들기

let star3 = '';

for (let i = 1; i <= 9; i++) { // 9번의 라인 출력

  //공백
  for (let j = i; j < 9; j++) { // j는 i니까 j가 9보다 작으면 공백 출력
    star3 += " ";
  }

  // * 칸
  for (let k = 1; k <= (2 * i) - 1; k++) { // k는 1이고, k는 (i갯수*2) - 1만큼 별 출력
    star3 += "*";
  }
  star3 += "\n";
}
console.log(star3);




