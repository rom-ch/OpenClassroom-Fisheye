import PhotographerModel from "../models/photographer.js";
import PhotographerTemplate from "../templates/photographer.js";

export default class PhotographerFactory {
	constructor(photographer) {
		this._photographer = new PhotographerModel(photographer);

		return new PhotographerTemplate(this._photographer);
	}
}
