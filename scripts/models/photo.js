import MediaModel from "./media.js";

export default class PhotoModel extends MediaModel {
	constructor(media) {
		super(media);
		this._image = media.image;
	}

	get mediaType() {
		return `
            <img class="image" src="assets/medias/${this._image}" alt="${this.title}">
      `;
	}
}
