const database = [
	{
		username: "bighead",
		password: "password"
	},
	{
		username: "richard",
		password: "kissmypiss"
	},
	{
		username: "gilfoyle",
		password: "thedarkness"
	},
	{
		username: "danesh",
		password: "gilfoylesucks"
	}
];

const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's your password?")	

function signIn(user, pass) {
	let userFound = false;

	for(let i = 0; i < database.length; i++) {
		if(user === database[i].username && pass === database[i].password) {
		userFound = true;
		redirectToNewsFeed();
		break;
	} 
}

	if (!userFound) {
		alert("Sorry, wrong username and password!");
	}
}

function redirectToNewsFeed() {
	console.log("Redirecting to newsfeed.html...");
	window.location.href = 'newsfeed.html';
}

signIn(userNamePrompt, passwordPrompt);