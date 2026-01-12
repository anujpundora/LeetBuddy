function getproblemName(){
    // let title=document.querySelector("title");
      return("leetcode 113") //title.textContent;
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
 