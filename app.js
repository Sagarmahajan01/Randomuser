async function random_User() {
    try {
        let rowData = await fetch('https://randomuser.me/api/');
        let finaalData = await rowData.json();
        console.log(finaalData);
        
        displayData(finaalData.results[0]); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

random_User();

let displayData = (userData) => {
    document.querySelector("#image").src = userData.picture.large; // 
    document.querySelector("#fName").textContent = `${userData.name.first} ${userData.name.last}`;
    document.querySelector("#cell").textContent=userData.cell;
    document.querySelector("#email").textContent = userData.email;
    document.querySelector("#country").textContent=userData.location.country;
}

document.querySelector("#refreshButton").addEventListener("click", () => {
    location.reload();
})
   





