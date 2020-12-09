let initAnimate
const index = 10;
const makePoem = (poemHTLM) => {
    var str = poemHTLM;
    var i = 0;
    document.getElementsByTagName('div')[index].innerHTML = "";


    var state = setInterval(function () {
        i++;
        document.getElementsByTagName('div')[index].innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(state);
            document.getElementsByTagName('div')[index].innerHTML = str;
        }
    }, 50);
    return state;
}

setTimeout(function () {
    document.getElementById('poem').style.opacity = "1";
    const poemHTLM = `<p><span>人 </span><i>從一別去人稀，昨日同吟第一枝。</i></p>
    <p><span>工 </span><i>傳上帝周公路，山門徒過去家貧。</i></p>
    <p><span>智 </span><i>子山寂寥報業，美人才子總慵存。</i></p>
    <p><span>慧 </span><i>地人間虛志業，公侯曾佐隱賢人。</i></p>`
    initAnimate = makePoem(poemHTLM);
    console.log(initAnimate)
}, 1000);

const startPredict = () => {
    const loadDOM = document.getElementById('loading');
    let wordList = document.getElementById('words').value;
    if (wordList.length > 4)
        wordList = wordList.substring(0, 4);
    console.log(wordList)
    // 檢查否有效字串
    if (wordList.length > 0) {
        // 觸發loading
        loadDOM.classList.remove('d-none');
        // 暫停Demo動畫
        clearTimeout(initAnimate);
        axios.post(`https://ai-poem.herokuapp.com/predict`, {
            "word": wordList
        })
            .then((response) => {
                // POST success & GET responsea
                const dataObject = response.data;
                const predictList = dataObject['result'].split("\n");
                let poemHTML = '';
                console.log(predictList);
                for (let i = 0; i < predictList.length - 1; i++) {
                    poemHTML += `<p><span>${wordList[i]} </span><i>${predictList[i].substring(1, predictList[i].length)}</i></p>`
                }
                makePoem(poemHTML);
                loadDOM.classList.add('d-none');

            },
                (error) => {
                    const message = error.response.data.message;
                }
            );
    }
}