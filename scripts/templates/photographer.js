export default class PhotographerTemplate {
	constructor(photographer) {
		this._photographer = photographer;
	}

	photographerCard() {
		return `
			<article class="photographer">
				<a href="photographer.html?id=${this._photographer.id}" aria-label="${this._photographer.name}">
					<div class="portrait-container">
						<img
							class="portrait"
							src="assets/photographers/${this._photographer.portrait}"
							alt=""
						/>
					</div>
					<h2 class="name">${this._photographer.name}</h2>
				</a>
				<h3 class="location">${this._photographer.city}, ${this._photographer.country}</h3>
				<p class="tagline">${this._photographer.tagline}</p>
				<p class="price">${this._photographer.price}€/jour</p>
		</article>
    `;
	}

	photographerHeader() {
		return `
			<div class="contact__infos">
				<h1 class="contact__name">${this._photographer.name}</h1>
				<h2 class="contact__location">${this._photographer.city}, ${this._photographer.country}</h2>
				<p class="contact__tagline">${this._photographer.tagline}</p>
			</div>
			<button class="contact__button" type="button" aria-label="Contact Me">
				Contactez-moi
			</button>
			<div class="contact__img">
				<img src="assets/photographers/${this._photographer.portrait}" aria-label="${this._photographer.name}" alt=" ">
			</div>
		`;
	}

	photographerInsert() {
		return `
			<div class="insert">
				<span class="insert__likes"></span>
				<span class="insert__price">${this._photographer.price}€ / jour</span>
			</div>
		`;
	}
}
