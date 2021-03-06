chrome.topSites.get(function (top){
    if(top){
        top = top.splice(0, 7)
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
    if(opt == "iconone"){
        document.getElementById("customLogo").src ="images/img_1.png"
    }
    if (opt == "icontwo"){
        document.getElementById("customLogo").src ="images/img_2.png"
    }
    if (opt == "iconthree"){
        document.getElementById("customLogo").src ="images/img_3.png"
    }
    if (opt == "iconfour"){
        document.getElementById("customLogo").src ="images/img_4.png"
    }
    if (opt == "iconfive"){
        document.getElementById("customLogo").src ="images/img_5.png"
    }
}
var saved = document.getElementById('subm')
if(saved){
    saved.addEventListener('click',function(){
        var cmdLink = document.getElementById("setLogo")
        var isLinAvail = document.getElementById("cusIcLink").value
        var pic = cmdLink.options[cmdLink.selectedIndex].value;
        var newLink = document.getElementById("linkNew").value
        newLink = 'http://' + newLink
        if(pic === "iconone"){
            chrome.storage.sync.set({iconone: newLink}, function() {});
            if(isLinAvail !== " " || isLinAvail !== undefined){
                chrome.storage.sync.set({iconLogo1: isLinAvail}, function() {});
            }
        }
        if(pic === "icontwo"){
            chrome.storage.sync.set({icontwo: newLink}, function() {});
            if(isLinAvail !== " " || isLinAvail !== undefined){
                chrome.storage.sync.set({iconLogo2: isLinAvail}, function() {});
            }
        }
        if(pic === "iconthree"){
            chrome.storage.sync.set({iconthree: newLink}, function() {});
            if(isLinAvail !== " " || isLinAvail !== undefined){
                chrome.storage.sync.set({iconLogo3: isLinAvail}, function() {});
            }
        }
        if(pic === "iconfour"){
            chrome.storage.sync.set({iconfour: newLink}, function() {});
            if(isLinAvail !== " " || isLinAvail !== undefined){
                chrome.storage.sync.set({iconLogo4: isLinAvail}, function() {});
            }
        }
        if(pic === "iconfive"){
            chrome.storage.sync.set({iconfive: newLink}, function() {});
            if(isLinAvail !== " " || isLinAvail !== undefined){
                chrome.storage.sync.set({iconLogo5: isLinAvail}, function() {});
            }
        }
    })
}
chrome.storage.sync.get(['iconone','icontwo','iconthree', 'iconfour', 'iconfive','iconLogo1','iconLogo2', 'iconLogo3', 'iconLogo4', 'iconLogo5'], function(result) {
    if(result.iconone){
        document.getElementById('icon1').href = result.iconone
        document.getElementById('icon1').title = result.iconone
    }
    if(result.icontwo){
        document.getElementById('icon2').href = result.icontwo
        document.getElementById('icon2').title = result.icontwo
    }
    if(result.iconthree){
        document.getElementById('icon3').href = result.iconthree
        document.getElementById('icon3').title = result.iconthree
    }
    if(result.iconfour){
        document.getElementById('icon4').href = result.iconfour
        document.getElementById('icon4').title = result.iconfour
    }
    if(result.iconfive){
        document.getElementById('icon5').href = result.iconfive
        document.getElementById('icon5').title = result.iconfive
    }
    if(result.iconLogo1){
        document.getElementById('iconLogo1').src = result.iconLogo1
    }
    if(result.iconLogo2){
        document.getElementById('iconLogo2').src = result.iconLogo2
    }
    if(result.iconLogo3){
        document.getElementById('iconLogo3').src = result.iconLogo3
    }
    if(result.iconLogo4){
        document.getElementById('iconLogo4').src = result.iconLogo4
    }
    if(result.iconLogo5){
        document.getElementById('iconLogo5').src = result.iconLogo5
    }

});






