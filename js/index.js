
const index=10;
const makePoem = () => {
    var str = document.getElementsByTagName('div')[index].innerHTML.toString();
    var i = 0;
    document.getElementsByTagName('div')[index].innerHTML = "";

    setTimeout(function () {
        var se = setInterval(function () {
            i++;
            document.getElementsByTagName('div')[index].innerHTML = str.slice(0, i) + "|";
            if (i == str.length) {
                clearInterval(se);
                document.getElementsByTagName('div')[index].innerHTML = str;
            }
        }, 50);
    }, 0);
}

setTimeout(function(){
    document.getElementById('poem').style.opacity = "1";
    makePoem();
},1000);

const startPredict=()=>{
    const loadDOM=document.getElementById('loading');
    loadDOM.classList.remove('d-none');
    setTimeout(function(){
        loadDOM.classList.add('d-none');
    },3000)
}