var array = [
    'albedo',
    'ayaka',
    'amos-bow',
    'keqing'
]

const images = [];

// function preloadImages(urls) {
//     urls.forEach(url => {
//         const img = new Image();
//         img.src ="https://api.genshin.dev/characters/"+url+"/gacha-splash"
//         images.push(img);
//     });
// }

// preloadImages(array);



var paginator=document.getElementById("paginate")
var slide=document.getElementById('bg')
var namaban=document.getElementById('bannername')
var now = 0
var gachaslide=document.getElementById('squirt')

function change(id) {
    now=id-1
    if (now==2) {
        slide.style.backgroundImage='url("https://api.genshin.dev/weapons/'+array[now]+'/icon")';
        namaban.textContent=array[now]
    }

    else {  
        slide.style.backgroundImage='url("https://api.genshin.dev/characters/'+array[now]+'/gacha-splash")';
        namaban.textContent=array[now]
    }
}
    
function next(){
    if (now<array.length-1) {
        now++
        if (now==2) {
            slide.style.backgroundImage='url("https://api.genshin.dev/weapons/'+array[now]+'/icon")';
            namaban.textContent=array[now]
        }

        else {  
            slide.style.backgroundImage='url("https://api.genshin.dev/characters/'+array[now]+'/gacha-splash")';
            namaban.textContent=array[now]
        }
    }
    
}

function prev(){
    if (now>0) {
        now--
        if (now==2) {
            slide.style.backgroundImage='url("https://api.genshin.dev/weapons/'+array[now]+'/icon")';
            namaban.textContent=array[now]
        }

        else {  
            slide.style.backgroundImage='url("https://api.genshin.dev/characters/'+array[now]+'/gacha-splash")';
            namaban.textContent=array[now]
        }
    }
}





function dapat5(text) {
    var nowpity=document.getElementById("pity")
    gachaslide.src = 'https://api.genshin.dev/characters/'+text+'/gacha-splash'
    temp=text
    history.push(temp)
    pity4=0
    pity=0
    nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
}










var pity=0;
var pity4=0
var guarantee=false
var guarantee4=false
var chance=[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,7,7,7,7
    ,66,128,183,244,300,360,425,473,538,594,665,647,638,615,555,666,1000]
let history=[];
var base5=["diluc","jean","qiqi","keqing","mona"]
var base4=["noelle","barbara","xiangling","beidou","ningguang"]
var starter=["kaeya","lisa","amber"]
var event4=["sucrose","beidou","diona"]
var classic4=base4.concat(starter)
var temp


const imgElement = document.querySelector(".popup-content img");

function wish1x() {
    const min=1
    const max=1000
    var test=document.getElementById("37")
    var nowpity=document.getElementById("pity")
    // EVENT 1
    if(now<=1){
        const gacha=Math.floor(Math.random() * (max - min + 1)) + min;
        //4 star
        if (gacha>chance[pity]+1 && gacha<chance[pity]+101) {
            test.textContent=base4[Math.floor(Math.random()*(base4.length))]
            temp=test.textContent
            history.push(temp)
            pity=pity+1
            pity4=0
            nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
            gachaslide.src = 'https://api.genshin.dev/characters/'+temp+'/gacha-splash'
        }
        else if (gacha>chance[pity]) {
            if (pity4==9) {
                test.textContent=base4[Math.floor(Math.random()*(base4.length))]
                temp=test.textContent
                history.push(temp)
                pity=pity+1
                pity4=0
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                gachaslide.src = 'https://api.genshin.dev/characters/'+temp+'/gacha-splash'
            }
            else {
            test.textContent="Sampah 3*"
            temp=test.textContent
            history.push(temp)
            pity=pity+1
            pity4=pity4+1
            nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
            gachaslide.src = 'https://api.genshin.dev/characters/amber/gacha-splash'
            }
        }
        //5 star
        else {
            var fifty=Math.floor(Math.random() * (max - min + 1)) + min;
            if (guarantee==true) {
                test.textContent=array[now]
                dapat5(test.textContent)
                guarantee=false
            }
            else if (fifty>500) {
                test.textContent=base5[Math.floor(Math.random()*base5.length)]
                dapat5(test.textContent)
                guarantee=true
            }
            else {
                test.textContent=array[now]
                dapat5(test.textContent)
                guarantee=false
            }
        }
    }
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.display = "none";
    }, 1500);
}


function wish10x(index=0) {
    const min=1
    const max=1000
    var test=document.getElementById("37")
    var nowpity=document.getElementById("pity")
    if (index < 10) {
        if (now<=2) {
            const gacha=Math.floor(Math.random() * (max - min + 1)) + min;
            //4 star
            if (gacha>chance[pity]+1 && gacha<chance[pity]+101) {
                test.textContent=base4[Math.floor(Math.random()*(base4.length))]
                temp=test.textContent
                history.push(temp)
                pity=pity+1
                pity4=0
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                gachaslide.src = 'https://api.genshin.dev/characters/'+temp+'/gacha-splash'
            }
            else if (gacha>chance[pity]) {
                if (pity4==9) {
                    test.textContent=base4[Math.floor(Math.random()*(base4.length))]
                    temp=test.textContent
                    history.push(temp)
                    pity=pity+1
                    pity4=0
                    nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                    gachaslide.src = 'https://api.genshin.dev/characters/'+temp+'/gacha-splash'
                }
                else {
                test.textContent="Sampah 3*"
                temp=test.textContent
                history.push(temp)
                pity=pity+1
                pity4=pity4+1
                nowpity.textContent="Pity 5*="+String(pity)+" "+ "Pity 4*=" +String(pity4)
                gachaslide.src = 'https://api.genshin.dev/characters/amber/gacha-splash'
                }
            }
            //5 star
            else {
                var fifty=Math.floor(Math.random() * (max - min + 1)) + min;
                if (guarantee==true) {
                    test.textContent=array[now]
                    dapat5(test.textContent)
                    guarantee=false
                }
                else if (fifty>500) {
                    test.textContent=base5[Math.floor(Math.random()*base5.length)]
                    dapat5(test.textContent)
                    guarantee=true
                }
                else {
                    test.textContent=array[now]
                    dapat5(test.textContent)
                    guarantee=false
                }
            }
        }
        popup.style.display = "flex";
        setTimeout(() => {
            popup.style.display = "none";
            imgElement.style.animation = "none";
            void imgElement.offsetWidth; 
            imgElement.style.animation = null; 
            wish10x(index + 1);
        }, 1500); 
    
    }
}



//Popup
const showPopupButton = document.getElementById("showPopupButton");
const closePopupButton = document.getElementById("closePopupButton");
const popup = document.getElementById("popup");
const histpop=document.getElementById("popup2")
// const tutups=document.getElementById("tutup")

showPopupButton.addEventListener("click", () => {
    
});

// tutups.addEventListener("click", () => {
//     histpop.style.display = "none";
// })

function tutups() {
    
    
    paginator.innerHTML=""
    histpop.style.display = "none";
}

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});








//History
function historys(rafi=0) {
    paginator.innerHTML=""
    histpop.style.display = "none";
    histpop.style.display = "flex";
    var tampilan=document.getElementById("sejarah")
    tampilan.textContent=""

        for (let index = rafi*10; index < history.length && index<(rafi*10)+10; index++) {
            var apaisinya=history[index]
            tampilan.innerHTML += "<p>"+ (index+1)+"." + apaisinya +"</p>"       
        }
    
    
    
    for (let indexpag = 1; indexpag <= (history.length/10)+1; indexpag++) {
        paginator.innerHTML += "<td>"+ "<button onclick='historys("+(indexpag-1)+")'>"+indexpag+"</button>" +"</td>" 
        
    }

}

