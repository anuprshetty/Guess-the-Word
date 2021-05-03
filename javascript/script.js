function redirectToPlayground() {
    var player_name = "";
    player_name = document.getElementById("tom_player_name").value;
    if (player_name.length != 0) {
        localStorage.setItem('tom_player', player_name);
    } else {
        localStorage.setItem('tom_player', "Tom");
    }
    player_name = document.getElementById("jerry_player_name").value;
    if (player_name.length != 0) {
        localStorage.setItem('jerry_player', player_name);
    } else {
        localStorage.setItem('jerry_player', "Jerry");
    }
    location.href = "../html/playground.html";
}

function loadPlaygound() {
    // Player name
    document.getElementsByClassName("name")[0].innerHTML = '<h2>' + localStorage.getItem('tom_player') + '</h2>';
    document.getElementsByClassName("name")[1].innerHTML = '<h2>' + localStorage.getItem('jerry_player') + '</h2>';

    // alphabets
    var alphabets_div = document.getElementById("alphabets");
    var alphabets = "";
    for (var i = 65; i <= 90; i++) {
        alphabets += '<button>' + String.fromCharCode(i) + '</button>';
    }
    alphabets_div.innerHTML = alphabets;
    playLogic();
}

function playLogic() {
    // Get random words
    var min_word_len = 10;
    var words_count = 20;
    var words = getWords(min_word_len, words_count);
    console.log("words");
    console.log(words);
    alert("All set");
}

function getWords(min_word_len, words_count) {
    var wordnik_api_key = 'e0d094e089e87c411680f08f6ab0e7be39143f84626e8c9e4';
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=1000&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=-1&minLength=' + min_word_len + '&maxLength=-1&sortBy=count&sortOrder=asc&limit=' + words_count + '&api_key=' + wordnik_api_key, false);
    //    request.onload = function () {
    //        var response_obj = JSON.parse(this.response);
    //        if (request.status >= 200 && request.status < 400) {
    //            return response_obj;
    //        } else {
    //            console.log("Error occured while requesting random words from wordnik server");
    //        }
    //    }
    response_obj = request.send();
    var response_obj = JSON.parse(response_obj);
    if (request.status >= 200 && request.status < 400) {
        console.log(response_obj);
    } else {
        console.log("Error occured while requesting random words from wordnik server");
    }
}
