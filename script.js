let arabic = document.getElementById("arabic");

arabic.addEventListener("click",()=>{
    localStorage.setItem("lang","arabic");
    lang("arabic");
});

let english = document.getElementById("english");

english.addEventListener("click",()=>{
    localStorage.setItem("lang","english");
    lang("english");
});

let text = document.getElementById("text");
let wel = document.getElementById("wel");
let me = document.getElementById("me");
let text1 = document.getElementById("text1");


function lang(getLang){
    if(getLang == "arabic"){
        text.innerHTML = "علي كرم";
        wel.innerHTML = "أهلا بكم في موقعي";
        me.innerHTML = "عني";
        text1.innerHTML = "مرحبا انا علي انا من العراق عمري 13 سنه انا ادرس مع أستاذي كودر شيار";
    };
    if(getLang == "english"){
        
        text.innerHTML = "Ali Karam";
        wel.innerHTML = "Wellcome In My Website";
        me.innerHTML = "About Me";
        text1.innerHTML = "Hello Iam Ali Iam from Iraq I Have 13 I Study Hard With My Teacher Coder Shiyar";
    }
};
onload = ()=>{
    lang(localStorage.getItem("lang"));
}