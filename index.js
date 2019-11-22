// var user = {
//     email: '',
//     projectNum: '',
//     orgName: ''
// }

var ROI = {
    email: '',
    projectNum: '',
    orgName: '',
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
    ROI.email = $('#email').val();
    ROI.projectNum = $('#projectNum').val();
    ROI.orgName = $('#orgName').val();
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
}

//Collecting Time
function time(){
    var hours = [$('#timeQ1').val(), $('#timeQ2').val(), $('#timeQ3').val(), $('#timeQ4').val()];
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.time = hours.reduce((a,b) => parseInt(a)+parseInt(b),0);
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
    //Calculation - summing all the hours
    
}
//Collecting Money
function money(){
    var dollars = [$('#moneyQ1').val(), $('#moneyQ2').val(), $('#moneyQ3').val()];
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.dollars = dollars.reduce((a,b) => parseInt(a)+parseInt(b),0); 
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
    
}

// CDR
function costDollarRaised(){
    var cdr =( $('#CDRexpenses').val()/$('#CDRrevenue').val());
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.cdr = cdr;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
}

//Clients Served
function clientsServed(){
    //estimated service cost formula
    var estServiceCost = ($('#clientsQ1').val()/$('#clientsQ2').val());
    ROI = update(sessionStorage.getItem('inputs'));
    ROI.clients = estServiceCost;
    sessionStorage.setItem("inputs", JSON.stringify(ROI));
}


// update ROI
function update(ROI){
    return JSON.parse(ROI);
}


//Displaying Results
function display(){
    ROI = JSON.parse(sessionStorage.getItem('inputs'))
    $('#dollarsSaved').html('$' + this.ROI.dollars);
   
    $('#hoursSaved').html(this.ROI.time);

    $('#costPerDollarRaised').html(this.ROI.cdr);

    $('#clientsServed').html(this.ROI.clients);
}


//Slider Functions
var ratings = document.querySelector('#ratings');
  ratings.addEventListener('value-change', function() {
    document.querySelector('#ratingsLabel').textContent = ratings.value;
  });

  var grade = document.querySelector('#grade');
  grade.addEventListener('value-change', function() {
    var label = (grade.value < grade.secondaryProgress) ? "Fail" : "Pass" ;
    document.querySelector('#gradeLabel').textContent = grade.value + " (" + label + ")";
  });

