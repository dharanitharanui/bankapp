var boolHamburger=true;
var  boolApply=true;
var sidemenu=true;
var i=0;
define({ 
  onNavigate(context){
    sidemenu=context;
  },
 Apply:function(){
//   if(boolApply===false){
//      this.view.SideMenu.flxDashBoardCredit.isVisible=false;
//       this.view.SideMenu.flxDashBoardDebit.isVisible=false;
//       this.view.SideMenu.flxDashBoardLoan.isVisible=false;
//        this.view.SideMenu.flxDashBoardBlockCard.isVisible=false;
//       this.view.SideMenu.srcarrow="down.png";
//     boolApply=true;
// }
//    else  if(boolApply===true){
//       this.view.SideMenu.CreditVisible=true;
//       this.view.SideMenu.DebitVisible=true;
//       this.view.SideMenu.LoanVisible=true;
//        this.view.SideMenu.BlockCardVisible=true;
//       this.view.SideMenu.srcarrow="up.png";
//      boolApply=true;
//    }
  },
  HamburgerIn:function (eventobject, x, y) {
    var self = this;
    function TRANSFORM_ACTION____c6159badc89b440cadccf6631cce6bc0_Callback() {}
    if(boolHamburger===true){       
      self.view.flxDashBoard.animate(
        kony.ui.createAnimation({
          "100": {
            "top": "0%",
            "left": "70%",
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
          "animationEnd": TRANSFORM_ACTION____c6159badc89b440cadccf6631cce6bc0_Callback
        });
      boolHamburger=false;
      kony.timer.cancel("mytimer12");
      this.view.flxBlack.isVisible=true;
       this.view.flxImpsPopup.isVisible=false;
     
    }
    else if(boolHamburger===false){     
          this.HamurgerOut();          
    }
  },
  HamurgerOut:function(eventobject, x, y) {        
    var self = this;
    function TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback() {}
    self.view.flxDashBoard.animate(
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
    boolHamburger=true;
     this.Timer();
    this.view.flxBlack.isVisible=false;
    boolApply=true;
    sidemenu=false;
    this.Apply();
  },
  Empty:function(){
    this.HamurgerOut(); 
     //new kony.mvc.Navigation("frmDashBoard").navigate();
  },
  ImpsPopUpOn:function(){
     kony.timer.cancel("mytimer12");
    this.view.flxImpsPopup.isVisible=true;  
  },
  ImpsPopUpoff:function(){
    this.view.flxImpsPopup.isVisible=false;
    this.Timer();
  },
  SegmentImages:function(){    
    i=i+1;      
    if(i<5){
           this.view.SegmentAds.selectedRowIndex=[0,i];
          }
    else{
      i=0;
       this.view.SegmentAds.selectedRowIndex=[0,i];
    }

  },
  Timer:function(){ 
      kony.timer.schedule("mytimer12",this.SegmentImages, 5, true);
     // this.Apply();
  },
  Accounts:function(){
    new kony.mvc.Navigation("frmAccountsSettings").navigate();
    kony.application.getCurrentForm().flxDetails.isVisible=true;
  }
});
