export default class PhotographerModel {
	constructor(photographer) {
		this._id = photographer.id;
		this._name = photographer.name;
		this._city = photographer.city;
		this._country = photographer.country;
		this._tagline = photographer.tagline;
		this._price = photographer.price;
		this._portrait = photographer.portrait;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get city() {
		return this._city;
	}

	get country() {
		return this._country;
	}

	get tagline() {
		return this._tagline;
	}

	get price() {
		return this._price;
	}

	get portrait() {
		return this._portrait;
	}
}
