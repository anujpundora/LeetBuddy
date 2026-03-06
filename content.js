function getproblemName(){
    let tittle=document.querySelector("title");
      return(tittle) //title.textContent;
}

chrome.runtime.onMessage.addListener((message,_sender,sendResponse)=>{
    if(chrome.runtime.lasterror){
        console.log(chrome.runtime.lasterror.message)
    }
    if(message.type==="GET_PROB_NAME"){
        const problem=getproblemName();
        sendResponse({problem});
    }
})
 
