async function translateText(){

    const text =
    document.getElementById("inputText").value;

    const source =
    document.getElementById("source").value;

    const target =
    document.getElementById("target").value;

    if(text===""){
        alert("Enter text");
        return;
    }

    try{

        const response =
        await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`
        );

        const data =
        await response.json();

        document.getElementById(
        "outputText").innerText =
        data.responseData.translatedText;

    }
    catch(error){

        document.getElementById(
        "outputText").innerText =
        "Translation Failed";

        console.log(error);
    }
}

function swapLanguages(){

    let source =
    document.getElementById("source");

    let target =
    document.getElementById("target");

    let temp = source.value;

    source.value = target.value;

    target.value = temp;
}