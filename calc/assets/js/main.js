// function calc  
function clickBtn(btn){

if(btn== '+'||btn=='-'||btn=='*'||btn=='/'){
    if(document.getElementById('val1').value ==''){     
        document.getElementById('op').value=btn;
        document.getElementById('val1').value = document.getElementById('str0').value;
        document.getElementById('str0').value="";
        document.getElementById('eq').value ='1';
    }
    else{
        equal();
        document.getElementById('op').value=btn;
        document.getElementById('val1').value = document.getElementById('str0').value;
    }
}
else if(btn=="remove"){
    document.getElementById('str0').value="";
    document.getElementById('val1').value="";
    document.getElementById('val2').value="";
    document.getElementById('op').value="";
}
else if(btn =="="){equal();}
else {
    var eq=document.getElementById('eq').value;
    if(eq =='1'){
    document.getElementById('str0').value=btn;
    document.getElementById('eq').value="";
    }
    else{
        document.getElementById('str0').value+=btn;
    }
}}

function equal()
{
    try {
        document.getElementById('eq').value ='1';
        str= document.getElementById('val1').value +
        document.getElementById('op').value +
        document.getElementById('str0').value;
        document.getElementById('val1').value=""; 
        document.getElementById('val2').value="";
        document.getElementById('op').value="";
        strt= eval(str);
            if(strt == Infinity){
            throw ("thas is error");
}
            else{
                document.getElementById('str0').value=eval(str).toString();
        }
        }
        catch(e){
            document.getElementById('str0').value=("thas is error");
        }
}


function remove(){
var str=document.getElementById('str0').value;
str = str.substring(0,str.length-1);
document.getElementById('str0').value=str;
}

function theme(){
var i=document.getElementById("style").themec;
if(i==1){
document.getElementById("style").setAttribute( 'href' , 'assets/css/main2.css'); 
document.getElementById("style").themec=0;}
else{
document.getElementById("style").setAttribute( 'href' , 'assets/css/main.css' ); 
document.getElementById("style").themec=1;}
}

// // function =
//     function eq(){
//         try {
//     str=document.getElementById('str').value;
//     r= document.getElementById('str').value=eval(str);
//         if(r == Infinity)
//         throw ("thas is error");
//         else{
//             document.getElementById('str0').value=eval(str);
//         }
//     }
// catch(e){
//     document.getElementById('str0').value=("thas is error");
// }
//     }

// // function remove one element 
// // function remove all element
//     function cempty(){
//     document.getElementById('str').value='';
//     document.getElementById('str0').value='';
//     }
// function change theme


// logic error 
// function theme(){
//     var sheet = 'assets/css/main2.css';
//     document.getElementById("style").setAttribute( 'href' , sheet);
//     document.getElementById("style").onclick= themes() ;
//}



