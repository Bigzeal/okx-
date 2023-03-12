
var display = false;

function displaychild() {
  document.getElementsByClassName('buycryptooptions')[0].style.display = 'block';
display = true
}

function hidechild() {
    document.getElementsByClassName('buycryptooptions')[0].style.display = 'none'
display = false

}

function displaychild1() {
  document.getElementsByClassName('buycryptooptions1')[0].style.display = 'block';
}

function hidechild1() {
  document.getElementsByClassName('buycryptooptions1')[0].style.display = 'none'
}

function displaychild11() {
  document.getElementsByClassName('buycryptooptions11')[0].style.display = 'block';
}

function hidechild11() {
  document.getElementsByClassName('buycryptooptions11')[0].style.display = 'none'
}

function displaychild111() {
  document.getElementsByClassName('buycryptooptions111')[0].style.display = 'block';
}

function hidechild111() {
  document.getElementsByClassName('buycryptooptions111')[0].style.display = 'none'
}


function displaychild1111() {
  document.getElementsByClassName('buycryptooptions1111')[0].style.display = 'block';
}

function hidechild1111() {
  document.getElementsByClassName('buycryptooptions1111')[0].style.display = 'none'
}

function displaychild6() {
  document.getElementsByClassName('buycryptooptions6')[0].style.display = 'block';
}

function hidechild6() {
  document.getElementsByClassName('buycryptooptions6')[0].style.display = 'none'
}

function displaychild5() {
  document.getElementsByClassName('buycryptooptions5')[0].style.display = 'block';
}

function hidechild5() {
  document.getElementsByClassName('buycryptooptions5')[0].style.display = 'none'
}


function displayside() {
  document.getElementsByClassName('sidebar')[0].style.display = 'block';
}

function hideside() {
  document.getElementsByClassName('sidebar')[0].style.display = 'none'
}


function displaychannel() {
  document.getElementsByClassName('selectitems')[0].style.display = 'block';
}

function hidechannel() {
  document.getElementsByClassName('selectitems')[0].style.display = 'none'
}


function displaylanguagecarrier() {
  document.getElementsByClassName('newlistitems')[0].style.display = 'block';
}

function hidelanguagecarrier() {
  document.getElementsByClassName('newlistitems')[0].style.display = 'none'
}

var name = document.getElementById('channelinput')


function checkchannel() {
  var name = document.getElementById('channelinput')
var newinput = parseInt(name.value)
if (newinput === 08148229998) {
  document.getElementsByClassName('confirmationbox')[0].style.display = 'block';
  document.getElementById('phonenumber').innerText = '08148229998';
} else {
alert('fuck you')
}
}

function hideconfirmationbox() {
  document.getElementsByClassName('confirmationbox')[0].style.display = 'none';


}
