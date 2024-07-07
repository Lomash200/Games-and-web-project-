let boxes = document.querySelectorAll(".box");
let resetBtn  =document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true; //player x and player o

const winpattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
//this are probability of winning

const resetgame = ()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="X";
            turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disabledboxes=()=>{
    for(box of boxes  ){
        box.disabled=true;
    }
}

const enabledboxes=()=>{
    for(box of boxes  ){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
msg.innerText=`Congratulation winner is : ${winner}`;
msgcontainer.classList.remove("hide");
disabledboxes();
}

const checkwinner = ()=> {
    for (let pattern of winpattern) {
        let posi1val= boxes[pattern[0]].innerText;
        let posi2val= boxes[pattern[1]].innerText;
        let posi3val= boxes[pattern[2]].innerText;
        if(posi1val!==""&&posi2val!==""&&posi3val!==""){
            if(posi1val===posi2val&&posi2val===posi3val){
                console.log("winner");
                showwinner(posi1val);
            }
        }
    }
    }

    newgamebtn.addEventListener("click",resetgame);
    resetBtn.addEventListener("click",resetgame);
     
  