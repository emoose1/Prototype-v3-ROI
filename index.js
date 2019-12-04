// var user = {
//     email: '',
//     projectNum: '',
//     orgName: ''
// }

var ROI = {
    orgEmail: '',
    TBcontact: '',
    projectNum: '',
    orgName: '',
    phone: '',
    time: 0,
    dollars: 0,
    cdr: 0,
    clients: 0
}
//Under Construction
function windowAlert() {
    alert("Calculator currently under construction, please check back soon!");
  }

//Collecting User Info
function userInfo(){
    ROI.orgEmail = $('#email').val();
    ROI.TBcontact = $('#tbContactName').val();
    ROI.projectNum = $('#projectNum').val();
    ROI.phone = $('#telNum').val();
    ROI.orgName = $('#orgName').val();
    sessionStorage.setItem("inputs", JSON.stringify(ROI));

    //delete this line after testing
    console.log(sessionStorage.getItem("inputs"));

}

//Collecting Time
function time(){
    var hours = [$('#hQ1').val(), $('#hQ2').val(), $('#hQ3').val(), $('#hQ4').val()];
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.time = hours.reduce((a,b) => parseInt(a)+parseInt(b),0);
    // annual value
    ROI.time *= 12;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
    //Calculation - summing all the hours

    //delete this line after testing
    console.log(sessionStorage.getItem("inputs"));

}
//Collecting Money
function money(){
    var moneySaved = [$('#dollarsQ1').val(), $('#dollarsQ2').val(), $('#dollarsQ3').val()];

    ROI = update(sessionStorage.getItem('inputs'));
    ROI.dollars = moneySaved.reduce((a,b) => parseInt(a)+parseInt(b),0); 
    // annual value
    ROI.dollars *=12;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));

    //delete this line after testing
    console.log(sessionStorage.getItem("inputs"));
}

// CDR
function costDollarRaised(){
    var cdr =( $('#CDRexpenses').val()/$('#CDRrevenue').val());
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.cdr = cdr;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));

    //delete this line after testing
    console.log(sessionStorage.getItem("inputs"));

}

//Clients Served
function clientsServed(){
    //estimated service cost formula
    var estServiceCost = ($('#clientsQ1').val()/$('#clientsQ2').val());
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.clients = estServiceCost;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));

    //delete this line after testing
    console.log(sessionStorage.getItem("inputs"));

}


// update ROI
function update(ROI){
    return JSON.parse(ROI);
}


//Displaying Results
function display(){
    ROI = JSON.parse(sessionStorage.getItem('inputs'))
    $('#dollarsSaved').html('$' + this.ROI.dollars  + "+");
   
    $('#hoursSaved').html(this.ROI.time  + "+");

    $('#costPerDollarRaised').html(this.ROI.cdr  + "+");

    $('#clientsServed').html(parseInt(this.ROI.clients) + "+");
}


//For getting the next range sibling 
function getNextRangeSibling(n)
{
    x = n.nextSibling;
    while (x.nodeType!=1) {
      x = x.nextSibling;
      }
      return x;
}


//For displaying the value of each range slider
//rewrote previous slider range functions to be universal regardless of page
function showSliderRanges(self)
{
  temp = getNextRangeSibling(self).innerHTML = self.value;
  sliderMaxValue = document.querySelector('.slider').getAttribute("max");
  sliderMinValue = document.querySelector('.slider').getAttribute("min");
  sliderStepValue = document.querySelector('.slider').getAttribute("step");

  
  console.log(sliderMaxValue - sliderStepValue);


  if (temp==sliderMaxValue){
      getNextRangeSibling(self).innerHTML=self.value + "+";
  }
  else{
  getNextRangeSibling(self).innerHTML=self.value + " - " + (parseInt(temp) + parseInt(sliderStepValue));
  }

}
