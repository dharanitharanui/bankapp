define({
  bank:function(){
    try{
      var bankname = [];
      var data = [
        "State Bank of India (SBI)",
        "Bank of Baroda (BOB)",
        "IDBI Bank",
        "Punjab National Bank (PNB)",
        "Central Bank of India (CBI)",
        "Canara Bank",
        "Bank of India (BOI)",
        "Indian Bank",
        "Union Bank of India",
        "Vijaya Bank",
        "HDFC Bank",
        "ICICI Bank",
        "Axis Bank",
        "Indian Overseas Bank",
        "Karur Vysya Bank"
      ];
      for(var i=0;i<data.length;i++){
      bankname[i]= {
          "lblBankName":data[i]
        };
      }
      this.view.segData.setData(bankname);
    }catch(error){
      alert("Error"+error);
    }
  }
});