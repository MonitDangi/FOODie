var getOTP = $(".button");
var divOTP = $(".otp");
let submit = $(".submit");
var username="user101";
var email="noemail"
let sendOTP;
let x =0;
function generateOTP(){
    var digits = "0123456789";
    let OTP ='';
    for(let i=0;i<6;i++){
        OTP += digits[Math.floor(Math.random()*10)];
    }
    return OTP;
}
function validation(email){
    var pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(email.match(pattern)){
        console.log("True");
        return true;
    }
    console.log("False");
    return false;
}

getOTP.click(()=>{
    username = $(".inName").val();
    email = $(".inEmail").val();
    if(!username){
        window.alert("Enter Username");
        return ;
    }
    if(!email){
        window.alert("Enter Email");
        return ;
    }
    var check = validation(email);
    if(!check){
        window.alert("Enter Valid Email Address");
        return;
    }
    getOTP.hide();
    divOTP.show();
    divOTP.width('314px')
    divOTP.height('30px');
    $(".check").show();
    submit.show();
    sendOTP = generateOTP();
    var esub = "One Tine Password for FOODie login."
    console.log(email);


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "foodie2562@gmail.com",
        Password : "1944AEA57DDCDC6D41AFA92CB372DF217EAE",
        To : email,
        From : "foodie2562@gmail.com",
        Subject : esub, 
        Body : "Your OTP is "+ sendOTP +". Dont share it with anyone."
    }).then(
      message => {
        if(message == "OK"){
            alert("OTP Sent.")
            console.log(sendOTP);
        }
        else {
            alert(message);
            alert(sendOTP);
        }
      }
    );
    console.log(sendOTP);
})

submit.click(()=>{
    var enteredOTP = $(".inOTP").val();
    if(enteredOTP != sendOTP){
        window.alert("Enter valid OTP.")
    }
    else{
        $(".note").hide();
        $(".header").show();
        $(".loginPage").hide();
        $(".body").height('auto');
        $(".body").scroll();
    }

})
$('.skip').click(()=>{
    $(".note").hide();
    $(".header").show();
    $(".loginPage").hide();
    $(".body").height('auto');
    $(".body").scroll();
})


//mainpage
var nav = $(".nav");
var search = $(".search");
var icon = $(".icon");
var cross = $(".cross");
var openmenu = $(".openmenu");
var closemenu = $(".closemenu");
var nav2 = $(".nav2");
var width = window.innerWidth;
icon.click(()=>{
    width = window.innerWidth;
    search.show();
    nav.hide();
    icon.hide();
    cross.show();
    search.width(width/3);
})
cross.click(()=>{
    search.width(0);
    width = window.innerWidth;
    if(width > 580){
        nav.show();
    }
    search.hide();
    cross.hide();
    icon.show();
})
openmenu.click(()=>{
    nav2.show();
    nav2.width("100%")
    openmenu.hide();
    closemenu.show();
})
closemenu.click(()=>{
    nav2.width(0);
    nav2.hide();
    closemenu.hide();
    openmenu.show();
})
var MagicScrollOptions = {
    items: 1,
    step: 1,
    draggable: true
};
let v = 0;
v = $(".recommended-dishes").children('div').length;
$(".quantity").text(v);



var indian_count = 0;
var healthy_count = 0;
var foreign_count = 0;
indian_count = $(".indian-food").children('div').length;
healthy_count = $(".healthy-food").children('div').length;
foreign_count = $(".foreign-food").children('div').length;
$('.indian').text(indian_count);
$('.healthy').text(healthy_count);
$('.foreign').text(foreign_count);


$('.indian-container').click(()=>{
    $('.indian-food').show();
    $('.healthy-food').hide();
    $('.foreign-food').hide();

});
$('.healthy-container').click(()=>{
    $('.healthy-food').show();
    $('.indian-food').hide();
    $('.foreign-food').hide();

});
$('.foreign-container').click(()=>{
    $('.foreign-food').show();
    $('.indian-food').hide();
    $('.healthy-food').hide();

});
$('.link').click(()=>{
    window.alert("Launching it soon")
})
