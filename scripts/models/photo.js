import MediaModel from "./media.js";

export default class PhotoModel extends MediaModel {
	constructor(media) {
		super(media);
		this._image = media.image;
	}

	get contentLink() {
		return `assets/medias/${this._image}`;
	}

	get mediaType() {
		return `
            <img class="image" src="assets/medias/${this._image}" alt="${this.title}">
      `;
	}
}
