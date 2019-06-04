var Applybool=true;
var currentform= kony.application.getCurrentForm();
define(function() {
	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
     Home:function(){
    this.HamurgerOut(); 
        Applybool=false;
        kony.timer.cancel("mytimer12");
    new kony.mvc.Navigation("frmDashBoard").navigate(Applybool);
    //this.HamurgerOut();
  },
  Apply:function(){  
    if(Applybool===true){
      this.view.Debit.isVisible=true;
      this.view.Credit.isVisible=true;
      this.view.Loan.isVisible=true;
      this.view.BlockCard.isVisible=true;
      this.view.Apply.srcarrow="up.png";
      Applybool=false;
    }
    else if(Applybool===false){
      this.view.Debit.isVisible=false;
      this.view.Credit.isVisible=false;
      this.view.Loan.isVisible=false;
      this.view.BlockCard.isVisible=false;
      this.view.Apply.srcarrow="down.png";
      Applybool=true;
    }
 },
  Credit:function(){
    this.HamurgerOut();   
  },
  Debit:function(){
    this.HamurgerOut();
  },
  Loan:function(){
    this.HamurgerOut();
  },
  RecentTransaction:function(){
    this.HamurgerOut();
  },
  AddPayee:function(){
    this.HamurgerOut();
  },
  ContactUs:function(){
    this.HamurgerOut();
  },
  Help:function(){
    this.HamurgerOut();
     new kony.mvc.Navigation("frmHelpandContact").navigate();
  },
  Settings:function(){  
    this.HamurgerOut();
     new kony.mvc.Navigation("frmAccountsSettings").navigate();
      
//        currentform.flxDetails.isVisible=false;     
  },
  Logout:function(){
    this.HamurgerOut();
  },     
      HamurgerOut:function(eventobject, x, y) {
         kony.timer.cancel("mytimer12");
    var self = this;
    function TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback() {}
        if(kony.application.getCurrentForm().id==="frmDashBoard"){
          var dashboard= kony.application.getCurrentForm();
          kony.timer.cancel("mytimer12");
    dashboard.flxDashBoard.animate(
      kony.ui.createAnimation({
        "100": {
          "top": "0%",
          "left": "0%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
          "height": "100%"
        }
      }), {
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.4
      }, {
        "animationEnd": TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback
      });
        }
        else if(kony.application.getCurrentForm().id==="frmAccountsSettings"){
          var account= kony.application.getCurrentForm();
          kony.timer.cancel("mytimer12");
        account.flxDetailsSettings.animate(
      kony.ui.createAnimation({
        "100": {
          "top": "0%",
          "left": "0%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
          "height": "100%"
        }
      }), {
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.4
      }, {
        "animationEnd": TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback
      });
        }
        else if(kony.application.getCurrentForm().id==="frmHelpandContact"){
          var help= kony.application.getCurrentForm();
          kony.timer.cancel("mytimer12");
        help.flxMainHelp.animate(
      kony.ui.createAnimation({
        "100": {
          "top": "0%",
          "left": "0%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          },
          "height": "100%"
        }
      }), {
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.4
      }, {
        "animationEnd": TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback
      });
        }
    ApplyboolHamburger=true;
         Applybool=false;
        this.Apply();
    //this.view.flxBlack.isVisible=false;
  }
	};
});