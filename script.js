const kickID = "#kick-tl";
const hihatID = "#hihat-tl";
const snareID = "#snare-tl";

function createNewSound(e) {
	const newSound = $("<div/>")
		.html("<i class='bi bi-soundwave'></i>")
		.attr({
			class: "draggable sound-box",
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
});

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
