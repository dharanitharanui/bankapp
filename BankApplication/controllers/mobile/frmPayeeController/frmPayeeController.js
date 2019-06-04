var headtitle;
define({ 
onNavigate:function(content){
  try{
    headtitle = content;
    if(headtitle === 1){
      this.view.Head.text = "DPS Bank Payee";
    }else if(headtitle === 2){
      this.view.Head.text = "Other Bank Payee";
    }else if(headtitle === 3){
      this.view.Head.text = "Mobile Payee";
    }else if(headtitle === 4){
      this.view.Head.text = "Favourite Payee";
    }
  }catch(error){
    alert("Error"+error);
  }
}
 //Type your controller code here 

 });