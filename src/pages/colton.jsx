import * as React from "react"
import Popup from "../components/popup"
export default function Colton(){
  const[PopupState, SetPopupState]=React.useState(false);
  function OpenPopup(){
    SetPopupState(true);
  }
  function ClosePopup(){
    SetPopupState(false);
  return(<>
  <img id="backgroundimage" src="https://cdn.glitch.global/1760db9d-c13a-4b0a-a542-608419c30c2b/Colton's%202005%20Nissan%20Titan%205.jpg?v=1696023282728" alt="Colton's very cool looking 2005 Nissan Titan"/>
  <header><h1>Colton Engel</h1></header>
  <main>
    <p className="colton">
       My best friend Colton Engel is one of the
      most kindest person that I met. Colton is a proud Nissan Titan owner.
    </p>
    
    <p className="colton">Colton likes to play Baseball. Here are some pictures of him playing Baseball.</p>
    <img className="portrait" src="https://cdn.glitch.com/1760db9d-c13a-4b0a-a542-608419c30c2b%2F65424889_457293585059544_8613261504277381120_n.jpg?v=1602466475393" border={0} alt="Colton Playing Baseball 1."/>
    <img className="portrait" src="https://cdn.glitch.com/1760db9d-c13a-4b0a-a542-608419c30c2b%2F65756298_444546549731261_1786822092965019648_n.jpg?v=1602466478548" border={0} alt="Colton playing Baseball 2."/>
    <img className="portrait" src="https://cdn.glitch.com/1760db9d-c13a-4b0a-a542-608419c30c2b%2F65977661_649244112259034_4839865523351060480_n.jpg?v=1602466482409" border={0} alt="Colton playing baseball 3."/>
    <img className="landscape" src="https://cdn.glitch.com/1760db9d-c13a-4b0a-a542-608419c30c2b%2F71003865_533970900687649_3178975934543822848_n.jpg?v=1602466494940" border={0} alt="Colton Playing baseball 4."/>
    <img className="portrait" src="https://cdn.glitch.com/1760db9d-c13a-4b0a-a542-608419c30c2b%2F71237568_2540484516038687_3505501347208232960_n.jpg?v=1602466502219" border={0} alt="Colton Playing baseball 5."/>
    <img className="portrait" src="https://cdn.glitch.com/1760db9d-c13a-4b0a-a542-608419c30c2b%2F71325705_474807153103911_5717455254639869952_n.jpg?v=1602466506909" border={0} alt="Colton playing Baseball 6."/>
    <img className="portrait" src="https://cdn.glitch.com/1760db9d-c13a-4b0a-a542-608419c30c2b%2F72151848_244496169816310_1474778309295341568_n.jpg?v=1602466515582" border={0} alt="colton playing Baseball 7."/>
    
    <p className="colton">His pitching speed is 84 m.p.h, and he is 6ft and weighs 225lbs.</p>
    <p className="colton">
      &nbsp; His truck is a 2021 Nissan Titan. Colton
      likes his trucks lifted and puts very cool stuff like a lift kit, very
      aggressive mud tires and other cool stuff.
    </p>
    <button type="button" onClick={()=>location.assign('/colton/nissan-trucks')}>Colton's Cool Nissan Trucks</button>
  </main>
</>

    )
}
