let searchBtn = document.getElementById("search-btn")
let restult = document.getElementById('result')
searchBtn.addEventListener("click", () => {
    let nameInp = data.value;
    async function nationalize() {
        let data = await fetch(`https://api.nationalize.io/?name=${nameInp}`)
        let result = await data.json()
        console.log(result);
        console.log(result.name)
        console.log(result.country[0].probability)
        console.log(result.country[1].probability)
        let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
        console.log(regionNames.of(`${result.country[0].country_id}`));
        let regionName = new Intl.DisplayNames(['en'], { type: 'region' });
        console.log(regionName.of(`${result.country[1].country_id}`));

        restult.innerHTML = `
    <table>
    <tr>
    <th>COUNTRY</th>
    <th>&emsp14;&emsp14;&emsp14;&emsp14;&emsp14;&emsp14;</th>
    <th>PROBABILITY</th>
    </tr>
    <tr>
    <td>${regionNames.of(`${result.country[0].country_id}`)}</td>
    <td>&emsp14;&emsp14;&emsp14;&emsp14;&emsp14;&emsp14;</td>
    <td>${result.country[0].probability}</td>
    </tr>
    </tr>
    
    <tr>
    <td>${regionNames.of(`${result.country[1].country_id}`)}</td>
    <td>&emsp14;&emsp14;&emsp14;&emsp14;&emsp14;&emsp14;</td>
    <td>${result.country[1].probability}</td>
    </tr>
    </table>
   
    `


    }

    nationalize();

})