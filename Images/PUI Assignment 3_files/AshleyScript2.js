var count = 0;
var chkCount = -1;
var i=0;
var k=-1;
var j=-1;

//Addind new to-do-list item
var addList = function(){
  k++;
  j++;
  // Receiving user input for the texts of new to-do-list item
  var userInput = prompt("Please name your new to-do-list!");
  var listTxt = document.createTextNode(userInput);
  
  // Creating check box and set up id
  var chkInput = document.createElement("input");
  chkInput.setAttribute("type", "checkbox");
  chkInput.setAttribute("id", "checkBoxId"+k);

  // Creating button and 'delete' text on the button
  var btn = document.createElement("BUTTON");
  var txt = document.createTextNode("Delete");
  // Put 'delete' text onto the button
  btn.appendChild(txt);
  btn.setAttribute("id",count);

  // Creating profile ui image
  var myImg = document.createElement("img");
  myImg.setAttribute("src", "Images/profileUi2.png");
  myImg.setAttribute("alt", "na");
  myImg.setAttribute("height", "15%");
  myImg.setAttribute("width", "15%");
  myImg.setAttribute("id", "myImgId"+j);
  //document.body.appendChild(myImg);

  // creating p_item under div_txtContainer
  var txtID = document.getElementById("txtContainer");
  var item = document.createElement("P");

  // Set up item's id with unique count per each line
  item.setAttribute("id", "itemId"+count);
  count++;
  chkCount++;

  // Put item(P) onto textContainer(Div)
  txtID.appendChild(item);
  // Put check box, text of to-do-list, button onto the item(P)
  item.appendChild(chkInput);
  item.appendChild(listTxt);
  item.appendChild(btn);
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

   // When clicking the profile img, ask the person who wants to be assigned and append to the item list.
   $("#myImgId"+j).click(function () {
               var assignInput = prompt("Whom to assign to?");
               var assignTxt = document.createTextNode(assignInput); 

               $("#itemId"+btn.id).append(assignTxt);   
   }); 
}



// Delete the item list. It is recognized with unique id that consists of itemId + buttonId
var deleteImage = function(buttonId) {
    
     $( "#itemId" + buttonId).remove();

}