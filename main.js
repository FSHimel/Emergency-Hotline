const callHistoryData = [];
const callHistoryContainer = document.getElementById("call-history-container");
// call button functionalities
document.getElementById("call-1").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-1").innerText;
    const number =document.getElementById("number-1").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="md:max-w-[407px] bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px]">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-2").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-2").innerText;
    const number = document.getElementById("number-2").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="md:max-w-[407px] bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px]">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-3").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-3").innerText;
    const number = document.getElementById("number-3").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-4").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-4").innerText;
    const number = document.getElementById("number-4").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-5").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-5").innerText;
    const number =document.getElementById("number-5").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-6").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-6").innerText;
    const number = document.getElementById("number-6").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-7").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-7").innerText;
    const number =document.getElementById("number-7").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-8").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-8").innerText;
    const number = document.getElementById("number-8").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})
document.getElementById("call-9").
addEventListener("click", function(e){
    e.preventDefault();
    const name = document.getElementById("name-9").innerText;
    const number =document.getElementById("number-9").innerText
    const coins = parseInt(document.getElementById("coins").innerText);
    if(coins < 20){
        alert("You don't have enough coins to make this call")
    }
    else{
        const totalAvailableCoins = coins - 20;
        document.getElementById("coins").
        innerText = totalAvailableCoins;
        alert("📞 Calling "+name+ "  " +":" +"  " + number+"...");

        const data = {
            Name: name,
            Number: number,
            Date:new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const div = document.createElement("div")
        div.innerHTML=`
            <div class="bg-[#fafafa] rounded-[8px] flex justify-between items-center mt-[8px] p-[16px] md:max-w-[407px] ">
                <div>
                    <h2 class="text-[18px] font-semibold hind-madurai">${data.Name}</h2>
                    <p class="text-[18px] font-normal hind-madurai text-[#5c5c5c]">${data.Number}</p>
                </div>
                <p class="text-[18px] font-normal">${data.Date}</p>
            </div>
    `
    callHistoryContainer.appendChild(div);
    }
    
    
})


// heart section 

const hearts = document.getElementsByClassName("heart")

for(let i=0; i<hearts.length; i++){
        hearts[i].addEventListener("click", function(){
        const heartCount = parseInt(document.getElementById("heart-count").innerText);
        const finalHeartCount = heartCount + 1;
        document.getElementById("heart-count").
        innerText = finalHeartCount;
    })
}

// copy button and its functionalities

document.getElementById("copy-1").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-1").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-2").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-2").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-3").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-3").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-4").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-4").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-5").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-5").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-6").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-6").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-7").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-7").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-8").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-8").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})
document.getElementById("copy-9").
addEventListener("click", function(){
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    const finalCopyCount = copyCount + 1;
    document.getElementById("copy-count").
    innerText = finalCopyCount;

    // number copy to clipbord 
    const number =document.getElementById("number-9").innerText;
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!!")
    
})

// clear call history 

document.getElementById("clear-btn").
addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("call-history-container").innerHTML = "";
})
