chrome.topSites.get(function (top){
    if(top){
        var str = '<ul>'
        top.forEach(data=>{
            var name = data.title;
            var link = data.url;
            str += `<li><a target="_blank" href="${link}">${name}</a></li>`
        })
        document.getElementById('topSites').innerHTML = str;
    }
})
var topBtnSel = document.getElementById('topShowBtn')
if(topBtnSel) {
    topBtnSel.addEventListener('mouseover', function(){
        var element = document.getElementById("topSites");
        element.classList.toggle("showHide");
    })
    topBtnSel.addEventListener('click', function(){
        var element = document.getElementById("topSites");
        element.classList.toggle("showHide");
    })
}
var set = document.getElementById('plus')
if(set) {
    set.addEventListener('click', function(){

        var element1 = document.getElementById("main-body");
        var element2 = document.getElementById("settings");
        var element = document.getElementById("topSites");
        element.classList.add("showHide");
        element1.classList.toggle("showHide");
        element2.classList.toggle("showHide");


    })
}
var sel = document.getElementById("setLogo")
if(sel){
    sel.addEventListener('change',srcIcon)
}

function srcIcon(){
    var opt = sel.options[sel.selectedIndex].value;
    if(opt == "link1"){
        document.getElementById("customLogo").src ="images/img_1.png"
    }
    if (opt == "link2"){
        document.getElementById("customLogo").src ="images/img_2.png"
    }
    if (opt == "link3"){
        document.getElementById("customLogo").src ="images/img_3.png"
    }
    if (opt == "link4"){
        document.getElementById("customLogo").src ="images/img_4.png"
    }
    if (opt == "link5"){
        document.getElementById("customLogo").src ="images/img_5.png"
    }
}
var newLink =document.getElementById("main-body-bottom")
    if(newLink){
        newLink.innerHTML =`  <a title="add new" href="" target="_blank"><img src="images/img_1.png" class="icon-logo"></a>
    <a title="add new" href="" target="_blank"><img src="images/img_2.png" class="icon-logo"></a>
    <a title="add new" href="" target="_blank"><img src="images/img_3.png" class="icon-logo"></a>
    <a title="add new" href="" target="_blank"><img src="images/img_4.png" class="icon-logo"></a>
    <a title="add new" href="" target="_blank"><img src="images/img_5.png" class="icon-logo"></a>`
    }


