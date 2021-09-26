import { useState } from "react";
import { useEffect } from "react";
import isMobile from "./isMobile";
import { showAlert } from "./mobileMethod";

function App() {
  const [isD,setIsD]=useState<boolean>(false);
  useEffect(()=>{
    // if(isMobile.ios()){
    //   setIsD((window as any).isDark());
    // }
  },[])
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:`${isD&&"black"}`}}>

      <button onClick={showAlert}>alret</button>
    </div>
  );
}

export default App;
