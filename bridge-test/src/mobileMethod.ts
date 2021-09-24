import isMobile from "./isMobile";

export function showAlert(){
    if(isMobile.any()){
        if(isMobile.Android()){
            (window as any).android.showAlert(true);    
        }
        if(isMobile.ios()){
            (window as any).webkit.messageHandlers.showAlert.postMessage(true);
        }
    }
    else{
        alert("alert");
    }
}