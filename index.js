 const display = document.getElementById("display"); //use the const attribute and the id which is display so it doesnt change and then getElementById so u call it and the name //
// so in the html area u get all 
 //thenn create 3 functions//

//use the first function appendtodisplay and its only parameter which is the text are or input//
 function appendToDisplay(input){ //dont forget its just a function because of the () and the element inside "input " just another name
  //so a function with a literal input like a text area and u can name any name u want or like "area" instead of input just ex
display.value += input; //the value it shows in the screen like in the input and the += it adds the next number next to the first so like += "3" u click + it shows "3+"  //
 }

 function clearDisplay(){
display.value = ""; //use the id display and value to show onn screen then just use the undefined one so just let it empty//
 }

  function calculate(){
    try{
      // and the display value inside a function is already a built one whichh make sense like display the value on screen = and just do it in a form that makes sense like in calculate u should 
      //display value += eval(display.value )
        display.value = eval(display.value); //eval is like a built in function and it stands for evaluate  and on the (display.value) to display the valuate the value on our display //
    }
   catch (error){
    display.value = "Error"
   }
    //surround the code with a try block so it can protect it from errors so use try and then say catch (error) and then display.value so it can display on screen "error" so uour basicallly comentinng//
  }