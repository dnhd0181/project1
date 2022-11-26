function myFunction1(){ 
    document.getElementById("anh1").style.borderColor = "darkblue"
    document.getElementById("anh2").style.display="none"
    document.getElementById("anh3").style.display="none"}
function myFunction2(){
    document.getElementById("anh2").style.borderColor = "darkblue"
    document.getElementById("anh1").style.display="none"
    document.getElementById("anh3").style.display="none"}
function myFunction3(){
    document.getElementById("anh3").style.borderColor = "darkblue"
    document.getElementById("anh2").style.display="none"
    document.getElementById("anh1").style.display="none"}
function display(){
    p = document.getElementById("name").value
    o = document.getElementById("loichuc").value
    if(p==""||o==""){alert("Bạn phải nhập thông tin vào cả 2 ô")}
    else{
    if(document.getElementById("anh1").style.display!=="none"){
    document.getElementById("test1").innerHTML="Chúc giáo viên"+" "+p+" "+"<br>"+o
    document.getElementById("anh1").style.width="500px"
    document.getElementById("anh1").style.height="auto"
    document.getElementById("anh1").style.animation="mymove 4s 1"
}

    if(document.getElementById("anh2").style.display!=="none"){
    document.getElementById("test2").innerHTML="Chúc giáo viên"+" "+p+" "+"<br>"+o
    document.getElementById("anh2").style.width="500px"
    document.getElementById("anh2").style.height="auto"
    document.getElementById("anh1").style.animation="mymove 4s 1"
}

    if(document.getElementById("anh3").style.display!=="none"){
    document.getElementById("test3").innerHTML="Chúc giáo viên"+" "+p+" "+"<br>"+o
    document.getElementById("anh3").style.width="500px"
    document.getElementById("anh3").style.height="auto"
    document.getElementById("anh1").style.animation="mymove 4s 1"
}
}}
