import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import './App.css'
import Allplayers from './componants/Allplayers/Allplayers'
import Header from './componants/Header/Header'
import Blogs from './componants/Blogs/Blogs'
import Footer from './componants/Footer/Footer';




function App() {
 
 const [isButtonActive , isButtonActiveAdd] = useState(true)
 const [ClaimButtonActive , setClaimButton] =useState(false)
 const [information , setinformation] = useState([])
 const [coin , setCoin] = useState(0)
 const [ChoosePlayer , setChoosePlayer] =useState([])



  useEffect(()=> {
fetch('data.json').then(res => res.json()).then(data => setinformation(data))
  } , [])
 
  const clickButtonActive =(status)=>{
  
    if(status){
      isButtonActiveAdd(true)
    }
    else{
      isButtonActiveAdd(false)
    }


  }
  
  const ClaimButton =(status) =>{
if(status){
  toast(' Credit added to your Account',{
    style:{
      borderBottom:'4px solid green' 
    }
   })
 setClaimButton(!ClaimButtonActive)
  setCoin(coin +  6000000)

}
  }

  const Buyplayer = (blog) =>{

 

  const Player = ChoosePlayer.find(p => p.playerId == blog.playerId)

if(Player){
 toast('You have already selected',{
  style:{
    borderBottom:"4px solid red"

  }
 })
    
}
else{
  if(coin >= blog.biddingPrice && ChoosePlayer.length < 6){
    toast(`Congrats !! ${blog.name} is now your squad`,{
      style:{
        borderBottom:'4px solid green ' 
      }
     })
    setCoin(coin - blog.biddingPrice)

    setChoosePlayer([...ChoosePlayer, blog])

  
  
   }
  else if(ChoosePlayer.length >= 6){
    toast('You can  buy only 6 players',{
      style:{
        borderBottom:'4px solid red' ,
        color:'red'
      }
     })
  }
   else {
     toast('Not enough money to buy this player.Claim some Credit',{
      style:{
        borderBottom:'4px solid red' 
      }
     })
   }

}



}
 const remove =(Content) =>{
  setCoin(coin - Content.biddingPrice)
const remainPlayer = ChoosePlayer.filter((p) => p.playerId !== Content.playerId )

setChoosePlayer(remainPlayer)

toast('player removed',{
  style:{
    borderBottom:'4px solid orange'
  }
})


 }


  return (
    <div >
<div className='max-w-7xl my-0 mx-auto px-8 py-8'>
<div className='flex justify-center '>
<ToastContainer position='top-center' />
</div>
  <Header coin={coin} claimButton={ClaimButton} Button={ClaimButtonActive} ></Header>
  <Allplayers  isButtonActive={clickButtonActive } ButtonActive={isButtonActive} ChoosePlayer={ChoosePlayer.length}></Allplayers>
 <Blogs removeData={remove} PlayerBuy={Buyplayer} isButtonActive={clickButtonActive } AciveButton={isButtonActive}  Alldata={information} ChoosePlayer={ChoosePlayer}></Blogs>
 </div>
<Footer></Footer>
    </div>
  )
}

export default App
