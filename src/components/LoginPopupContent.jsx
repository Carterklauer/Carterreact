import * as React from "react"
import {useEffect} from "react"

export default function LoginContent(){
  const [Accounts, SetAccounts]=React.useState("");
  const [AddAccount SetAddAccount]=React.useState(false);
  function SetAccountList(){
    const AccountListTemp=Account.split(" ");
    return AccountListTemp;
  }
  const AccountList=React.useState(SetAccountList);
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
