import PhotoModel from "../models/photo.js";
import VideoModel from "../models/video.js";
import MediaTemplate from "../templates/media.js";

export default class MediaFactory {
	constructor(media) {
		if (media.image !== undefined) {
			this._media = new PhotoModel(media);
		} else {
			this._media = new VideoModel(media);
		}

		return new MediaTemplate(this._media);
	}
}
