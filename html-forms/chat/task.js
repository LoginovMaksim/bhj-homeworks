/*Домашки огонь!!! 
Из задания этой домашки:

"Вы уже знакомы со свойством textContent DOM-элемента. В следующей лекции вы узнаете о свойстве innerHTML.
Тем не менее, для этого ДЗ нам оно потребуется. С ним вы уже сталкивались, дописывая игру «Соло на клавиатуре»."

Я, открываю домашку с соло, и не вижу там innerHTML, перехожу в задание к «Соло на клавиатуре», и:

"Повышенный уровень сложности #2 (не обязательно)
Сделайте задачу с нуля без ранее написанного кода. Для работы вам потребуется понимание свойства innerHTML (будет изучаться в следующих лекциях).
Вот несколько источников:
	 MDN: Element.innerHTML
	 Свойства узлов: тип, тег и содержимое
"
Подача мотериала х....я (хитрая) какая то. Реально ссылок на ютубчик не хватает...
*/

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetSide = document.querySelector('.chat-widget__side')
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const botMessages = ["Здравствуйте и досвидания.", "К сожалению все операторы заняты, приходите завтра.", "Кто тут?", "Ааа... понятно, дак, а чего хотел то?", "Подожди, разбужу, кого нибуть.", "Эт ток завтра."];

chatWidgetSide.addEventListener('click', function () {

	chatWidget.classList.add('chat-widget_active');
	newMessages(botMessages[0]);
	questionInterval();

});

chatWidgetInput.addEventListener('keydown', function (event) {

	if (event.key == "Enter") {
		let messageClient = event.target.value;

		if (messageClient.length != 0) {

			newMessages(messageClient, 'message_client');

			let botMessage = random();

			newMessages(botMessages[botMessage]);

			chatWidgetInput.value = "";

			const messageText = document.querySelectorAll('.message__text');
	
			messageText[messageText.length - 1].scrollIntoView(false);
		
			questionInterval();
		};
	};
});

let question;

function questionInterval() {

	if (question != 0) {

		clearInterval(question);
		question = 0;

		question = setInterval(() => {
			newMessages('Закрой чат если не пользуещься!');
		}, 30000);

	};
};

function timeFormat() {
	return new Date().toLocaleTimeString("ru-Ru", { hour: "2-digit", minute: "2-digit" });
};

function newMessages(message, addClientClass) {
	if (addClientClass == undefined) { addClientClass = "" };

	messages.innerHTML += `
	  <div class="message ${addClientClass}">
		 <div class="message__time">${timeFormat()}</div>
		 <div class="message__text">
			${message}
		 </div>
	  </div>
	`;

};

let noRepiat = [];

function random() {
	let randomNumber = Math.floor(Math.random() * botMessages.length);

	if (noRepiat.length === botMessages.length) {
		noRepiat = [];
	};

	if (!noRepiat.includes(randomNumber)) {
		noRepiat.push(randomNumber);
		return randomNumber;
	} else {
		return random();
	};
};




// const chat = document.querySelector('.chat-widget');
// const messages = document.querySelector('.chat-widget__messages');
// const input = document.querySelector('.chat-widget__input');
// const chatContainer = document.querySelector('.chat-widget__messages-container')
// const newDate = new Date();
// const botAnswer = [
//   'Добрый день! До свидания!',
//   'Где ж ты был раньше?',
//   'Поздравляем! Вы как обычно ничего не успели купить!',
//   'Вы купите, а потом поговорим!',
//   'К сожалению, все всегда заняты. Прощайте',
//   'У нас ничего не осталось!',
//   'Добрый день! Как погодка?',
// ];

// // активация чата
// document.addEventListener('click', () => {
//   chat.classList.add('chat-widget_active');
// });

// // скролл сообщений
// function scroll() {         
//   const scrollMes =  chatContainer.getBoundingClientRect().bottom;
//   chatContainer.scroll(0, scrollMes);
// };

// //  отправка сообщений
// chat.addEventListener('keydown', function (event) {
//   if (event.code === 'Enter') {
//     answer();
//     scroll();
//   }
// });

// function answer() {
//   messages.innerHTML += `
//   <div class="message message_client">
//     <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
//     <div class="message__text">${input.value}</div>
//   </div>
//   `;
//   input.value = '';

// const random = Math.floor(Math.random() * botAnswer.length);
// messages.innerHTML += `
// <div class="message">
//     <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
//     <div class="message__text">${botAnswer[random]}</div>
// </div>`;

// }