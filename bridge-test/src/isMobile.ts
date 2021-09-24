export interface IsMobile {
    Android:()=>boolean,
    ios:()=>boolean,
    any:()=>boolean
}

const isMobile:IsMobile = {
    Android:function(){
        return navigator.userAgent.match(/Android/i) == null ? false :true;
    },
    ios:function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)==null ? false :true;
    },
    any:function(){
        return (isMobile.Android()||isMobile.ios());
    }
}

export default isMobile;