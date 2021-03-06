// ===== 여기 부분만 수정하기
// 순서대로 동혁, 동연, 민규, 현준
// ["이름", "스터디 목표", "프로젝트 개선 사항", "수행 여부", "비고"]
// "" 안에 HTML 태그 써도 적용됨.

const FAIL_SIGN = "❌";
const UNDEFINED_SIGN = "💬";
const SUCCESS_SIGN = "✅";
const PAGE_COUNT = 5;
let current = 4;

const dh_contents = [
    ["김동혁", "파이썬 정규표현식 학습<br/>구름EDU 파이썬 강좌 하나 수료", "[TEXTI] 이중 복수표현 삭제 후 뒤에 나오는 조사 자동으로 변경", FAIL_SIGN, ""], // 7월 셋째주
    ["김동혁", "구름EDU 파이썬 강좌 두개 수료<br/>윗몸일으키기, 팔굽혀펴기 하루 50개", "워드프로세서 자격증 공부", FAIL_SIGN, ""], // 7월 넷째주
    ["김동혁", "다함께 알고리즘 스터디", "자격증 및 토익 공부", SUCCESS_SIGN, ""], // 8월 첫째주
    ["김동혁", "다함께 알고리즘 스터디<br/>미적분학 복습", "-", FAIL_SIGN, ""], // 8월 둘째주
    ["김동혁", "다함께 알고리즘 스터디<br/>미적분학 복습", "워드프로세서 실기 합격", FAIL_SIGN, ""]]; // 8월 셋째주

const dy_contents = [
    ["김동연", "JS 학습 (script 태그 ~ 문자열)", "-", FAIL_SIGN, ""],
    ["김동연", "자바스크립트 강의 3개 수강", "구름IDE 대체할 공유 코딩 환경 조사", SUCCESS_SIGN, ""],
    ["김동연", "자바스크립트 강의 3개 수강", "[TEXTI] 지속적 서버 운영 방안 찾기", FAIL_SIGN, ""],
    ["김동연", "다함께 알고리즘 스터디<br/>자바스크립트 강의 3~4개 수강", "-", FAIL_SIGN, ""],
    ["김동연", "다함께 알고리즘 스터디<br/>CSS 강의 수강", "-", FAIL_SIGN, ""]];

const mg_contents = [
    ["전민규", "'밑바닥부터 시작하는 딥러닝 1' 훑기<br/>딥러닝 강의 1일 1강씩 수강", "[TEXTI] 서버 내부의 정적 파일(CSS 등) 참조 가능하도록 수정", FAIL_SIGN, ""],
    ["전민규", "C++ 알고리즘 문제 1일 2문제 풀기<br/>딥러닝 강의 1일 1강씩 수강", "[TEXTI] 단어 변경 후 조사 자동으로 변경<br/>[TEXTI] 단어 변경 후 남은 자음 자동으로 결합", FAIL_SIGN, ""],
    ["전민규", "다함께 알고리즘 스터디<br/>딥러닝 강의 수강", "[TEXTI] UI 수정", SUCCESS_SIGN, ""],
    ["전민규", "다함께 알고리즘 스터디<br/>Reactive Native 책 읽기", "-", FAIL_SIGN, ""],
    ["전민규", "다함께 알고리즘 스터디<br/>Reactive Native 책 읽기", "[TEXTI] 구름IDE-Github 연동 설정", FAIL_SIGN, ""]];

const hj_contents = [
    ["최현준", "'C Programming' 1일 1챕터 학습<br/>POCU 공학용 수학 몰아 듣기<br/>노마드 코더 자바스크립트 기초 파트 수강<br/>Andrew Ng AI 강의 4주치 몰아 듣기", "[TEXTI] HTML 코드에서 난잡한 부분 CSS, JS 파일로 분리", FAIL_SIGN, ""],
    ["최현준", "C++ 알고리즘 문제 1일 2문제 풀기<br/>Andrew Ng AI 강의 4주치 수강<br/>'C Programming' 학습<br/>노마드 코더 SCSS 수강<br/>정보처리기능사 자격증 Part1 학습", "[TEXTI] HTML/CSS/JS 코드 개선", FAIL_SIGN, ""],
    ["최현준", "다함께 알고리즘 스터디<br/>노마드 코더 SCSS 수강<br/>딥러닝 강의 수강<br/>미적분학 복습", "[TEXTI] HTML/CSS/JS 코드 개선<br/>[Friday-Page] HTML/CSS/JS 코드 개선", FAIL_SIGN, ""],
    ["최현준", "다함께 알고리즘 스터디<br/>노마드 코더 SCSS 완강<br/>자바스크립트 강의 훑기<br/>미적분학 복습", "[TEXTI] JS로 JJALB(짧) 제작", FAIL_SIGN, ""],
    ["최현준", "다함께 알고리즘 스터디<br/>노마드 코더 JS 수강(그림판/줌)<br/>노마드 코더 SCSS 클론 코딩 실습<br/>미적분학 복습<br/>정보처리기능사 준비<br/>C Programming 6~10", "<del>[TEXTI] JJALB(짧) 보완</del><br/><del>[TEXTI] JJALB(짧) 홍보하기</del>", FAIL_SIGN, ""]];

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
    if(index == 0) left.classList.add("last_page");
    else left.classList.remove("last_page");

    if(index == PAGE_COUNT-1) right.classList.add("last_page");
    else right.classList.remove("last_page");
    
    inText = "<td class='txt'>{0}</td><td class='txt'>{1}</td><td class='txt'>{2}</td><td class='txt'>{3}</td><td class='txt'>{4}</td>";
        
    dh.innerHTML = format(inText, dh_contents[index]);
    dy.innerHTML = format(inText, dy_contents[index]);
    mg.innerHTML = format(inText, mg_contents[index]);
    hj.innerHTML = format(inText, hj_contents[index]);
    
    date.innerText = dates[index];

    let current_page = document.getElementById("current_page");
    current_page.innerText = `${current + 1} / ${PAGE_COUNT}`;
}

left.addEventListener('click', function() {
    if(index > 0){
        index -= 1;
        current--;
        setPage();
    }
});

right.addEventListener('click', function() {
    if(index < PAGE_COUNT-1){
        index += 1;
        current++;
        setPage();
    }
});

init();
setPage();
