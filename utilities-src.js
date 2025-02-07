try {
    Array.compress = function (arr) {
        if (!arr.length) return [];
        
        const result = [];
        let currentValue = arr[0];
        let count = 1;
        
        for (let i = 1; i <= arr.length; i++) {
            // Check if we're at the end or if the next value is different
            if (i === arr.length || arr[i] !== currentValue) {
                result.push(count);
                result.push(currentValue);
                if (i < arr.length) {
                    currentValue = arr[i];
                    count = 1;
                }
            } else {
                count++;
            }
        }
        
        return result;
    }
} catch(e) {}

try {
    mod = (n, modulus) => {
        let result = n % modulus;
        if (result / modulus < 0) result += modulus;
        return result;
    }
} catch(e) {}

try {
    Array.decompress = function (arr) {
        if (mod(arr.length, 2) !== 0) return []

        let result = []
        for (let i = 0; i < arr.length; i += 2) {
            for (let i2 = 0; i2 < arr[i]; i2++) {
                result.push(arr[i + 1])
            }
        }
        return result
    }
} catch(e) {}

try {
    Objectify = function (obj) {
    if (typeof obj === "object") {
            return obj;
        }
        try {
            return (JSON.parse(obj))
        } catch (e) {}
        try {
            return (obj)
        } catch (e) {}
    }
} catch(e) {}

try {
    Stringify = function (str, beautify) {
        if (typeof str === "object") {
            if (beautify) {
                return JSON.stringify(str, null, 4);
            } else {
                return JSON.stringify(str);
            }
        }
        return (String(str))
    }
} catch(e) {}

try {
    fetchURL = async function (url) {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    }
} catch(e) {}