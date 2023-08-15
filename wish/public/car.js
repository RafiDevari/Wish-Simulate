var array = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/560px-PNG_transparency_demonstration_1.png',
    'https://4.bp.blogspot.com/-sL27hk1Aq30/VxsWEnra7PI/AAAAAAAAE_s/Bp0iEq8srb4m8xQpgbYH1Zh_ylfIicBfACLcB/s320/3dAletter.png',
    'https://3.bp.blogspot.com/--qjkLEY-CLo/VxsWIsHb2BI/AAAAAAAAE_w/86yz5MkdSQkUk_pTxDryFwQ3GGrKfAHzwCLcB/s320/3dBletter.png',
    'https://4.bp.blogspot.com/-elNbDyMXaRc/VxsWEYpS4uI/AAAAAAAAE_o/mNtCp07G-voaDBSyR5wkdf5hNoXtGwq8wCLcB/s320/3dCletter.png'
]
var slide=document.getElementById('slide')
var now= 0


function change(id) {
    now=id-1
    slide.src=array[id-1];
    // var test=document.getElementById('tes');
    // test.textContent=array.length;
}

function next(){
    if (now<array.length-1) {
        now++
        slide.src=array[now];
    }
}

function prev(){
    if (now>0) {
        now--
        slide.src=array[now];
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
const close=document.getElementById("close")

showPopupButton.addEventListener("click", () => {
    
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});








//History
function historys() {
    histpop.style.display = "flex";
    var tampilan=document.getElementById("sejarah")
    
}
