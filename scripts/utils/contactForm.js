export default class ContactForm {
	constructor(modal) {
		this.modal = modal;
	}

	displayModal() {
		this.modal.style.display = "block";
	}

	closeModal() {
		this.modal.style.display = "none";
	}

	formValidation() {
		let fname = document.getElementById("fname");
		let lname = document.getElementById("lname");
		let email = document.getElementById("email");
		let message = document.getElementById("message");

		console.log(`Prénom: ${fname.value}`);
		console.log(`Nom: ${lname.value}`);
		console.log(`Email: ${email.value}`);
		console.log(`Message: ${message.value}`);

		this.closeModal();

		fname.value = "";
		lname.value = "";
		email.value = "";
		message.value = "";
	}

	init() {
		const openBtn = document.querySelector(".contact__button");
		const closeBtn = document.querySelector(".close__modal");
		const form = document.querySelector("#form");

		openBtn.addEventListener("click", () => {
			this.displayModal();
		});

		closeBtn.addEventListener("click", () => {
			this.closeModal();
		});

		form.addEventListener("submit", e => {
			e.preventDefault();
			this.formValidation();
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') this.closeModal();
		})
	}
}
