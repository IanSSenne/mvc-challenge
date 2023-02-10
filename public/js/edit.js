function updatePost(e) {
	e.preventDefault();
	var post = {
		title: document.querySelector("#title").value,
		body: document.querySelector("#content").value,
	};
	let id = document.querySelector("#id").value;
	fetch("/api/post/" + id, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	}).then((_) => {
		if (_.ok) {
			window.location.replace("/dashboard");
		} else {
			alert("failed to update post.");
		}
	});
}

function deletePost() {
	let id = document.querySelector("#id").value;
	fetch("/api/post/" + id, {
		method: "DELETE",
	}).then((_) => {
		if (_.ok) {
			window.location.replace("/dashboard");
		} else {
			alert("failed to delete post.");
		}
	});
}
function createPost(e) {
	e.preventDefault();
	var post = {
		title: document.querySelector("#title").value,
		body: document.querySelector("#content").value,
	};
	let id = document.querySelector("#id").value;
	fetch("/api/post", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(post),
	}).then((_) => {
		if (_.ok) {
			window.location.replace("/dashboard");
		} else {
			alert("failed to update post.");
		}
	});
}
document.querySelector("#create")?.addEventListener("submit", createPost);
document.querySelector("#edit")?.addEventListener("submit", updatePost);
document.querySelector("#delete")?.addEventListener("click", deletePost);
