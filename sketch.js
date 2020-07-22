
var input,input1,input2,input3,button,a1,l,d,a2,a3,a4,a5,a6,a7,a8,a9,a10,img;
var button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11;
function preload(){
  img = loadImage("papa.jpeg");
  }

function setup(){
  var canvas = createCanvas(displayWidth-20,displayHeight-30);

  fill("red");
  textSize(20);
 text("Which Color Do Your Father Like ?",displayWidth/2-485,displayHeight/2-285);

 input9 = createInput("Answer");
 input9.position(displayWidth/2-485,displayHeight/2-185);
 button9 = createButton("Next");
 button9.style('background-color', "yellow");
 button9.position(displayWidth/2-485,displayHeight/2-135);
 input8 = createInput("Answer");
 input8.position(displayWidth/2-485,displayHeight/2-185);
 button8 = createButton("Next");
 button8.style('background-color', "yellow");
 button8.position(displayWidth/2-485,displayHeight/2-135);
 input7 = createInput("Answer");
 input7.position(displayWidth/2-485,displayHeight/2-185);
 button7 = createButton("Next");
 button7.style('background-color', "yellow");
 button7.position(displayWidth/2-485,displayHeight/2-135);
 input6 = createInput("Answer");
 input6.position(displayWidth/2-485,displayHeight/2-185);
 button6 = createButton("Next");
 button6.style('background-color', "yellow");
 button6.position(displayWidth/2-485,displayHeight/2-135);
 input5 = createInput("Answer");
 input5.position(displayWidth/2-485,displayHeight/2-185);
 button5 = createButton("Next");
 button5.style('background-color', "yellow");
 button5.position(displayWidth/2-485,displayHeight/2-135);
 input4 = createInput("Answer");
 input4.position(displayWidth/2-485,displayHeight/2-185);
 button4 = createButton("Next");
 button4.style('background-color', "yellow");
 button4.position(displayWidth/2-485,displayHeight/2-135);
 input3 = createInput("Answer");
 input3.position(displayWidth/2-485,displayHeight/2-185);
 button3 = createButton("Next");
 button3.style('background-color', "yellow");
 button3.position(displayWidth/2-485,displayHeight/2-135);
 input2 = createInput("Answer");
 input2.position(displayWidth/2-485,displayHeight/2-185);
 button2 = createButton("Next");
 button2.style('background-color', "yellow");
 button2.position(displayWidth/2-485,displayHeight/2-135);
 input1 = createInput("Answer");
 input1.position(displayWidth/2-485,displayHeight/2-185);
 button1 = createButton("Next");
 button1.style('background-color', "yellow");
 button1.position(displayWidth/2-485,displayHeight/2-135);
 input = createInput("Answer");
 input.position(displayWidth/2-485,displayHeight/2-185);
 button = createButton("Next");
 button.style('background-color', "yellow");
 button.position(displayWidth/2-485,displayHeight/2-135);
 button10 = createButton("Submit");
 button10.style('background-color', "yellow");
 button10.position(200,550);
 button10.hide();


}
function draw(){
  a1 = input.value();
  a2 = input1.value();
  a3 = input2.value();
  a4 = input3.value();
  a5 = input4.value();
  a6 = input5.value();
  a7 = input6.value();
  a8 = input7.value();
  a9 = input8.value();
  a10 = input9.value();

  button1.mousePressed(()=>{
    button1.hide();
    input1.hide();
    clear();
    text("Which movie do your father like the most ?",displayWidth/2-485,displayHeight/2-285);
  });
  button.mousePressed(()=>{
    button.hide();
    input.hide();
    clear();
    text("Which Food Dish Do Your Father Like The Most ?",displayWidth/2-485,displayHeight/2-285);
  });
  button2.mousePressed(()=>{
    button2.hide();
    input2.hide();
    clear();
    text("Which actor Do Your Father Like The Most ?",displayWidth/2-485,displayHeight/2-285);
  });
  button3.mousePressed(()=>{
    button3.hide();
    input3.hide();
    clear();
    text("Which actress Do Your Father Like The Most ?",displayWidth/2-485,displayHeight/2-285);
  });
  button4.mousePressed(()=>{
    button4.hide();
    input4.hide();
    clear();
    text("Which Is Your Father's Favourite place ?",displayWidth/2-485,displayHeight/2-285);
  });
  button5.mousePressed(()=>{
    button5.hide();
    input5.hide();
    clear();
    text("Which Is Your Father's Favourite sport ?",displayWidth/2-485,displayHeight/2-285);
  });
  button6.mousePressed(()=>{
    button6.hide();
    input6.hide();
    clear();
    text("Which Is Your Father's Favourite Game app ?",displayWidth/2-485,displayHeight/2-285);
  });
  button7.mousePressed(()=>{
    button7.hide();
    input7.hide();
    clear();
    text("Which Is Your Father's Favourite season ?",displayWidth/2-485,displayHeight/2-285);
  });
  button8.mousePressed(()=>{
    button8.hide();
    input8.hide();
    clear();
    text("Write Few Lines About Your Father Describing Him ?",displayWidth/2-485,displayHeight/2-285);
  });
  button9.mousePressed(()=>{
    button9.hide();
    input9.hide();
    button10.show();
    clear();
    fill("green");
    text("results:-",200,100);
    text("Answer:1-"+a1,200,150);
    text("Answer:2-"+a2,400,150);
    text("Answer:3-"+a3,600,150);
    text("Answer:4-"+a4,800,150);
    text("Answer:5-"+a5,1000,150);
    text("Answer:6-"+a6,200,250);
    text("Answer:7-"+a7,400,250);
    text("Answer:8-"+a8,600,250);
    text("Answer:9-"+a9,800,250);
    text("Answer:10-"+a10,200,350);
    fill("brown");
    text("Show Your Answers To Your Father And Let Them Give You A Score !!",displayWidth/2-485,displayHeight/2+60);
    input10 = createInput("Points");
    input10.position(displayWidth/2-485,displayHeight/2+80);
   
  });
  //  input10.hide();
  //  button10.hide();
  button10.mousePressed(()=>{
    button10.hide();
    input10.hide();
    clear();
    text("Thanks For Playing",200,200);
  });
drawSprites();
}