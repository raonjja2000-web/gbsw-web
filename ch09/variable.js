//var는 함수 스코프


function functionScope(){
    if (true){
        var b = 5;
    }
    //var는 함수 스코프로
    console.log(b);//변수 참조 가능
}
test();
var a = 10;

function test(){
    if (true){
        var b = 5;
    }

    console.log(b);//변수 참조 가능
}
test();
var a = 10;

function test(){
    if (true){
        var b = 5;
    }

    console.log(b);//변수 참조 가능
}

//let const는 블록 스코프
//let은 가변
//const는 불변