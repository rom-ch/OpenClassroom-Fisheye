export default class Likes {
	// methode recuperer les likes et calculer le nombre total de like
	static getTotalLikes() {
		const insertLikes = document.querySelector(".insert__likes");
		const likesNumber = document.querySelectorAll("[data-likes]");
		let totalLikesList = [];
		let totalLikes;
		likesNumber.forEach(test => {
			totalLikesList.push(test.dataset.likes * 1);
			totalLikes = totalLikesList.reduce((acc, cur) => acc + cur, 0);
		});

		insertLikes.innerHTML = `${totalLikes} <i class="fa-solid fa-heart"></i>`;
	}

	// methode gerer les like et unlike
	static handleLike() {
		const likeIcon = document.querySelectorAll(".media__like-icon");

		likeIcon.forEach(icon => {
			icon.addEventListener("click", () => {
				const parentMedia = icon.closest(".media");
				const likeNumberEl = icon.previousElementSibling;

				if (parentMedia.dataset.userLike === "false") {
					parentMedia.dataset.userLike = "true";
					parentMedia.dataset.likes =
						parentMedia.dataset.likes * 1 + 1;
					likeNumberEl.style.color = "#901C1C";
					likeNumberEl.style.fontWeight = "700";
					icon.style.color = "#DB8876";
				} else {
					parentMedia.dataset.userLike = "false";
					parentMedia.dataset.likes =
						parentMedia.dataset.likes * 1 - 1;
					likeNumberEl.style.color = "black";
					likeNumberEl.style.fontWeight = "400";
					icon.style.color = "#901C1C";
				}
				likeNumberEl.innerHTML = parentMedia.dataset.likes;
				this.getTotalLikes();
			});
		});
	}
}
