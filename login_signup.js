/*-------------------login/signup switch-------------*/
let switchh =  document.getElementById("switch");
let p = document.getElementById("switchName");

/*-------------------signup function----------------------------*/
let signup = () => {                                       
    // console.log("clicked");
    
    
    switchh.style.transform =  "translateX(1%)";
    switchh.style.transition =  "all 0.5s ease-in-out";
    p.innerText = "SignUp";

    let inputs_container = document.getElementById("inputs_container");
    inputs_container.innerHTML = "";

    let br = document.createElement("br");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");

    let input1 = document.createElement("input");
    input1.placeholder = "Enter Name/last name optional";
    input1.id = "input1"; 
    input1.oninput = function(){checkName(input1,input1.value)}
    let p1 = document.createElement("p");
    p1.id = "p1";
    p1.style.fontSize = "13px"

    // input1.style.marginTop = "20px";

    let input2 = document.createElement("input");
    input2.placeholder = "Enter Email";
    input2.id = "input2";
    let p2 = document.createElement("p");
    p2.id = "p2";

    let input3 = document.createElement("input");
    input3.placeholder = "Enter Username";
    input3.id = "input3"
    let p3 = document.createElement("p");
    p3.id = "p3";

    let input4 =  document.createElement("input");
    input4.placeholder = "Enter Mobile";
    input4.id = "input4";
    let p4 = document.createElement("p");
    p4.id = "p4";
    

    let input5 = document.createElement("input");
    input5.type = "password";
    input5.placeholder = "Enter Password";
    input5.id = "input5";
    let p5 = document.createElement("p");
    p5.id = "p5";
    // input2.style.marginTop = "20px";

    let btn =  document.createElement("button");
    btn.innerText = "SignUp";
    btn.id = "btn";
    btn.addEventListener("click", function(){ signup_data(input1.value,input2.value,input3.value,input4.value,input5.value)});
    // btn.style.marginTop = "20px";

    inputs_container.append(input1,p1,br,input2,p2,br1,input3,p3,br2,input4,p4,br3,input5,p5,br4,btn);

}

/*-------------------login function----------------------------*/
let login = () => {
    // console.log("clicked");
   
    switchh.style.transform =  "translateX(99%)";
    switchh.style.transition =  "all 0.5s ease-in-out";
    p.innerText = "Login";

    let inputs_container = document.getElementById("inputs_container");
    inputs_container.innerHTML = "";

    let br = document.createElement("br");
    let br1 = document.createElement("br");
    let input1 = document.createElement("input");
    input1.placeholder = "Enter Username/Email";
    input1.id = "input1";
    // input1.style.marginTop = "20px";
    

    let input2 = document.createElement("input");
    input2.placeholder = "Enter Password";
    input2.id = "input2";
    // input2.style.marginTop = "20px";

    let btn =  document.createElement("button");
    btn.innerText = "Login";
    btn.id = "btn";
    // btn.style.marginTop = "20px";

    inputs_container.append(input1,br,input2,br1,btn);
}

/*------------------------------------getting signup data-----------------------------------------------------*/

let signup_data = (name,email,username,mobile,password) => {
    console.log("inside")
    // console.log(name,email,username,mobile,password)

    
}
let checkName = (input,n) => {
    // console.log(n);

    //always more than 2 letters
    //can have 1 space
    //only alphabets, lowercase or uppercase
    let p =  document.getElementById("p1");
    let spaceCount = 0;
    let strCount = 0;
    n = n.trim();
    
    for(let i=0; i<n.length; i++){
        if(n.charCodeAt(i) >= 97 && n.charCodeAt(i) <= 122  || n.charCodeAt(i) >= 65 && n.charCodeAt(i) <= 90){
          
          if(n.length <= 2){
            p.innerText = "";
            p.style.color = "red";
            p.innerText = `Wow!! ${i+1} letter name is not acceptable`;
          }else if(n.length > 2  &&  n.length < 30){
            p.innerText = "";
            p.style.color = "green";
            p.innerText = `Hmm, "${n}" is a good name`
          }else{
            p.innerText = "";
            p.style.color = "red";
            p.innerText = "Hey, Name cannot Exceed more than 30 characters !!"
          }
             
          strCount++;
        }  
        else if(n[i] == " "){
            
            for(let j=0; j<n.length; j++){
                if(n[j] == " ")
                   spaceCount++;
            }
            if(spaceCount > 1){
                console.log("no of spaces:", spaceCount);
                p.innerText = "";
                p.innerText = "maximum 1 space ' ' allowed";
                // input.disabled = true;
            }
            setTimeout(function(){
                input.disabled = false;
                input.value = "";
                p.innerText = "";
            },3000)
        //    console.log("no of spaces:", spaceCount);
           spaceCount = 0;  
        }else{
            alert("Except for space, No other special characters allowed in Name");
            input.value = "";
        }

        
    }

    if(input.value == ""){
        p.innerText = "";
    }
}