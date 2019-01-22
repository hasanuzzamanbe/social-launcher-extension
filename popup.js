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
}


