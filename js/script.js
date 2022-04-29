const kickID = "#kick-tl";
const hihatID = "#hihat-tl";
const snareID = "#snare-tl";

function createNewSound(e) {
	const newSound = $("<div/>")
		.html("<i class='bi bi-soundwave'></i>")
		.attr({
			class: "draggable sound-box droppable",
		})
		.draggable({
			axis: "x",
			snap: ".draggable",
			scroll: true,
			containment: e.data.id,
			// obstacle: ".draggable",
			// preventCollision: true,
		});
	$(e.data.id).append(newSound);
}

$("#kick").on("click", { id: kickID }, createNewSound);
$("#hihat").on("click", { id: hihatID }, createNewSound);
$("#snare").on("click", { id: snareID }, createNewSound);

$("#clearAll").click(function () {
	if ($(".sound-selected")[0]) {
		$(".sound-selected").remove();
	} else {
		$(".draggable").remove();
	}
});

$(".container").on("click", "div.draggable", function () {
	$(this).toggleClass("sound-selected");

	$(".vl").draggable({
		axis: "x",
		containment: ".tl-track",
	});

	$("#skip-start").on("click", function () {
		$(".vl").position({
			my: "center",
			at: "left+15",
			of: "#hihat-tl",
		});
	});

	$("#play").on("click", function () {
		playEvent();
	});

	function playEvent() {
		let kick = new Tone.Player("./sounds/kick.wav").toDestination();

		const player = new Tone.Player("./sounds/kick.wav").toDestination();
		player.autostart = true;

		console.log(Tone.Destination.blockTime);

		// const clock = new Tone.Clock(time => {
		// 	console.log(time);
		// }, 1);
		// // clock.start();
	}
});
