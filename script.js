let boxes=document.querySelectorAll(".b");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let reset=document.querySelector(".btn");

//for alternate criss-cross

let count =0;
let turn=true;
boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        count ++;
        console.log("button clicked");
        if(turn==true)
        {
            box.innerText="X";
            turn=false;
        }
        else
        {
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        win();
        if(count ==9 )
        {    
            draw();
        }

    })
});

// wining condition

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
  };
  
function win()
{
    for(pattern of winPatterns)
    {
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

        if(pos1 !="-" && pos2 !="-" && pos3 !="-")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                console.log("winner", pos1);
                showWinner(pos1);
                disable();
                
            }
        }
    }
}
function disable()
{
    for(box of boxes)
    {
        box.disabled=true;
    }

}

// working of reset button

reset.addEventListener("click",()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="-";
    }
    turn =true;
    count =0;
    msgContainer.classList.add("hide");

}
)

// condition for draw

function draw()
{
        console.log("draw");
        msg.innerText = `The game is Draw  \n Try again`;
        msgContainer.classList.remove("hide");
        disable();
    
}