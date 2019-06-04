var boolHamburger=true;
var head=false;
define({ 
  onNavigate(context){
    head=context;
    if(head===true){
    this.view.Head.text="Settings";
      this.view.flxDetails.isVisible=false;
    }
    else{
      this.view.Head.text="AccountDetails";
       this.view.flxDetails.isVisible=true;
    }
  },
HamburgerIn:function (eventobject, x, y) {
    var self = this;
    function TRANSFORM_ACTION____c6159badc89b440cadccf6631cce6bc0_Callback() {}
    if(boolHamburger===true){    
      self.view.flxDetailsSettings.animate(
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
    }
    else if(boolHamburger===false){     
      this.HamurgerOut();     
    }
  },
  HamurgerOut:function(eventobject, x, y) {        
    var self = this;
    function TRANSFORM_ACTION____ec6685af401341b58cde7ec99ee11a17_Callback() {}
    self.view.flxDetailsSettings.animate(
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
  }

 });