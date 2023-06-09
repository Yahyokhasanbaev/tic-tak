const inner = document.getElementsByClassName("inner");
const spans = document.getElementsByTagName("span");
let h1=document.getElementsByTagName("h1")[0]
let restart_btn=document.getElementsByTagName("button")[0]


let times = 0;
let turn="X"
const winner_com=[
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6]
]
function checkWinner(){
  let winner=null
  for (let i=0; i<winner_com.length;i++){
    const g=winner_com[i]
    if(inner[g[0]].innerText===inner[g[1]].innerText&&
      inner[g[1]].innerText===inner[g[2]].innerText&&
      inner[g[0]].innerText.length>0
      ){
        winner=inner[g[2]].innerText
      }
  }
  return winner 
}


if(turn){
  turn.onclick=()=>{
    turn.style. background="green"
  }
}
const starGame = () => {
h1.innerText=`${turn}'s turn`
  for (let i = 0; i < inner.length; i++) {
    inner[i].onclick = () => {
      if (spans[i].innerText.length > 0 || times >= 9) return;
        console.log(spans[i], i);
        spans[i].innerText=turn
        spans[i].style.color = turn==="X"?"green":"red"
        turn=turn==="X"?"0":"X"
        times++
        const winner=checkWinner()
        if(winner!==null){
          times=9
          h1.innerText=`Winner is ${winner}`
          restart_btn.style.display='inline-block'

        }else{
          if(times===9){
            h1.innerText=`Game out`
            restart_btn.style.display='inline-block'

          }else{

          }
        }
    };
    
  }
};

const clear=()=>{
  for (let i=0; i<inner.length;i++){
    spans[i].innerText=""
  }
}


restart_btn.onclick=()=>{
  const winner=checkWinner()
  if(times<9&&!winner)return
  times=0
  clear()
  starGame()
}
starGame()