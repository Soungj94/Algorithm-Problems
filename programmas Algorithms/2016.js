function solution(a, b){
    let answer = ''
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const dayIndex = new Date(2016, a-1, b).getDay();
    answer = days[dayIndex]
    return answer
}
console.log(solution(5, 24))


//https://school.programmers.co.kr/learn/courses/30/lessons/12901

