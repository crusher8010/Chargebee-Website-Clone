let hamburger = document.querySelector('.hamburger');
let right = document.getElementById('leftt');
let left = document.getElementById('rightt');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    right.classList.toggle('active');
    left.classList.toggle('active');
})
//----------------------------------------------------------------------------

/*-------------------login/signup switch-------------*/
let switchh =  document.getElementById("switch");
let p = document.getElementById("switchName");


/*-------------------signup function----------------------------*/
let signup = () => {                                       
    console.log("clicked");
    
    let hide = document.getElementById("showPass");
    hide.innerText = "Show";
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
    input1.oninput = function(){checkName(input1,input1.value)}   //sending data to "checkName()" function to check & validate the user input
    let p1 = document.createElement("p");
    p1.id = "p1";
    p1.style.fontSize = "13px";

    // input1.style.marginTop = "20px";

    let input2 = document.createElement("input");
    input2.placeholder = "Enter Email";
    input2.id = "input2";
    input2.oninput = function(){checkEmail(input2,input2.value)}    //sending data to "checkEmail()" function to check & validate the user input
    let p2 = document.createElement("p");
    p2.id = "p2";
    p2.style.fontSize = "13px";

    let input3 = document.createElement("input");
    input3.placeholder = "Enter Username";
    input3.id = "input3"
    input3.oninput = function(){checkUsername(input3,input3.value)}    //sending data to "checkUsername()" function to check & validate the user input
    let p3 = document.createElement("p");
    p3.id = "p3";
    p3.style.fontSize = "13px";

    let input4 =  document.createElement("input");
    input4.type = "number";
    input4.placeholder = "Enter Mobile";
    input4.id = "input4";
    input4.min = '0';
    input4.oninput = function(){checkMobile(input4,input4.value)}    //sending data to "checkMobile()" function to check & validate the user input
    let p4 = document.createElement("p");
    p4.id = "p4";
    p4.style.fontSize = "13px";
    

    let input5 = document.createElement("input");
    input5.type = "password";
    input5.placeholder = "Enter Password";
    input5.id = "input5";
    input5.oninput = function(){checkPass(input5,input5.value)}    //sending data to "checkPass()" function to check & validate the user input
    let p5 = document.createElement("p");
    p5.id = "p5";
    p5.style.fontSize = "13px";
    // input2.style.marginTop = "20px";

    let btn =  document.createElement("button");
    btn.innerText = "SignUp";
    btn.id = "btn";
    btn.addEventListener("click", function(){ signup_data(p1,p2,p3,p4,p5,input1,input2,input3,input4,input5,input1.value,input2.value,input3.value,input4.value,input5.value)});
    // btn.style.marginTop = "20px";

    inputs_container.append(input1,p1,br,input2,p2,br1,input3,p3,br2,input4,p4,br3,input5,p5,br4,btn);

}

/*-------------------login function----------------------------*/
let login = () => {
    console.log("clicked");
    let hide = document.getElementById("showPass");
    hide.innerText = "";
   
    switchh.style.transform =  "translateX(99%)";
    switchh.style.transition =  "all 0.5s ease-in-out";
    p.innerText = "Login";

    let inputs_container = document.getElementById("inputs_container");
    inputs_container.innerHTML = "";

    let br = document.createElement("br");
    let br1 = document.createElement("br");
    let input1 = document.createElement("input");
    input1.placeholder = "Enter Username";
    input1.id = "input1";
    input1.oninput = function(){checkLoginUsername(input1,input1.value)}
    let p1 = document.createElement("p");
    p1.id = "p1";
    p1.style.fontSize = "13px";
    // input1.style.marginTop = "20px";
    

    let input2 = document.createElement("input");
    input2.type = "password"
    input2.placeholder = "Enter Password";
    input2.id = "input2";
    input2.oninput = function(){checkLoginPass(input2,input1.value,input2.value)}
    let p2 = document.createElement("p");
    p2.id = "p2";
    p2.style.fontSize = "13px";

    // input2.style.marginTop = "20px";

    let btn =  document.createElement("button");
    btn.innerText = "Login";
    btn.id = "btn";
    btn.addEventListener("click", function(){ login_data(p1,p2,input1,input2,input1.value)});
    // btn.style.marginTop = "20px";

    inputs_container.append(input1,p1,br,input2,p2,br1,btn);
}
/*------------------------------------getting signup data-----------------------------------------------------*/

let signup_data = (p1,p2,p3,p4,p5,input1,input2,input3,input4,input5,name,email,username,mobile,password) => {
    console.log("inside")
    // console.log(name,email,username,mobile,password)
    let detailsArr = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(detailsArr)
    let userdetails = {
        name,
        email,
        username,
        mobile,
        password
    };
    detailsArr.push(userdetails);
    if(input1.style.borderColor == "green" && input2.style.borderColor == "green" && input3.style.borderColor == "green" && input4.style.borderColor == "green" && input5.style.borderColor == "green"){

        localStorage.setItem("userData", JSON.stringify(detailsArr));
        alert("signup successful");
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
        input5.value = "";
        input1.style.borderColor = "grey";
        input2.style.borderColor = "grey";
        input3.style.borderColor = "grey";
        input4.style.borderColor = "grey";
        input5.style.borderColor = "grey";
        p1.innerText = "";
        p2.innerText = "";
        p3.innerText = "";
        p4.innerText = "";
        p5.innerText = "";
        return;
    }else{
        alert("Pls fill Correct details");
        
    }    
}
//-----------------------------------------------------------------------------------
//---------------------------------login function---------------------------------

let login_data = (p1,p2,input1,input2,username) => {
    console.log("inside");

    if(input1.style.borderColor == "green" && input2.style.borderColor == "green"){

        
        alert("Login successful");

        input1.value = "";
        input2.value = "";
       
        input1.style.borderColor = "grey";
        input2.style.borderColor = "grey";
       
        p1.innerText = "";
        p2.innerText = "";
        localStorage.setItem("loggedInUser",JSON.stringify(username));
        // window.location.href = "index.html"
        return;
    }else{
        alert("Pls fill Correct details");
        
    }    

    
}

//----------------------------------check Name input----------------------------
let checkName = (input,n) => {
    // console.log(n);

    //always more than 2 letters
    //can have 1 space
    //only alphabets, lowercase or uppercase
    let p =  document.getElementById("p1");
    let spaceCount = 0;
    
    let strCount = 0;
    // n = n.trim();
    
    for(let i=0; i<n.length; i++){
        if(n.charCodeAt(i) >= 97 && n.charCodeAt(i) <= 122  || n.charCodeAt(i) >= 65 && n.charCodeAt(i) <= 90){
          
          if(n.length <= 2){
            p.innerText = "";
            p.style.color = "red";
            p.innerText = `Wow!! ${i+1} letter name is not acceptable`;
            input.style.borderColor = "red";
            
          }else if(n.length > 2  &&  n.length < 30){
            p.innerText = "";
            p.style.color = "green";
            p.innerText = `Hmm, "${n}" is a good name`;
            input.style.borderColor = "green";
        
          }else{
            p.innerText = "";
            p.style.color = "red";
            p.innerText = "Hey, Name cannot Exceed more than 30 characters !!";
            input.style.borderColor = "red";
        
          }
          
          strCount++;
        }  
        else if(n[i] == " "){
            
            for(let j=0; j<n.length; j++){
                if(n[j] == " ")
                   spaceCount++;
            }
            if(spaceCount > 1){
                // console.log("no of spaces:", spaceCount);
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "maximum 1 space ' ' allowed";
                input.style.borderColor = "red";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                
            }
            
        //    console.log("no of spaces:", spaceCount);
           spaceCount = 0;  
        }else{
            alert("Except for space, No other 'special characters' and 'Numbers' allowed in Name");
            input.value = "";
        }

        
    }

    if(input.value == ""){
        p.innerText = "";
        input.style.borderColor = "grey";
    }
    input.onblur = function(){p.innerText = "";};
}

//----------------------------------check Email input----------------------------
let id=null;
let id2=null;
let checkEmail = (input,e) => {
    
    // clearTimeout(id);
    // clearTimeout(id2);
    // console.log(e);
    let p =  document.getElementById("p2");

    let spaceCount = 0;

    let periodCount = 0;
    let attheratCount = 0;

    let domain = "";
    for(let i=0; i<e.length; i++){

        if(e.charCodeAt(i) >= 97 && e.charCodeAt(i) <=122 || e.charCodeAt(i) >= 48 && e.charCodeAt(i) <= 57 || e[i] == "@" || e[i] == "."){
           
                if(e.length < 6){
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Email cannot be less than 6 characters";
                    input.style.borderColor = "red";
                    
                }else if(e.length > 40 ){
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Email cannot be more than 40 characters";
                    input.style.borderColor = "red";
                    input.setAttribute("readonly",true);
                    setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                    
                }else{
                    p.innerText = "";
                    p.style.color = "green";
                    p.innerText = "So far, Email looks good !!";
                    input.style.borderColor = "green";
                    // return;
                }
                
                if(e[i] == "."){
                    
                    if(e[i-1] == "."){

                        p.innerText = "";
                        p.style.color = "red";
                        p.innerText = "cannot have 2 periods '.' consecutively";
                        input.style.borderColor = "red";
                        input.setAttribute("readonly",true);
                        setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                        return; 
                    }else{
                        periodCount++;
                    }

                }else if(e[i] == "@"){

                    if(e[i-1] == "@"){

                        p.innerText = "";
                        p.style.color = "red";
                        p.innerText = "cannot have 2 '@' consecutively";
                        input.style.borderColor = "red";
                        input.setAttribute("readonly",true);
                        setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                        return; 
                    }else{
                        for(let j=i+1; j<e.length; j++){

                            domain += e[j];
                        }
                        attheratCount++;
                    }  
                }
            }else if(e.charCodeAt(i) >= 65 && e.charCodeAt(i) <= 90){

                p.innerText = "";
                p.style.color = "red";
                p.innerText = "UPPER-CASE not allowed";
                input.style.borderColor = "red";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                return; 
            }else{
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "only '@' and '.' allowed !!";
                input.style.borderColor = "red";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                return;
            }
    }
// console.log("the man was very strong")
    input.onblur = function(){

        
        p.innerText = "";
        
        if(periodCount == 0 || attheratCount == 0){

            id =setTimeout(function(){ 
        
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "Invalid Email !!";
                input.style.borderColor = "red";
                alert("missing '@' or '.' or both, invalid Email...");
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                return;
            },4000)
        }
        
        
            id2 = setTimeout(function(){
                let knownDomains = ["gmail.com","yahoo.com","hotmail.com","rediffmail.com","zohomail.com"];
        
                let notMatched = 0;
                for(let i=0; i<knownDomains.length; i++){
        
                    if(domain !== knownDomains[i]){
        
                        notMatched++;
                    }
                }
        
                if(notMatched == knownDomains.length){
                    alert("Chargebee cannot identify the domain of this email address,")
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Invalid Email !!";
                    input.style.borderColor = "red";
                    input.setAttribute("readonly",true);
                    setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                    return;
                }
            },4000);
    }  
    
    if(input.value == ""){
        p.innerText = "";
        input.style.borderColor = "grey";
    }
}

//----------------------------------check UserName input----------------------------

let checkUsername = (input,u) => {
    // console.log(u)

    let periodCount = 0;
    let underscoreCount = 0;
    let p =  document.getElementById("p3");
    let userinfo = JSON.parse(localStorage.getItem("userData")) || [];
    for(let i=0; i<u.length; i++){

        if(u.charCodeAt(i) >= 97 && u.charCodeAt(i) <=122 || u.charCodeAt(i) >= 48 && u.charCodeAt(i) <= 57 || u[i] == "_" || u[i] == "." ){
           
                if(u.length < 6){
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "User-Name cannot be less than 6 characters";
                    input.style.borderColor = "red";
                    
                }else if(u.length > 30 ){
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "User-Name cannot be more than 30 characters";
                    input.style.borderColor = "red";
                    input.setAttribute("readonly",true);
                    setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                    return;
                }
                // else{
                //     p.innerText = "";
                //     p.style.color = "green";
                //     p.innerText = "So far, User-name looks good !!";
                // }
                
                else if(u[i] == "."){
                    
                    if(u[i-1] == "."){

                        p.innerText = "";
                        p.style.color = "red";
                        p.innerText = "cannot have 2 periods '.' consecutively";
                        input.style.borderColor = "red";
                        input.setAttribute("readonly",true);
                        setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                        return;
                    }
                    // else{
                    //     periodCount++;
                    // }

                }else if(u[i] == "_"){

                    if(u[i-1] == "_"){

                        p.innerText = "";
                        p.style.color = "red";
                        p.innerText = "cannot have 2 '_' consecutively";
                        input.style.borderColor = "red";
                        input.setAttribute("readonly",true);
                        setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                        return;
                    } 
                }

                else if(userinfo.length == 0){
                    p.innerText = "";
                    p.style.color = "green";
                    p.innerText = "User-Name available";
                    input.style.borderColor = "green";
                    // console.log("hello")
                }else{
                    let flag = false;
                    userinfo.forEach((el) => {
                        
                        if(u == el.username){

                            // console.log("boom")
                            flag = true;
                            p.innerText = "";
                            p.innerText = "User-Name already exist,Try something else";
                            p.style.color = "red";
                            input.style.borderColor = "red";
                            // input.setAttribute("readonly",true);
                            // setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                            return;   
                        }
                        
                    })
                   
                        // console.log("hi")
                        if(flag === false){

                            p.innerText = "";
                            p.style.color = "green";
                            p.innerText = "User-Name is Available";
                            input.style.borderColor = "green";
                        }
                    
                }
            }else if(u.charCodeAt(i) >= 65 && u.charCodeAt(i) <= 90){

                p.innerText = "";
                p.style.color = "red";
                p.innerText = "UPPER-CASE not allowed";
                input.style.borderColor = "red";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                return; 
            }else{
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "only period '.' and underscore '_' allowed !!";
                input.style.borderColor = "red";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                return;
            }
    }
    if(input.value == ""){
        p.innerText = "";
        input.style.borderColor = "grey";
    }
    input.onblur = function(){p.innerText = "";};
}

//----------------------------------check Mobile number input----------------------------

let checkMobile = (input,m) => {
    // console.log(m)
    let p =  document.getElementById("p4");
   if(m.length < 10){
      
    console.log("hi")
    p.innerText = "";
    p.style.color = "red";
    p.innerText = "needs to be 10 digits";
    input.style.borderColor = "red";
    
   }else if(m.length > 10){

    p.innerText = "";
    p.style.color = "red";
    p.innerText = "cannot exceed 10 digits";
    input.style.borderColor = "red";
    input.setAttribute("readonly",true);
    setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
    

   }else if(m.length == 10){
    p.innerText = "";
    p.style.color = "green";
    p.innerText = "Great, its 10 digits now !!";
    input.style.borderColor = "green";
    
   }
   if(input.value == ""){
    p.innerText = "";
    input.style.borderColor = "grey";
   }
    input.onblur = function(){p.innerText = "";};
}

//----------------------------------check Password input----------------------------

let checkPass = (input,pass) => {
    // console.log(pass);
    let p =  document.getElementById("p5");
    let lowerCaseCount = 0;
    let upperCaseCount = 0;
    let spclCharCount = 0;
    let numCount = 0;
    for(let i=0; i<pass.length; i++){

        if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122){

            lowerCaseCount++;
            // console.log("lowerCaseCount:",lowerCaseCount)
            if(pass.length < 8){
              
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be less than 8 characters";
                input.style.borderColor = "red";
            }else if(pass.length >= 8 && pass.length <= 20){

                if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "green";
                    p.innerText = "Password Strength: 'STRONG'";
                    input.style.borderColor = "green";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "oragnered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >=1 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }
            }else if(pass.length > 20 ){
               
                // console.log("exceeds 20")
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be more than 20 characters";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                return;
            }

                       
            
        }else if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90){

             upperCaseCount++;
            //  console.log("upperCaseCount:", upperCaseCount)
            if(pass.length < 8){
              
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be less than 8 characters";
            }else if(pass.length >= 8 && pass.length <= 20){

                if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "green";
                    p.innerText = "Password Strength: 'STRONG'";
                    input.style.borderColor = "green";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "oragnered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >=1 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }
            }else if(pass.length > 20 ){
               
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be more than 20 characters";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                return;
            }
            
        }else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57){

             numCount++;

             if(pass.length < 8){
              
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be less than 8 characters";
            }else if(pass.length >= 8 && pass.length <= 20){

                if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "green";
                    p.innerText = "Password Strength: 'STRONG'";
                    input.style.borderColor = "green";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "oragnered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >=1 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }
            }else if(pass.length > 20 ){
               
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be more than 20 characters";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                return;
            }
        }else if(pass.charCodeAt(i) >= 32 && pass.charCodeAt(i) <= 47 || pass.charCodeAt(i) >= 58 && pass.charCodeAt(i) <= 64 || pass.charCodeAt(i) >= 91 && pass.charCodeAt(i) <= 96 || pass.charCodeAt(i) >= 123 && pass.charCodeAt(i) <= 126){

            spclCharCount++;

            if(pass.length < 8){
              
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be less than 8 characters";
            }else if(pass.length >= 8 && pass.length <= 20){

                if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){
                
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "Password Strength: 'WEAK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "red";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount == 0 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "green";
                    p.innerText = "Password Strength: 'STRONG'";
                    input.style.borderColor = "green";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >= 1 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "oragnered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount == 0 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount == 0 && upperCaseCount >=1 && spclCharCount == 0 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "orangered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount == 0){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'OK',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }else if(lowerCaseCount >= 1 && upperCaseCount == 0 && spclCharCount >= 1 && numCount >= 1){

                    p.innerText = "";
                    p.style.color = "orangered";
                    p.innerText = "Password Strength: 'MODERATE',\n use combination of lower & uppercase letters,special characters,numbers to make strong password";
                    input.style.borderColor = "oragnered";
                }
            }else if(pass.length > 20 ){
               
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "cannot be more than 20 characters";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = "";},4000);
                return;
            }
        }

    }
    if(input.value == ""){
        p.innerText = "";
        input.style.borderColor = "grey";
       }
        // input.onblur = function(){p.innerText = "";};
}
let showPass = () => {

    
    let input =  document.getElementById("input5");
    let textChange = document.getElementById("showPass");

    // console.log(p.value)

    if(input.type === "password"){
        input.type = "text";
        textChange.innerText = "Hide"
    }else{
        input.type = "password";
        textChange.innerText = "Show"
    }
}
//--------------------------------------------------------login  username input check-------------------------------------------------------------------

let checkLoginUsername = (input,u) => {
    // console.log(u)

    let periodCount = 0;
    let underscoreCount = 0;
    let p =  document.getElementById("p1");
    let userinfo = JSON.parse(localStorage.getItem("userData")) || [];
    for(let i=0; i<u.length; i++){

        if(u.charCodeAt(i) >= 97 && u.charCodeAt(i) <=122 || u.charCodeAt(i) >= 48 && u.charCodeAt(i) <= 57 || u[i] == "_" || u[i] == "." ){
           
                if(u.length < 6){
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "User-Name cannot be less than 6 characters";
                    input.style.borderColor = "red";
                    
                }else if(u.length > 30 ){
                    p.innerText = "";
                    p.style.color = "red";
                    p.innerText = "User-Name cannot be more than 30 characters";
                    input.style.borderColor = "red";
                    input.setAttribute("readonly",true);
                    setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                    return;
                }
                // else{
                //     p.innerText = "";
                //     p.style.color = "green";
                //     p.innerText = "So far, User-name looks good !!";
                // }
                
                else if(u[i] == "."){
                    
                    if(u[i-1] == "."){

                        p.innerText = "";
                        p.style.color = "red";
                        p.innerText = "cannot have 2 periods '.' consecutively";
                        input.style.borderColor = "red";
                        input.setAttribute("readonly",true);
                        setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                        return;
                    }
                    // else{
                    //     periodCount++;
                    // }

                }else if(u[i] == "_"){

                    if(u[i-1] == "_"){

                        p.innerText = "";
                        p.style.color = "red";
                        p.innerText = "cannot have 2 '_' consecutively";
                        input.style.borderColor = "red";
                        input.setAttribute("readonly",true);
                        setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                        return;
                    } 
                }

                else if(userinfo.length == 0){
                    p.innerText = "";
                    p.style.color = "green";
                    p.innerText = "User-Name available";
                    input.style.borderColor = "green";
                    // console.log("hello")
                }else{
                    let flag = false;
                    userinfo.forEach((el) => {
                        
                        if(u == el.username){

                            // console.log("boom")
                            flag = true;
                            p.innerText = "";
                            p.innerText = "1 user found in Data Base...";
                            p.style.color = "green";
                            input.style.borderColor = "green";
                            // input.setAttribute("readonly",true);
                            // setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                            return;   
                        }
                        
                    })
                   
                        // console.log("hi")
                        if(flag === false){

                            p.innerText = "";
                            p.style.color = "red";
                            p.innerText = "Can't find this User-Name in Data Base... ";
                            input.style.borderColor = "red";
                        }
                    
                }
            }else if(u.charCodeAt(i) >= 65 && u.charCodeAt(i) <= 90){

                p.innerText = "";
                p.style.color = "red";
                p.innerText = "UPPER-CASE not allowed";
                input.style.borderColor = "red";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                return; 
            }else{
                p.innerText = "";
                p.style.color = "red";
                p.innerText = "only '@', '.' and '_' allowed !!";
                input.style.borderColor = "red";
                input.setAttribute("readonly",true);
                setTimeout(function(){ input.removeAttribute("readonly"); input.value = ""; p.innerText = ""; input.style.borderColor = "grey";},4000);
                return;
            }
    }
    if(input.value == ""){
        p.innerText = "";
        input.style.borderColor = "grey";
    }
    input.onblur = function(){p.innerText = "";};
}

//-------------------------------------------login password check-------------------------------------

let checkLoginPass = (input,username,pass) => {
   console.log(pass);
   let p =  document.getElementById("p2");
   let detailsArr = JSON.parse(localStorage.getItem("userData")) || [];
   let flag = false;
   detailsArr.forEach((el)=> {
      if(pass == el.password && username == el.username){
        flag = true;
        p.innerText = "";
        p.innerText = "password Matched...Click Login Button.."
        p.style.color = "green";
        input.style.borderColor = "green";
        return;
      }
   })
   if(flag == false){
   
        p.innerText = "";
        p.innerText = "Incorrect Password, Pls check..."
        p.style.color = "red";
        input.style.borderColor = "red";
   }
   if(input.value == ""){
    p.innerText = "";
    input.style.borderColor = "grey";
   }
}
