var visiblevalue;
define({ 
  onNavigate:function(content){
    if(content === 1){
      this.view.flxSameBank.isVisible = true;
      this.view.text7.isVisible = false;
      this.view.text13.isVisible = false;
      this.view.flxDiffrentBank.isVisible = false;
      this.view.flxMobile.isVisible = false;
    }else if(content  === 2){
      this.view.flxSameBank.isVisible = false;
      this.view.flxDiffrentBank.isVisible = true;
      this.view.text3.isVisible = false;
      this.view.textRemark.isVisible = false;
      this.view.flxMobile.isVisible = false;
    }else{
      this.view.flxSameBank.isVisible = false;
      this.view.flxDiffrentBank.isVisible = false;
      this.view.flxMobile.isVisible = true;
    }
  }
  //Type your controller code here 

});