var bool=false;
define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          
          //Create mPIN
          this.view.btnCreate.onClick = this.createMpin;
          
          // For auto focus function call
          this.view.txtMpin1.onTextChange = this.mPinFocus;
          this.view.txtMpin2.onTextChange = this.mPinFocus;
          this.view.txtMpin3.onTextChange = this.mPinFocus;
          this.view.txtMpin4.onTextChange = this.mPinFocus;
          this.view.txtMpin5.onTextChange = this.mPinFocus;
          this.view.txtMpin6.onTextChange = this.mPinFocus;
          this.view.txtCMpin1.onTextChange = this.mPinFocus;
          this.view.txtCMpin2.onTextChange = this.mPinFocus;
          this.view.txtCMpin3.onTextChange = this.mPinFocus;
          this.view.txtCMpin4.onTextChange = this.mPinFocus;        
          this.view.txtCMpin5.onTextChange = this.mPinFocus;
          this.view.txtCMpin6.onTextChange = this.mPinFocus;
          
          // For auto focus function call end
          this.view.imgMPin.onTouchStart = this.showMpin;
          this.view.imgMPinC.onTouchStart = this.showCMpin;
          
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
                
  // mPIN Function
  mPinFocus : function(eventObj){
    //alert(eventObj.id);
    if(eventObj.id==="txtMpin1"){
       this.view.txtMpin2.setFocus(true);
    }
    else if(eventObj.id==="txtMpin2"){
      this.view.txtMpin3.setFocus(true);
    }
    else if(eventObj.id==="txtMpin3"){
      this.view.txtMpin4.setFocus(true);
    }
    else if(eventObj.id==="txtMpin4"){
      this.view.txtMpin5.setFocus(true);
    }
    else if(eventObj.id==="txtMpin5"){
      this.view.txtMpin6.setFocus(true);
    }
    else if(eventObj.id==="txtMpin6"){
      this.view.txtCMpin1.setFocus(true);
    }
    else if(eventObj.id==="txtCMpin1"){
      this.view.txtCMpin2.setFocus(true);
    }
    else if(eventObj.id==="txtCMpin2"){
      this.view.txtCMpin3.setFocus(true);
    }
    else if(eventObj.id==="txtCMpin3"){
      this.view.txtCMpin4.setFocus(true);
    }
    else if(eventObj.id==="txtCMpin4"){
      this.view.txtCMpin5.setFocus(true);
    }
    else if(eventObj.id==="txtCMpin5"){
      this.view.txtCMpin6.setFocus(true);
    }
    else if(eventObj.id==="txtCMpin6"){
      this.empty();
    }
  },
  
  empty : function(){

  },
      
  showMpin : function()
  {
    if(this.view.imgMPin.src==="view.png")
    {
      this.view.imgMPin.src="maskview.png";
      this.view.txtMpin1.secureTextEntry = false;
      this.view.txtMpin2.secureTextEntry = false;
      this.view.txtMpin3.secureTextEntry = false;
      this.view.txtMpin4.secureTextEntry = false;
      this.view.txtMpin5.secureTextEntry = false;
      this.view.txtMpin6.secureTextEntry = false;
    }
    else if(this.view.imgMPin.src==="maskview.png")
    {
      this.view.imgMPin.src="view.png";
      this.view.txtMpin1.secureTextEntry = true;
      this.view.txtMpin2.secureTextEntry = true;
      this.view.txtMpin3.secureTextEntry = true;
      this.view.txtMpin4.secureTextEntry = true;
      this.view.txtMpin5.secureTextEntry = true;
      this.view.txtMpin6.secureTextEntry = true; 
    }
  },
      
  showCMpin : function()
  {
    if(this.view.imgMPinC.src==="view.png")
    {
      this.view.imgMPinC.src="maskview.png";
      this.view.txtCMpin1.secureTextEntry = false;
      this.view.txtCMpin2.secureTextEntry = false;
      this.view.txtCMpin3.secureTextEntry = false;
      this.view.txtCMpin4.secureTextEntry = false;
      this.view.txtCMpin5.secureTextEntry = false;
      this.view.txtCMpin6.secureTextEntry = false;
    }
    else if(this.view.imgMPinC.src==="maskview.png")
    {
      this.view.imgMPinC.src="view.png";
      this.view.txtCMpin1.secureTextEntry = true;
      this.view.txtCMpin2.secureTextEntry = true;
      this.view.txtCMpin3.secureTextEntry = true;
      this.view.txtCMpin4.secureTextEntry = true;
      this.view.txtCMpin5.secureTextEntry = true;
      this.view.txtCMpin6.secureTextEntry = true;
    }
  },
   
  clearMpin : function(){    
    this.view.txtMpin1.text = "";
    this.view.txtMpin2.text = "";
    this.view.txtMpin3.text = "";
    this.view.txtMpin4.text = "";
    this.view.txtMpin5.text = "";
    this.view.txtMpin6.text = "";
    this.view.txtCMpin1.text = "";
    this.view.txtCMpin2.text = "";
    this.view.txtCMpin3.text = "";
    this.view.txtCMpin4.text = "";
    this.view.txtCMpin5.text = "";
    this.view.txtCMpin6.text ="";
  },
  
  createMpin : function(){
    
    //alert("Function Called");
    
    if(this.view.txtMpin1.text===null || this.view.txtMpin1.text==="" || this.view.txtMpin2.text===null || this.view.txtMpin2.text==="" || this.view.txtMpin3.text===null || this.view.txtMpin3.text==="" || this.view.txtMpin4.text===null || this.view.txtMpin4.text==="" || this.view.txtMpin5.text===null || this.view.txtMpin5.text==="" || this.view.txtMpin6.text===null || this.view.txtMpin6.text===""){
      //alert("mpin is mandatory");
      this.view.lblErrorMpin.text = "* mPIN is mandatory";
    }
    else if(this.view.txtCMpin1.text===null || this.view.txtCMpin1.text==="" || this.view.txtCMpin2.text===null || this.view.txtCMpin2.text==="" || this.view.txtCMpin3.text===null || this.view.txtCMpin3.text==="" || this.view.txtCMpin4.text===null || this.view.txtCMpin4.text==="" || this.view.txtCMpin5.text===null || this.view.txtCMpin5.text==="" || this.view.txtCMpin6.text===null || this.view.txtCMpin6.text===""){
      //alert(" Confirm mpin is mandatory");
      this.view.lblErrorMpin.text = "";
      this.view.lblErrorConfirmMpin.text = "* Comfirm mPIN is mandatory";
    }
    else
    {      
      this.view.lblErrorMpin.text = "";
      this.view.lblErrorConfirmMpin.text = "";
      // mPIN
      var mpinFirstDigit = this.view.txtMpin1.text;
      var mpinSecondDigit = this.view.txtMpin2.text;
      var mpinThirdDigit = this.view.txtMpin3.text;
      var mpinFourDigit = this.view.txtMpin4.text;
      var mpinFiveDigit = this.view.txtMpin5.text;
      var mpinSixDigit = this.view.txtMpin6.text;

      // Confirm mPIN
      var mpinFirstDigitC = this.view.txtCMpin1.text;
      var mpinSecondDigitC = this.view.txtCMpin2.text;
      var mpinThirdDigitC = this.view.txtCMpin3.text;
      var mpinFourDigitC = this.view.txtCMpin4.text;
      var mpinFiveDigitC = this.view.txtCMpin5.text;
      var mpinSixDigitC = this.view.txtCMpin6.text;

      // Concordinate all the individual numbers
      var mpin = mpinFirstDigit.toString()+mpinSecondDigit.toString()+mpinThirdDigit.toString()+mpinFourDigit.toString()+mpinFiveDigit.toString()+mpinSixDigit.toString();
      var confirmMpin = mpinFirstDigitC.toString()+mpinSecondDigitC.toString()+mpinThirdDigitC.toString()+mpinFourDigitC.toString()+mpinFiveDigitC.toString()+mpinSixDigitC.toString();     
      
      //
      if(confirmMpin!==mpin)
      {
        this.view.lblErrorConfirmMpin.text = "* mPINs should be same";
      }
      else{       
        alert("Success");
        this.clearMpin();
      }
    }
  
  	}
        
	};
});