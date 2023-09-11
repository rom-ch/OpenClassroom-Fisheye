export default class SortMedias {
	constructor(sortList) {
		this._dropdownContent = document.querySelector(".dropdown-content");
		this._dropdownBtnIcon = document.querySelector(".dropdown-btn-icon");
		this._dropdownBtn = document.querySelector('.dropdown-btn');
		this._sortList = sortList;
	}

	openDropdown() {
		this._dropdownContent.style.visibility = "visible";
		this._dropdownBtnIcon.style.rotate = "180deg";
		this._dropdownBtn.setAttribute('aria-expanded', true);
	}

	closeDropdown() {
		this._dropdownContent.style.visibility = "hidden";
		this._dropdownBtnIcon.style.rotate = "0deg";
		this._dropdownBtn.setAttribute('aria-expanded', false);
	}

	sortBy(sortValue) {
		switch (sortValue) {
			case "Popularité":
				this._sortList.sort(
					(a, b) => b.dataset.likes - a.dataset.likes
				);
				break;
			case "Date":
				this._sortList.sort(
					(a, b) =>
						new Date(b.dataset.date).getTime() -
						new Date(a.dataset.date).getTime()
				);
				break;
			case "Titre":
				this._sortList.sort((a, b) => {
					if (a.dataset.title < b.dataset.title) {
						return -1;
					}
					if (a.dataset.title > b.dataset.title) {
						return 1;
					}
				});
				break;
		}
		this._sortList.forEach(element =>
			document.querySelector(".medias-section").appendChild(element)
		);
	}

	init() {
		const dropdownBtn = document.querySelector(".dropdown-btn");
		const selectedOption = document.querySelector(".selected-option");
		const sortOptions = document.querySelectorAll("[data-option]");

		let open = false;

		dropdownBtn.addEventListener("click", () => {
			open = !open;
			if (open) {
				this.openDropdown();
			} else {
				this.closeDropdown();
			}
		});

		sortOptions.forEach(option => {
			option.addEventListener("click", () => {
				selectedOption.dataset.optionSelected = option.dataset.option;
				selectedOption.innerText =
					selectedOption.dataset.optionSelected;
				document.querySelector('.dropdown-content').setAttribute('aria-activedescendant', option.dataset.option)
				this.sortBy(selectedOption.innerText);
				this.closeDropdown();
				open = false;
			});
		});
	}
}
