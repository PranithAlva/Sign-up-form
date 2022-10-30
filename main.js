const password = document.getElementById("password");
const confPassword = document.getElementById("confirm-password");
const errorMessage = document.querySelector("#password-missmatch");
const dumy = document.querySelector("#dumy");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const countryCode = document.getElementById("country-code");

function operation(e) {
	errorMessage.classList.add("hidden");
	errorMessage.classList.remove("visible");
	dumy.classList.add("hidden");
	dumy.classList.remove("visible");
	if (
		password.value != null &&
		confPassword.value != null &&
		firstName != null &&
		lastName != null &&
		email != null &&
		phone != null &&
		countryCode != null
	) {
		if (password.value != confPassword.value) {
			console.log(e);
			e.preventDefault();
			password.style = "border-color:red";
			confPassword.style = "border-color:red";
			errorMessage.classList.remove("hidden");
			errorMessage.classList.add("visible");
			dumy.classList.remove("hidden");
			dumy.classList.add("visible");
		}
	}
}

console.log(password);
console.log(confPassword);

const button = document.querySelector("button");
button.addEventListener("click", operation);
