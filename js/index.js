
const makePoem = () => {
    var str = document.getElementsByTagName('div')[4].innerHTML.toString();
    var i = 0;
    document.getElementsByTagName('div')[4].innerHTML = "";

    setTimeout(function () {
        var se = setInterval(function () {
            i++;
            document.getElementsByTagName('div')[4].innerHTML = str.slice(0, i) + "|";
            if (i == str.length) {
                clearInterval(se);
                document.getElementsByTagName('div')[4].innerHTML = str;
            }
        }, 50);
    }, 0);
}

setTimeout(function(){
    document.getElementById('poem').style.opacity = "1";
    makePoem();
},1000);