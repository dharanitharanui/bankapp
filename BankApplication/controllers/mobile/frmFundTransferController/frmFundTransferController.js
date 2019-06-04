define({ 

  //Type your controller code here 
  recent:function(){
    try{
      this.view.tab.tabsrc = "bank_recent_blue.png";
      this.view.tab.tabskin = "sknLblFntSize120Blue";
      this.view.tab.tabvisible = true;
      this.view.tab1.tabsrc = "bank_upcoming_grey.png";
      this.view.tab1.tabskin = "sknLblFntSize120Grey";
      this.view.tab1.tabvisible = false;
      this.view.tab2.tabsrc = "bank_all_payee_grey.png";
      this.view.tab2.tabskin = "sknLblFntSize120Grey";
      this.view.tab2.tabvisible = false;
    }catch(error){
      alert("Recent error"+error);
    }
  },
  upcoming:function(){
    try{
      this.view.tab.tabsrc = "bank_recent_grey.png";
      this.view.tab.tabskin = "sknLblFntSize120Grey";
      this.view.tab.tabvisible = false;
      this.view.tab1.tabsrc = "bank_upcoming_blue.png";
      this.view.tab1.tabskin = "sknLblFntSize120Blue";
      this.view.tab1.tabvisible = true;
      this.view.tab2.tabsrc = "bank_all_payee_grey.png";
      this.view.tab2.tabskin = "sknLblFntSize120Grey";
      this.view.tab2.tabvisible = false;
    }catch(error){
      alert("upcoming error"+error);
    }
  },
  allpayee:function(){
    try{
      this.view.tab.tabsrc = "bank_recent_grey.png";
      this.view.tab.tabskin = "sknLblFntSize120Grey";
      this.view.tab.tabvisible = false;
      this.view.tab1.tabsrc = "bank_upcoming_grey.png";
      this.view.tab1.tabskin = "sknLblFntSize120Grey";
      this.view.tab1.tabvisible = false;
      this.view.tab2.tabsrc = "bank_allpayyee_blue.png";
      this.view.tab2.tabskin = "sknLblFntSize120Blue";
      this.view.tab2.tabvisible = true;
    }catch(error){
      alert("allpayee error"+error);
    }
  },
  buttom:function(eventobj){
    try{
      this.view.text.setFocus(false);
      if(eventobj.text === "Add Payee"){
        this.view.buttonn4.onclick = this.diffrentbank;
        this.view.buttonn3.onclick = this.samebank;
        this.view.buttonn5.onclick = this.mobileno;
        this.view.buttonn2.text = "Add Payee";
      }else if(eventobj.text === "Delete Payee"){
        this.view.buttonn4.onclick = this.diffrentbankdelete;
        this.view.buttonn3.onclick = this.samebankdelete;
        this.view.buttonn5.onclick = this.mobilenodelete;
        this.view.buttonn2.text = "Delete Payee";
      }
      this.view.flxBack.isVisible = true;
    }catch(error){
      alert("buttom"+error);
    }
  },
  popupclose:function(){
    try{
      this.view.flxBack.isVisible = false;
      this.view.buttonn2.text = "";
    }catch(error){
      alert("Error"+error);
    }
  },
  diffrentbank:function(){
    try{
      var diffrent = 2;
      new kony.mvc.Navigation("frmAddAccountDetails").navigate(diffrent);
      this.popupclose();
    }catch(error){
      alert("diffrentbank"+error);
    }
  },
  samebank:function(){
    try{
      var same = 1;
      new kony.mvc.Navigation("frmAddAccountDetails").navigate(same);
      this.popupclose();
    }catch(error){
      alert("samebank"+error);
    }
  },
  mobileno:function(){
    try{
      var mobile = 3;
      new kony.mvc.Navigation("frmAddAccountDetails").navigate(mobile);
      this.popupclose();
    }catch(error){
      alert("samebank"+error);
    }
  },
  diffrentbankdelete:function(){
    try{
      var diffrent = 2;
      new kony.mvc.Navigation("frmDeletePayee").navigate(diffrent);
      this.popupclose();
    }catch(error){
      alert("Error"+error);
    }
  },
  samebankdelete:function(){
    try{
      var same = 1;
      new kony.mvc.Navigation("frmDeletePayee").navigate(same);
      this.popupclose();
    }catch(error){
      alert("Error"+error);
    }
  },
  mobilenodelete:function(){
    try{
      var mobile = 3;
      new kony.mvc.Navigation("frmDeletePayee").navigate(mobile);
      this.popupclose();
    }catch(error){
      alert("Error"+error);
    }
  },
  paysamebank:function(){
    try{
      var paysame=1;
      new kony.mvc.Navigation("frmPayee").navigate(paysame);
    }catch(error){
      alert("paysamebank"+error);
    }
  },
  paydiffbank:function(){
    try{
      var diff=2;
      new kony.mvc.Navigation("frmPayee").navigate(diff);
    }catch(error){
      alert("paysamebank"+error);
    }
  },
  paymobilebank:function(){
    try{
      var mobile=3;
      new kony.mvc.Navigation("frmPayee").navigate(mobile);
    }catch(error){
      alert("paysamebank"+error);
    }
  },
  payfavbank:function(){
    try{
      var fav=4;
      new kony.mvc.Navigation("frmPayee").navigate(fav);
    }catch(error){
      alert("paysamebank"+error);
    }
  }
});