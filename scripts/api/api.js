export default class Api {
	constructor() {
		this._url = "./data/photographers.json";
	}

	static async getDatas() {
		try {
			const response = await fetch("./data/photographers.json");
			const datas = response.json();
			return datas;
		} catch (err) {
			console.log(err);
		}
	}

	static async getPhographers() {
		const { photographers } = await this.getDatas();
		return photographers;
	}

	static async getPhotographersById(id) {
		const photographers = await this.getPhographers();
		const photographerById = photographers.find(
			photographer => photographer.id == id
		);
		return photographerById;
	}

	static async getAllMedias() {
		const { media } = await this.getDatas();
		return media;
	}

	static async getMediasByPhotographer(id) {
		const medias = await this.getAllMedias();
		const mediasByPhotographer = medias.filter(
			media => media.photographerId == id
		);
		return mediasByPhotographer;
	}
}
