import * as React from "react"
import {useEffect} from "react"
export default function AccountHome(){
  function GetCookie(){
    const name="KeepLoggedIn=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca=decodedCookie.split(";");
    useEffect(()=>{
      let c;
      for(let i=0;i<ca.length;i++){
        c=ca[i];
        if(c[0]==" "){
            c=c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
      }
    })
  }
  const [User, SetUser]=React.useState({});
  return(
    <>
      <header><h1 className="admin">Account Home</h1></header>
      <main>
        <ul className="menu">
          <li className="menu"><button onClick={()=>location.assign("/get-users")}>Get Users</button></li>
          <li className="menu"><button onClick={()=>location.assign("/change-password")}>Change Password</button></li>
          <li className="menu"><button onClick={()=>location.assign("/administrator")}>Administrator</button>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu"><button onClick={()=>location.assign("/friends-content")}>Friend Content</button></li>
        </ul>
      </main>
    </>
  )
}
