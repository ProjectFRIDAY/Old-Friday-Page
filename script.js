// ===== 여기 부분만 수정하기
// 순서대로 동혁, 동연, 민규, 현준
// ["이름", "스터디 목표", "프로젝트 개선 사항", "수행 여부", "비고"]

const dh_contents = [
    ["김동혁", "test", "", "✅", ""], // 7월 셋째주
    ["김동혁", "", "", "❌", ""], // 7월 넷째주
    ["김동혁", "", "", "❌", ""], // 8월 첫째주
    ["김동혁", "", "", "❌", ""], // 8월 둘째주
    ["김동혁", "", "", "❌", ""]]; // 8월 셋째주

const dy_contents = [
    ["김동연", "", "", "❌", ""],
    ["김동연", "", "", "❌", ""],
    ["김동연", "", "", "❌", ""],
    ["김동연", "", "", "❌", ""],
    ["김동연", "", "", "❌", ""]];

const mg_contents = [
    ["전민규", "", "", "❌", ""],
    ["전민규", "", "", "❌", ""],
    ["전민규", "", "", "❌", ""],
    ["전민규", "", "", "❌", ""],
    ["전민규", "", "", "❌", ""]];

const hj_contents = [
    ["최현준", "", "", "❌", ""],
    ["최현준", "", "", "❌", ""],
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
    
    if(month < 8){
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
