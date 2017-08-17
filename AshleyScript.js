// Creating Plus ui image - Start
  var plusImg = document.createElement("img");
    var btnParty = document.getElementById("btnCreatePartyID");
    var spanParty = document.getElementById("spanPartyID");

      var txtParty = document.createTextNode("Create a New Party!");

  plusImg.setAttribute("src", "Images/plusUI.png");
  plusImg.setAttribute("alt", "na");
  plusImg.setAttribute("height", "19%");
  plusImg.setAttribute("width", "19%");
  plusImg.setAttribute("id", "plusId");
  btnParty.appendChild(spanParty);
  spanParty.appendChild(plusImg);
  spanParty.appendChild(txtParty);

// Creating Plus ui image - End

// Side navBar Toggle 01 - Start
jQuery(function($){
    $('.navbar-toggle').click(function(){
    $('.navbar-collapse').toggleClass('right');
    $('.navbar-toggle').toggleClass('indexcity');
    });
});


    $("#hamPic").click(function(){
        var div = $("#sideScreen2");
        div.animate({width: '500px', opacity: '1'}, "slow");

    });

// Side navBar Toggle 01 - End

// Side navBar Toggle 02 - Start

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}

function closeNavTask() {
    document.getElementById("mySidenavTask").style.width = "0";

}
  
// Side navBar Toggle 02 - End


// Create a New Party! - Start
var count = 0;
var chkCount = -1;
var i=0;
var k=-1;
var j=-1;
var s=-1;
var h=-1;


$("#hamPic").click(function() {
    var openNavFullScreen = function openNav() {
      document.getElementById("mySidenav").style.width = "300px"; 
      document.getElementById("mySidenav").style.right = "0";
    }       
    openNavFullScreen();  
});

//Addind new to-do-list item
var addList = function(){
  k++;
  j++;
  s++;
  h++;

  // Receiving user input for the texts of new to-do-list item
  var userInput = prompt("Please create your new party!");
  var txtA = document.createElement("a");
  var txtSpan = document.createElement("span");
  var listTxt = document.createTextNode(userInput);
 
  // Add a non-breaking white space
  var fooSpace = document.createTextNode("\u00A0");

  // Creating span and append listTxt on it.
  txtSpan.setAttribute("id","txtSpanId"+s);
  txtSpan.setAttribute("class","thick")
  txtSpan.appendChild(fooSpace);  
  txtSpan.appendChild(listTxt);
  txtSpan.appendChild(fooSpace);
  // $("#txtSpanId").append(listTxt);

  // Creating check box and set up id
  var chkInput = document.createElement("input");
  chkInput.setAttribute("type", "checkbox");
  chkInput.setAttribute("id", "checkBoxId"+k);


  // Creating button and 'delete' text on the button
  var btn = document.createElement("BUTTON");
  var imgPlus = document.createElement("img");
  var txt = document.createTextNode("Delete");

  // Put 'delete' text onto the button
  btn.appendChild(txt);
  btn.setAttribute("class", "button btnDelete")
  btn.setAttribute("id",count); 


  // Creating profile ui image
  var myImg = document.createElement("img");
  myImg.setAttribute("src", "Images/profileUi2.png");
  myImg.setAttribute("alt", "na");
  myImg.setAttribute("hspace", "5")
  myImg.setAttribute("height", "10%");
  myImg.setAttribute("width", "10%");
  myImg.setAttribute("id", "myImgId"+j);
  //document.body.appendChild(myImg);

  // Creating party hat image
  var hatImg = document.createElement("img");
  hatImg.setAttribute("src", "Images/hatUI.png");
  hatImg.setAttribute("alt", "na");
  hatImg.setAttribute("hspace", "9")
  hatImg.setAttribute("height", "5%");
  hatImg.setAttribute("width", "5%");
  hatImg.setAttribute("id", "myHatId"+h);    

  // creating p_item under div_txtContainer
  var txtID = document.getElementById("txtContainer");
  var item = document.createElement("P");

  // Set up item's id with unique count per each line
  item.setAttribute("id", "itemId"+count);
  item.setAttribute("class", "indent")
  count++;
  chkCount++;

  // Put item(P) onto textContainer(Div)
  var fooBR = document.createElement("br");
  txtID.appendChild(item);
  // txtID.appendChild(fooBR);  
  // Put check box, text of to-do-list, button onto the item(P)
  item.appendChild(fooSpace);
  item.appendChild(fooSpace);
  item.appendChild(chkInput);
  item.appendChild(fooSpace);
  item.appendChild(hatImg);
  item.appendChild(fooSpace);
  item.appendChild(txtSpan);
  item.appendChild(fooSpace);
  // item.appendChild(listTxt);
  item.appendChild(btn);
  item.appendChild(fooSpace);
  item.appendChild(myImg);

  // When button clicked, execute the function, deleteImage()

  btn.addEventListener('click',() => {
    console.log("here");
    deleteImage(btn.id);
  });

  console.log("heyhey"+i);  
  console.log("hey"+k);

  // When check box's status changed, then execute the inside of function
  // When check box is checked, then cross the line of the text, if unchecked, back to the original
  $("#checkBoxId"+k).change(function () {
            chkCount=k;           
            console.log("Yah"+k);
            if(this.checked){
               $( "#itemId" + btn.id).css({"background-color": "#A9A9A9", "text-decoration": "line-through"}); 
               console.log("if"+i);
            } else{
               $( "#itemId" + btn.id).css({"background-color": "#CFCEED", "text-decoration": "none"}); 
               console.log("else"+btn.id);
            }

  });

    console.log("End"+k);

// When clicking the person UI, it creates assigned person from user's input.
   var g=-1;

$("#myImgId"+j).click(function () {
   	           g++;

               var assignInput = prompt("Whom to assign to?");
               var spanAssign = document.createElement("span");
               var assignTxt = document.createTextNode(assignInput);
               var fooSpace2 = document.createTextNode("\u00A0"); 
               var assignName = [];

               spanAssign.setAttribute("id", "spanAssignId" + g);

               $("#itemId"+btn.id).append(spanAssign); 
               spanAssign.appendChild(assignTxt);
               spanAssign.appendChild(fooSpace2);   
           

               $("#spanAssignId"+g).click(function () {
                   console.log("hue");
                   $("#spanAssignId"+g).remove();
                   // deleteAssign(spanAssign.id + tar);
               });

});


$("#hamPic").click(function() {
    var openNavFullScreen = function openNav() {
      document.getElementById("mySidenav").style.width = "300px"; 
      document.getElementById("mySidenav").style.right = "0";
    }       
    openNavFullScreen();  
});

  // When each text of the party list, it executes below.
  // $("this").listTxt.click(function(){


  	$("#txtSpanId"+s).click(function() {  

   // When entire row of the list, it executes below.
       var openNavFullScreen = function openNav() {
            document.getElementById("mySidenavTask").style.width = "100%"; 
            document.getElementById("mySidenavTask").style.left = "0";
       }
       var closeNavFullScreen = function closeNavTask() {
            document.getElementById("mySidenavTask").style.width = "0"; 

       }


       openNavFullScreen(); 
       closeNav(); 

       function openNav() {
       document.getElementById("mySidenav").style.right = "0";       	
       }
       function closeNav() {
       document.getElementById("mySidenav").style.width = "0";       	
       }
       function closeNavTask() {
       document.getElementById("mySidenavTask").style.width = "0";       	
       }

    });

}

// Delete the item list. It is recognized with unique id that consists of itemId + buttonId
var deleteImage = function(buttonId) {
    
     $( "#itemId" + buttonId).remove();

}

// Create a New Party! - End