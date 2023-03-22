const menuLink = document.getElementsByClassName('menu__link');
const menuItem = document.getElementsByClassName('menu__item');

for (let i = 0; i < menuLink.length; i++) {

	let pr = menuItem[i].querySelector('.menu_sub');

	if (pr !== null) {

		menuLink[i].onclick = function () {

			if (pr.className == 'menu menu_sub') {
				pr.className = 'menu menu_sub menu_active';
				return false;
			} else {
				pr.className = 'menu menu_sub';
				return false;
			}

		}
	}
}


// const menuLink = Array.from(document.querySelectorAll(".menu__link"));

// console.log(menuLink);

// menuLink.forEach(item => {
//     item.onclick = function() {
//         let menuItem = item.closest(".menu__item");
//         const menuSub = menuItem.querySelector(".menu_sub");

//         if (menuSub) {
//             menuSub.classList.toggle("menu_active");
// 			return false;
//         }
//     }
// });