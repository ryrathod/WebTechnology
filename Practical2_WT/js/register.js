function button1Function() {
    var x = document.getElementById("h");
    var y = document.getElementById("r");
    var z = document.getElementById("s");
    if(x.style.display === "none") 
    {
        x.style.display = "block"; 
    }
        y.style.display = "none";
        z.style.display = "none";
}

function button2Function() {
    var x = document.getElementById("h");
    var y = document.getElementById("r");
    var z = document.getElementById("s");
    if(y.style.display === "none") 
    {
        y.style.display = "block"; 
    }
        x.style.display = "none";
        z.style.display = "none";
}

function button3Function() {
    var x = document.getElementById("h");
    var y = document.getElementById("r");
    var z = document.getElementById("s");
    if(z.style.display === "none") 
    {
        z.style.display = "block"; 
    }
        x.style.display = "none";
        y.style.display = "none";
    display_details();
}

function formValidation()
{
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucharacter = document.registration.hname;
var uevent1 = document.registration.event1;
var uevent2 = document.registration.event2;
var uevent3 = document.registration.event3;
var uevent4 = document.registration.event4;
var uevent5 = document.registration.event5;
var uemail = document.registration.email;
var ugender = document.registration.gender;

if(allLetter(uname))
{
if(alphanumeric(uadd))
{
if(validgender(ugender))
{
if(ValidateEmail(uemail))
{
if(passid_validation(passid,7,20))
{ 
if(characterselect(ucharacter))
{
if(eventselect(uevent1,uevent2,uevent3,uevent4,uevent5))
{
} 
}
} 
}
}
}
}
return false;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Name must have alphabet characters only');
uname.focus();
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

function validgender(ugender)
{
if(ugender.value == "Default")
{
alert('Select your Gender from the list');
ugender.focus();
return false;
}
else
{
return true;
}
}

function characterselect(ucharacter)
{
if(ucharacter.value == "Default")
{
alert('Select your Halloween Character from the list');
ucharacter.focus();
return false;
}
else
{
return true;
}
}

function eventselect(uevent1,uevent2,uevent3,uevent4,uevent5)
{
    x=0;

if(uevent1.checked || uevent2.checked || uevent3.checked || uevent4.checked || uevent5.checked)
{
    x++;
}
if (x==0) {
alert('Select atleast one Event');
uevent1.focus();
return false;
}
else
{
alert('Form Successfully Submitted');
add_details();
button3Function();
display_details();
return true;
}
}

var i=0
var arrayname = Array();
var arrayaddr = Array();
var arrayemail = Array();
var arraycharacter = Array();
var arraygender = Array();

function add_details() {
    arrayname[i] = document.getElementById("name").value;
    arrayaddr[i] = document.getElementById("addr").value;
    arrayemail[i] = document.getElementById("email").value;
    arraycharacter[i] = document.getElementById("hname").value;
    arraygender[i] = document.getElementById("gender").value;
    i++;
}

function display_details() {
    var e = "<hr/>";   
    if (arrayname.length === 0)
    {
        e += "No one has registered yet.";
    }
    else {
   for (var y=0; y<arrayname.length; y++)
   {
     e +=  y+1 + ". Name: " + arrayname[y] + "<br/>" + "   Gender: " + arraygender[y] + "<br/>" + "   Address: " + arrayaddr[y] + "<br/>" + "   Halloween Character: " + arraycharacter[y] + "<br/>" + "    Email: " + arrayemail[y] +  "<br/>" + "<br/>"; 
    }
}
   document.getElementById("listreg").innerHTML = e;
   document.getElementById("name").value = "";
   document.getElementById("addr").value = "";
}