import Api from "../api/api.js";
import PhotographerFactory from "../factories/photographer.js";

class App {
	displayPhotographers(photographers) {
		const photographerSection = document.querySelector(
			".photographer_section"
		);

		photographers.map(photographer => {
			const photographerInst = new PhotographerFactory(photographer);
			photographerSection.innerHTML +=
				photographerInst.photographerCard();
		});
	}

	async init() {
		const photographers = await Api.getPhographers();

		this.displayPhotographers(photographers);
	}
}

const app = new App();
app.init();
