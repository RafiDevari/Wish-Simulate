var array = [
    'albedo',
    'ayaka',
    'yoimiya',
    'keqing'
]
var slide=document.getElementById('bg')
var namaban=document.getElementById('bannername')
var now = 0



function change(id) {
    now=id-1
    slide.src=array[id-1];
}
    
function next(){
    if (now<array.length-1) {
        now++
        slide.style.backgroundImage='url("https://api.genshin.dev/characters/'+array[now]+'/gacha-splash")';
        namaban.textContent=array[now]

    }
}

function prev(){
    if (now>0) {
        now--
        slide.style.backgroundImage='url("https://api.genshin.dev/characters/'+array[now]+'/gacha-splash")';
        namaban.textContent=array[now]
    }
}














var pity=0;
var pity4=0
var guarantee=false
var guarantee4=false
var chance=[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,7,7,7,7
    ,66,128,183,244,300,360,425,473,538,594,665,647,638,615,555,666,1000]
let history=[];
var base5=["Dehya","Tighnari","Diluc","Jean","Qiqi","Keqing","Mona"]
var base4=["Kuki-shinobu","Barbara","Xiangling","Beidou","Ningguang"]
var starter=["Kaeya","Lisa","Amber"]
var event4=["Sucrose","Beidou","Colllei"]
var classic4=base4.concat(starter)
var temp



function wish1x() {
    const min=1
    const max=1000
    var test=document.getElementById("37")
    var nowpity=document.getElementById("pity")
    // EVENT 1
    if (now==0) {
        const gacha=Math.floor(Math.random() * (max - min + 1)) + min;
        //4 star
        if (gacha>chance[pity]+1 && gacha<chance[pity]+101) {
            test.textContent=base4[Math.floor(Math.random()*5)]
            temp=test.textContent
            history.push(temp)
            pity=pity+1
            pity4=0
            nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
            
        }
        else if (gacha>chance[pity]) {
            if (pity4==9) {
                test.textContent=base4[Math.floor(Math.random()*5)]
                temp=test.textContent
                history.push(temp)
                pity=pity+1
                pity4=0
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
            }
            else {
            test.textContent="Sampah 3*"
            temp=test.textContent
            history.push(temp)
            pity=pity+1
            pity4=pity4+1
            nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
            }
        }
        //5 star
        else {
            var fifty=Math.floor(Math.random() * (max - min + 1)) + min;
            if (guarantee==true) {
                test.textContent="Albedo"
                temp=test.textContent
                history.push(temp)
                pity4=0
                pity=0
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                guarantee=false
            }
            else if (fifty>500) {
                test.textContent=base5[Math.floor(Math.random()*8)]
                temp=test.textContent
                history.push(temp)
                pity4=0
                pity=0 
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                guarantee=true
            }
            else {
                test.textContent="Albedo"
                temp=test.textContent
                history.push(temp)
                pity4=0
                pity=0
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                guarantee=false
            }
        }
    }

    // else if (now==1) {      
    //     const gacha=Math.floor(Math.random() * (max - min + 1)) + min;
    //     //4 star
    //     if (gacha>chance[pity]+1 && gacha<chance[pity]+101) {

    //         test.textContent=base4[Math.floor(Math.random()*5)]
    //         temp=test.textContent
    //         pity=pity+1
    //         pity4=0
    //         nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
    //     }
    //     else if (gacha>chance[pity]) {
    //         if (pity4==9) {
    //             test.textContent=base4[Math.floor(Math.random()*5)]
    //             temp=test.textContent
    //             pity=pity+1
    //             pity4=0
    //             nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
    //         }
    //         else {
    //         test.textContent="Sampah 3*"
    //         temp=test.textContent
    //         pity=pity+1
    //         pity4=pity4+1
    //         nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
    //         }
    //     }
    //     //5 star
    //     else {
    //         var fifty=Math.floor(Math.random() * (max - min + 1)) + min;
    //         if (guarantee==true) {
    //             test.textContent="Nahida"
    //             temp=test.textContent
    //             pity4=0
    //             pity=0
    //             nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
    //             guarantee=false
    //         }
    //         else if (fifty>500) {
    //             test.textContent=base5[Math.floor(Math.random()*8)]
    //             temp=test.textContent
    //             pity4=0
    //             pity=0 
    //             nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
    //             guarantee=true
    //         }
    //         else {
    //             test.textContent="Nahida"
    //             temp=test.textContent
    //             pity4=0
    //             pity=0
    //             nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
    //             guarantee=false
    //         }
    //     }
    // }

    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.display = "none";
    }, 1000);
}

function wish10x(index=0) {
    const min=1
    const max=1000
    var test=document.getElementById("37")
    var nowpity=document.getElementById("pity")
    if (index < 10) {
        if (now==0) {
            const gacha=Math.floor(Math.random() * (max - min + 1)) + min;
            //4 star
            if (gacha>chance[pity]+1 && gacha<chance[pity]+101) {
                test.textContent=base4[Math.floor(Math.random()*5)]
                temp=test.textContent
                history.push(temp)
                pity=pity+1
                pity4=0
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
            }
            else if (gacha>chance[pity]) {
                if (pity4==9) {
                    test.textContent=base4[Math.floor(Math.random()*5)]
                    temp=test.textContent
                    history.push(temp)
                    pity=pity+1
                    pity4=0
                    nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                }
                else {
                test.textContent="Sampah 3*"
                temp=test.textContent
                history.push(temp)
                pity=pity+1
                pity4=pity4+1
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                }
            }
            //5 star
            else {
                var fifty=Math.floor(Math.random() * (max - min + 1)) + min;
                if (guarantee==true) {
                    test.textContent="Albedo"
                    temp=test.textContent
                    history.push(temp)
                    pity4=0
                    pity=0
                    nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                    guarantee=false
                }
                else if (fifty>500) {
                    test.textContent=base5[Math.floor(Math.random()*8)]
                    temp=test.textContent
                    history.push(temp)
                    pity4=0
                    pity=0 
                    nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                    guarantee=true
                }
                else {
                    test.textContent="Albedo"
                    temp=test.textContent
                    history.push(temp)
                    pity4=0
                    pity=0
                    nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                    guarantee=false
                }
            }
        }
        popup.style.display = "flex";
        setTimeout(() => {
            popup.style.display = "none";
            wish10x(index + 1); // Call the function recursively with an incremented index
        }, 1000); 
    
    }
}



//Popup
const showPopupButton = document.getElementById("showPopupButton");
const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");
const histpop=document.getElementById("popup2")
const tutups=document.getElementById("tutup")

showPopupButton.addEventListener("click", () => {
    
});

tutups.addEventListener("click", () => {
    histpop.style.display = "none";
})

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});








//History
function historys() {
    histpop.style.display = "flex";
    var tampilan=document.getElementById("sejarah")
    tampilan.textContent=""
    for (let index = 0; index < history.length; index++) {
        var apaisinya=history[index]
        tampilan.innerHTML += "<li>" + apaisinya + "</li>"
        
    }
    setTimeout(() => {
        histpop.style.display = "none";
    }, 1000);
}
