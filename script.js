// ===== 여기 부분만 수정하기
// 순서대로 동혁, 동연, 민규, 현준
// ["이름", "스터디 목표", "프로젝트 개선 사항", "수행 여부", "비고"]
// "" 안에 HTML 태그 써도 적용됨.

const dh_contents = [
    ["김동혁", "파이썬 정규표현식 학습<br/>구름EDU 파이썬 강좌 하나 수료", "[TEXTI] 이중 복수표현 삭제 후 뒤에 나오는 조사 자동으로 변경", "❌", ""], // 7월 셋째주
    ["김동혁", "구름EDU 파이썬 강좌 두개 수료<br/>윗몸일으키기, 팔굽혀펴기 하루 50개", "워드프로세서 자격증 공부", "💬", ""], // 7월 넷째주
    ["김동혁", "", "", "❌", ""], // 8월 첫째주
    ["김동혁", "", "", "❌", ""], // 8월 둘째주
    ["김동혁", "", "", "❌", ""]]; // 8월 셋째주

const dy_contents = [
    ["김동연", "JS 학습 (script 태그 ~ 문자열)", "?", "💬", ""],
    ["김동연", "", "", "💬", ""],
    ["김동연", "", "", "❌", ""],
    ["김동연", "", "", "❌", ""],
    ["김동연", "", "", "❌", ""]];

const mg_contents = [
    ["전민규", "'밑바닥부터 시작하는 딥러닝 1' 훑기<br/>딥러닝 강의 1일 1강씩 수강", "[TEXTI] 서버 내부의 정적 파일(CSS 등) 참조 가능하도록 수정", "❌", ""],
    ["전민규", "C++ 알고리즘 문제 1일 2문제 풀기<br/>딥러닝 강의 1일 1강씩 수강", "미정", "💬", ""],
    ["전민규", "", "", "❌", ""],
    ["전민규", "", "", "❌", ""],
    ["전민규", "", "", "❌", ""]];

const hj_contents = [
    ["최현준", "'C Programming' 1일 1챕터 학습<br/>POCU 공학용 수학 몰아 듣기<br/>노마드 코더 자바스크립트 기초 파트 수강<br/>Andrew Ng AI 강의 4주치 몰아 듣기", "[TEXTI] HTML 코드에서 난잡한 부분 CSS, JS 파일로 분리", "❌", ""],
    ["최현준", "C++ 알고리즘 문제 1일 2문제 풀기<br/>Andrew Ng AI 강의 4주치 수강<br/>'C Programming' 학습<br/>노마드 코더 SCSS 수강<br/>정보처리기능사 자격증 Part1 학습", "미정", "💬", ""],
    ["최현준", "", "", "❌", ""],
    ["최현준", "", "", "❌", ""],
    ["최현준", "", "", "❌", ""]];

// ===== 여기까지 수정부분

const dates = ["✍ 7월 셋째주 (7/19 ~ 7/25)", "✍ 7월 넷째주 (7/26 ~ 8/01)", "✍ 8월 첫째주 (8/02 ~ 8/08)", "✍ 8월 둘째주 (8/09 ~ 8/15)", "✍ 8월 셋째주 (8/16 ~ 8/22)"];

var index = 0;
var date = document.getElementById("date");
var dh = document.getElementById("dh");
var dy = document.getElementById("dy");
var mg = document.getElementById("mg");
var hj = document.getElementById("hj");
var left = document.getElementById("left");
var right = document.getElementById("right");

function format(str, arr) {
   return str.replace (/\{(\d+)\}/g, function (match, index) {
      return arr[index];
   });
}

function init(){
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    if(month < 7){
        if(day < 26) index = 0;
        else index = 1;
    }else{
        if(day < 2) index = 1;
        else if(day < 9) index = 2;
        else if(day < 16) index = 3;
        else index = 4;
    }
}

function setPage(){
    if(index == 0) left.style.color = "gray";
    else left.style.color = "black";
    if(index == 4) right.style.color = "gray";
    else right.style.color = "black";
    
    inText = "<td class='txt'>{0}</td><td class='txt'>{1}</td><td class='txt'>{2}</td><td class='txt'>{3}</td><td class='txt'>{4}</td>";
        
    dh.innerHTML = format(inText, dh_contents[index]);
    dy.innerHTML = format(inText, dy_contents[index]);
    mg.innerHTML = format(inText, mg_contents[index]);
    hj.innerHTML = format(inText, hj_contents[index]);
    
    date.innerText = dates[index];
}

left.addEventListener('click', function() {
    if(index > 0){
        index -= 1;
        setPage();
    }
});

right.addEventListener('click', function() {
    if(index < 4){
        index += 1;
        setPage();
    }
});

init();
setPage();
