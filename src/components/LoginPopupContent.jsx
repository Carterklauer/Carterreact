import * as React from "react"
import {useEffect} from "react"

export default function LoginContent(){
  const [Accounts, SetAccounts]=React.useState("");
  const [AddAccount SetAddAccount]=React.useState(false);
  function SetAccountList(){
    const AccountListTemp=Account.split(" ");
    return AccountListTemp;
  }
  function GetCookie(){
    const name="RecentLogins=";
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
    }
    return "";
  }
  const [AccountList, SetAccountList]=React.useState([]);
  function SetAccountSection(){
    useEffect(()=>{
      for(let i=0;i<AccountList.length;i++){
        const account=AccountList[i];
        const accountInfo=JSON.parse(account);
        yield(<div className="button" onClick={()=>}>{accountInfo.Name}</div>);
      }
    })
  }
  if(AccountList.length==0||AddAccount){
    return(<></>)
  }else{
    return(<><SetAccountSection /></>);
  }
}
