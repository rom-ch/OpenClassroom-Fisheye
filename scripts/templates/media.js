export default class MediaTemplate {
	constructor(media) {
		this._media = media;
	}

	mediaCard() {
		return `
      <article class="media" data-user-like="false" data-likes="${this._media.likes}" data-title="${this._media.title}" data-date="${this._media.date}">
        <a href="${this._media.contentLink}" class="media__link" aria-label="${this._media.title}, closeup view">
          ${this._media.getMediaContent}
        </a>
        <div class="media__caption">
          <span class="media__title">${this._media.title}</span>
          <span class="media__like-number">${this._media.likes}</span>
          <span class="media__like-icon" aria-label="likes"><i class="fa-solid fa-heart"></i></span>
        </div>
      </article>
    
    `;
	}
}

// mediaContent