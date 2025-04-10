
const products = [
{
id: "fc-1888",
name: "flux capacitor",
averagerating: 4.5
},
{
id: "fc-2050",
name: "power laces",
averagerating: 4.7
},
{
id: "fs-1987",
name: "time circuits",
averagerating: 3.5
},
{
id: "ac-2000",
name: "low voltage reactor",
averagerating: 3.9
},
{
id: "jj-1969",
name: "warp equalizer",
averagerating: 5.0
}];

const selectElement = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;

    selectElement.appendChild(option);
});


// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);


// Format the last modified date
const formattedLastModified = lastModified.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
});

// Insert the current year into the first paragraph of the footer
document.getElementById('currentyear').textContent = `${currentYear}`;

// Insert the last modified date into the second paragraph of the footer
document.getElementById("lastModified").textContent = `Last modified: ${formattedLastModified}`;
