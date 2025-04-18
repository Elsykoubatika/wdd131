

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


const products = [
	{
		inscriptions: 30,
		prix: 50,
		name: "Child",
		detail: "50$/Mois pour les enfants ager de 5-12 ans"
	},
	{
		inscriptions: 30,
		prix: 100,
		name: "Mineur",
		detail: "100$/Mois pour les enfants ager de 12-17ans"
	},
	{
		inscriptions: 30,
		prix: 200,
		name: "Adult",
		detail: "200$/Mois pour les Adultes"
	}];
	
	const selectElement = document.getElementById("product");
	
	products.forEach(product => {
		const option = document.createElement("option");
		option.value = product.name;
		option.textContent = product.name;
		selectElement.appendChild(option);
	});

	selectElement.addEventListener("change", (event) => {
		const selectedProduct = products.find(product => product.name === event.target.value);
		if (selectedProduct) {
			document.querySelector(".text").innerHTML = `<strong>Details:</strong> ${selectedProduct.detail}`;
			document.querySelector(".price").innerHTML = `<strong>Prix Total: </strong> ${selectedProduct.prix}$`;
		} else {
			document.querySelector(".text").innerHTML = `<strong>Details:</strong>`;
			document.querySelector(".price").innerHTML = `<strong>Prix Total: </strong>`;
		}
	});

	// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.nav-links')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});