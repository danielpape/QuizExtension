let principles = [{
		name: "Aesthetic Usability Effect",
		overview: "Users often perceive aesthetically pleasing design as design that&#8217;s more usable.",
	},
	{
		name: "Doherty Threshold",
		overview: "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
	},
	{
		name: "Fitt&#8217;s Law",
		overview: "The time to acquire a target is a function of the distance to and size of the target.",
	},
	{
		name: "Hick&#8217;s Law",
		overview: "The time it takes to make a decision increases with the number and complexity of choices.",
	},
	{
		name: "Jakob&#8217;s Law",
		overview: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
	},
	{
		name: "Law of Common Region",
		overview: "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
	},
	{
		name: "Law of Pr&auml;gnanz",
		overview: "People will perceive and interpret ambiguous or complex images as the simplest form possible, because it is the interpretation that requires the least cognitive effort of us.",
	},
	{
		name: "Law of Proximity",
		overview: "Objects that are near each other tend to be grouped together.",
	},
	{
		name: "Law of Similarity",
		overview: "The human eye tends to perceive comparable elements in a design as a complete picture, shape, or group, even if those elements are separated.",
	},
	{
		name: "Law of Uniform Connectedness",
		overview: "Elements that are visual similarities are perceived as more related than elements with no similarities.",
	},
	{
		name: "Miller&#8217;s Law",
		overview: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
	},
	{
		name: "Occam&#8217;s Razor",
		overview: "Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected.",
	},
	{
		name: "Pareto Principle",
		overview: "For many events roughly 80% of the effects come from 20% of the causes.",
	},
	{
		name: "Parkinson&#8217;s Law",
		overview: "Any task will inflate until all of the available time is spent.",
	},
	{
		name: "Postel&#8217;s Law",
		overview: "Be liberal in what you accept, and conservative in what you send.",
	},
	{
		name: "Serial Position Effect",
		overview: "Users have a propensity to best remember the first and last items in a series.",
	},
	{
		name: "Tesler&#8217;s Law",
		overview: "For any system there is a certain amount of complexity which cannot be reduced.",
	},
	{
		name: "Von Restorff Effect",
		overview: "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
	},
	{
		name: "Zeigarnik Effect",
		overview: "People remember uncompleted or interrupted tasks better than completed tasks.",
	}
];

function generateLaws() {
	var option1 = principles[Math.floor(Math.random() * principles.length)];
	principles.splice(principles.indexOf(option1), 1);
	var option2 = principles[Math.floor(Math.random() * principles.length)];
	principles.splice(principles.indexOf(option2), 1);
	var option3 = principles[Math.floor(Math.random() * principles.length)];

	options = [option1, option2, option3];
	correctAnswer = options[Math.floor(Math.random() * options.length)];

	document.getElementById('header').innerHTML = '<h2 class="title">' + correctAnswer.name + '</h2>';
	document.getElementById('Answercard1').innerHTML = '<h3 class="overview">' + options[0].overview + '</h3>';
	document.getElementById('Answercard2').innerHTML = '<h3 class="overview">' + options[1].overview + '</h3>';
	document.getElementById('Answercard3').innerHTML = '<h3 class="overview">' + options[2].overview + '</h3>';

}

function answerCard1Correct() {
	document.getElementById("Answercard1").classList.add("correct");
	document.getElementById("Answercard2").classList.add("reduceOpacity");
	document.getElementById("Answercard3").classList.add("reduceOpacity");
}

function answerCard2Correct() {
	document.getElementById("Answercard1").classList.add("reduceOpacity");
	document.getElementById("Answercard2").classList.add("correct");
	document.getElementById("Answercard3").classList.add("reduceOpacity");
}

function answerCard3Correct() {
	document.getElementById("Answercard1").classList.add("reduceOpacity");
	document.getElementById("Answercard2").classList.add("reduceOpacity");
	document.getElementById("Answercard3").classList.add("correct");
}

function showCorrectLabel() {
	document.getElementById('Correctanswer').innerHTML = '<h2 class="title correctLabel">Correct</h2>';
	document.getElementById('tickdiv').classList.add("drawn");
}

function showIncorrectLabel() {
	document.getElementById('tick').classList.add("displayNone");
	document.getElementById('Incorrectanswer').innerHTML = '<h2 class="title IncorrectLabel">Incorrect</h2>';
	document.getElementById('crossdiv').classList.add("drawn");
}

document.addEventListener('DOMContentLoaded', function () {
	generateLaws();
	var answercard1 = document.getElementById("Answercard1");
	answercard1.addEventListener('click', function () {

		if (options[0].overview == correctAnswer.overview) {
			answerCard1Correct()
			showCorrectLabel();
		} else if (options[1].overview == correctAnswer.overview) {
			answerCard2Correct()
			showIncorrectLabel();
		} else if (options[2].overview == correctAnswer.overview) {
			answerCard3Correct();
			showIncorrectLabel();
		}
	});
	var answercard2 = document.getElementById("Answercard2");
	answercard2.addEventListener('click', function () {
		if (options[0].overview == correctAnswer.overview) {
			answerCard1Correct()
			showIncorrectLabel();
		} else if (options[1].overview == correctAnswer.overview) {
			answerCard2Correct()
			showCorrectLabel();
		} else if (options[2].overview == correctAnswer.overview) {
			answerCard3Correct();
			showIncorrectLabel();
		}
	});
	var answercard3 = document.getElementById("Answercard3");
	answercard3.addEventListener('click', function () {
		if (options[0].overview == correctAnswer.overview) {
			answerCard1Correct()
			showIncorrectLabel();
		} else if (options[1].overview == correctAnswer.overview) {
			answerCard2Correct()
			showIncorrectLabel();
		} else if (options[2].overview == correctAnswer.overview) {
			answerCard3Correct();
			showCorrectLabel();
		}
	});
});
