async function getWordFrequency(n) {

    var frequencyMap = {}

    var response = await (await fetch("https://raw.githubusercontent.com/invictustech/test/main/README.md")).text()

    response = response.replace(/([\n])(-)/g, "")
    response = response.replace(/[\n\n]/g, "")
    response = response.replace(/,/g, "").split(" ");

    const index = response.indexOf("");
    if (index > -1) {
        response.splice(index, 1);
    }

    for (const key of response) {
        if (frequencyMap.hasOwnProperty(key)) {
            frequencyMap[key] += 1
        } else {
            frequencyMap[key] = 1
        }
    }

    var frequencyArray = []
    for (var i in frequencyMap) {
        frequencyArray.push([i, frequencyMap[i]]);
    }

    frequencyArray.sort(function(a, b) {
        return b[1] - a[1];
    });
    try {
        return frequencyArray.slice(0, n)
    } catch (e) {
        console.log(e)
    }

}

export default getWordFrequency;