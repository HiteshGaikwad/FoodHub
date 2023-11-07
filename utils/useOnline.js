import {useState, useEffect} from "react";
const useOnline=()=>{

    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        function onlineHandler(){
            if(!isOnline){
                setIsOnline(true);
            }
        }
        function offlineHandler(){
            if(isOnline){
                setIsOnline(false);
            }
        }
        window.addEventListener('online', onlineHandler);
        window.addEventListener('offline', offlineHandler);

        return ()=>{
            window.removeEventListener('online',onlineHandler);
            window.removeEventListener('offline',offlineHandler);
        }
    },[]);

    return isOnline;
}

export default useOnline;