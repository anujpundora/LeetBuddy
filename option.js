document.addEventListener("DOMContentLoaded",()=>{
    let btn=document.querySelector(".submit-btn");
    let inp=document.querySelector(".api-input")

    chrome.storage.sync.get(["apikey"],({apikey})=>{
       
        if(apikey){
         inp.value=apikey;
        }
    })
   


    btn.addEventListener("click",()=>{
        
        const ApiKey=document.querySelector(".api-input").value.trim();

            chrome.storage.sync.set({apikey:ApiKey},()=>{
            document.querySelector(".done").classList.remove("hidden");
            setTimeout(()=>window.close(),1000) 
        });
        
    })

})

