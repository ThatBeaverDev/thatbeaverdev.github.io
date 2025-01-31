async function run() {
    async function getData() {
        const url = "/header.html";
        try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.text();
        return json
        } catch (error) {
        console.error(error.message);
        }
    }
    

    let element = document.getElementById("mainHeader")
    let innerHTML = await getData()
    element.innerHTML = innerHTML
}

run()