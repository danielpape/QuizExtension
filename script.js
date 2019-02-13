let principles = [{
		name: "Aesthetic Usability Effect",
		overview: "Users often perceive better looking design as design that&#8217;s more usable.",
		link: "https://lawsofux.com/aesthetic-usability-effect.html",
},
	{
		name: "Doherty Threshold",
		overview: "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
		link: "https://lawsofux.com/doherty-threshold.html",
},
	{
		name: "Fitt&#8217;s Law",
		overview: "The time to acquire a target is a function of the distance to and size of the target.",
		link: "https://lawsofux.com/fittss-law.html",
},
	{
		name: "Hick&#8217;s Law",
		overview: "The time it takes to make a decision increases with the number and complexity of choices.",
		link: "https://lawsofux.com/hicks-law.html",
},
	{
		name: "Jakob&#8217;s Law",
		overview: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
		link: "https://lawsofux.com/jakobs-law.html",
},
	{
		name: "Law of Common Region",
		overview: "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
		link: "https://lawsofux.com/law-of-common-region.html",
},
	{
		name: "Law of Pr&auml;gnanz",
		overview: "People will perceive and interpret ambiguous or complex images as the simplest form possible, because it is the interpretation that requires the least cognitive effort of us.",
		link: "https://lawsofux.com/law-of-pragnanz.html",
},
	{
		name: "Law of Proximity",
		overview: "Objects that are near each other tend to be grouped together.",
		link: "https://lawsofux.com/law-of-proximity.html",
},
	{
		name: "Law of Similarity",
		overview: "The human eye tends to perceive comparable elements in a design as a complete picture, shape, or group, even if those elements are separated.",
		link: "https://lawsofux.com/law-of-similarity.html",
},
	{
		name: "Law of Uniform Connectedness",
		overview: "Elements that have visual similarities are perceived as more related than elements with no similarities.",
		link: "https://lawsofux.com/law-of-uniform-connectedness.html",
},
	{
		name: "Miller&#8217;s Law",
		overview: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
		link: "https://lawsofux.com/millers-law.html",
},
	{
		name: "Occam&#8217;s Razor",
		overview: "Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected.",
		link: "https://lawsofux.com/occams-razor.html",
},
	{
		name: "Pareto Principle",
		overview: "For many events roughly 80% of the effects come from 20% of the causes.",
		link: "https://lawsofux.com/pareto-principle.html",
},
	{
		name: "Parkinson&#8217;s Law",
		overview: "Any task will inflate until all of the available time is spent.",
		link: "https://lawsofux.com/parkinsons-law.html",
},
	{
		name: "Postel&#8217;s Law",
		overview: "Be liberal in what you accept, and conservative in what you send.",
		link: "https://lawsofux.com/postels-law.html",
},
	{
		name: "Serial Position Effect",
		overview: "Users have a propensity to best remember the first and last items in a series.",
		link: "https://lawsofux.com/serial-position-effect.html",
},
	{
		name: "Tesler&#8217;s Law",
		overview: "For any system there is a certain amount of complexity which cannot be reduced.",
		link: "https://lawsofux.com/teslers-law.html",
},
	{
		name: "Von Restorff Effect",
		overview: "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
		link: "https://lawsofux.com/von-restorff-effect.html",
},
	{
		name: "Zeigarnik Effect",
		overview: "People remember uncompleted or interrupted tasks better than completed tasks.",
		link: "https://lawsofux.com/zeigarnik-effect.html",
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
	document.getElementById('Answercard1').innerHTML = '<h3 class="overview">' + options[0].overview + '</h3><p class="moreInfoLink">';
	document.getElementById('Answercard2').innerHTML = '<h3 class="overview">' + options[1].overview + '</h3><p class="moreInfoLink">';
	document.getElementById('Answercard3').innerHTML = '<h3 class="overview">' + options[2].overview + '</h3><p class="moreInfoLink">';

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
	var answercard1 = document.getElementById("header");
	answercard1.addEventListener('click', function () {
		location.reload();
	});
});
