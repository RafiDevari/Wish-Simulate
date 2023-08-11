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