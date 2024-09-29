var groupAnargams = (str) => {
    if (str.length == 0) {
        return false;
    }

    if (str.length === 1) {
        return [str[0]];
    }

    var anaMap = new Map();

    var group = [];
    for (var i = 0; i < str.length; i++) {
        var count = new Array(26).fill(0);
        for (var j = 0; j < str[i].length; j++) {
            console.log(str[i])
            console.log(str[i].charCodeAt(j) - "a".charCodeAt(0))
            count[str[i].charCodeAt(j) - "a".charCodeAt(0)]++;
        }
        var countKey = JSON.stringify(count);
        console.log(countKey);
        if (anaMap.has(countKey)) {
             anaMap.get(countKey).push(str[i]);
        } else {
            anaMap.set(countKey, [str[i]]);
        }
    }

    anaMap.forEach((value,_) => {
        group.push(value);
    })
    return group
};

var result = groupAnargams(["eat", "tea", "tan", "ate", "nat", "bat", "aet"]);
console.log(result);
