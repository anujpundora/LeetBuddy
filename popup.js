   let btn=document.querySelector(".hint-btn");
    btn.addEventListener("click",async()=>{ 
        let result=document.querySelector(".result-text");
    chrome.storage.sync.get(["apikey"],({apikey})=>{ 
        if(!apikey){
            result.textContent="NO api found "+apikey;
        }
    
        chrome.tabs.query({active:true,currentWindow:true},([tab])=>{
            chrome.tabs.sendMessage(
                tab.id,
                {type:"GET_PROB_NAME"},
                async({problem})=>{
                   
                    if(!problem){
                        result.textContent="No text found"
                        return;
                    }
                    try{
                       const solution=await getTheResponse(apikey,problem);
                       result.textContent=solution;
                    }   
                    catch(e){
                        result.textContent=e.message+"error"
                    }  
                    
                }
            )   
        })  
       
   async function getTheResponse(apikey,problemName){
        let prompt=`Give 5 Hints in bullet point start each sentence with "-" and make sure not to include any "here ur code with hypher"${problemName}`
          const res=await fetch(
           `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apikey}`,
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                contents:[{parts:[{text:prompt}] }],
                generationConfig: {temperature:0.2},
            })

        });
        if(!res.ok){
            const errorData = await res.json();
           throw new Error(errorData.error?.message || "API REQUEST FAILED");
         }
         const data = await res.json();
         return(
            data?.candidates?.[0]?.content?.parts?.[0]?.text || "No summary available."
         );
    } 
})
    })
   
