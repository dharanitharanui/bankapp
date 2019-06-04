var mobileno;
var OTP = '';
define({ 
  onNavigate:function(content){
    try{
      mobileno = content; 
      var digits = '0123456789'; 
      for (var i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
      } 
      var sendotp = new kony.net.HttpRequest();
      sendotp.open(
        constants.HTTP_METHOD_POST, 
        "https://control.msg91.com/api/sendotp.php?otp="+OTP+"&otp_length=4&otp_expiry=1&sender=TESTIN&mobile=+91"+
        mobileno+"&authkey=261425AnQWnKfJ7Fk5c596b26");
      sendotp.send();
    }catch(error){
      alert("Error"+error);
    }
  },
  focus:function(textfocus){
    try{
      if(textfocus.text.length !== 0){
        if(textfocus.id === "text1"){
          this.view.text2.setFocus(true);
        }else if(textfocus.id === "text2"){
          this.view.text3.setFocus(true);
        }else if(textfocus.id === "text3"){
          this.view.text4.setFocus(true);
        }
      }
    }catch(error){
      alert("Error"+error);
    }
  },
  resend:function(){
    try{
      var resendotp = new kony.net.HttpRequest();
      resendotp.open(
        constants.HTTP_METHOD_POST, 
        "https://control.msg91.com/api/retryotp.php?mobile=+91"+mobileno+"&authkey=261425AnQWnKfJ7Fk5c596b26");
      resendotp.send();
    }catch(error){
      alert("Error"+error);
    }
  },
  verify:function(){
    try{
      var otpnumber = this.view.text1.text+this.view.text2.text+this.view.text3.text+this.view.text4.text;
      if(otpnumber.length ===4){
        var verifyotp = new kony.net.HttpRequest();
        verifyotp.open(constants.HTTP_METHOD_POST, 
                       "https://control.msg91.com/api/verifyRequestOTP.php?authkey=261425AnQWnKfJ7Fk5c596b26&mobile=+91"+
                       mobileno+"&otp="+otpnumber);
        verifyotp.send();
      }
    }catch(error){
      alert("Error"+error);
    }
  }
});