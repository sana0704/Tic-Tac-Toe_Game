
let boxes = document.querySelectorAll(".box");
let turnO = true;
const winningPattern = [[0,1,2],[3,4,5],
 [6,7,8], [0,3,6],
 [1,4,7],[2,5,8],
 [0,4,8],[2,4,6]];

 let rstbtn = document.querySelector(".rst-btn");
let newgamebtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");




// Accessing boxes
boxes.forEach((curBox)=>{
curBox.addEventListener("click" , ()=>{
    console.log("box clicked successful");

if(turnO){
    curBox.innerText = "O";
    turnO = false;
} else {  
    curBox.innerText="X";
    turnO = true;
}
curBox.disabled=true;

checkWinner();


});
});

   const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}

const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};

const enabledBoxes =()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
};

const showWinner=(winner)=>{
 msg.innerText=`Winner is ${winner} `;  
 msgContainer.classList.remove("hide") ;
 disabledBoxes();
};



const checkWinner =()=>{
    for (let pattern  of winningPattern){
        console.log(pattern[0], pattern[1],pattern[2]);

        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
       
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
                // console.log("winner" , pos1);
                
                showWinner(pos1);
            }
        }
        
        
    }
    
};

newgamebtn.addEventListener("click" , resetGame);
rstbtn.addEventListener("click" , resetGame);