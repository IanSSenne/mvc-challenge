function comment(evt) {
	evt.preventDefault();
	const comment_text = document.querySelector("#comment_text").value.trim();
	const post_id = document.querySelector("#post_id").value;

	if (comment_text) {
		fetch("/api/post/comment", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ comment_text, post_id }),
		}).then((res) => {
			if (res.ok) {
				document.location.reload();
			} else {
				alert("Failed to post comment");
			}
		});
	}
}

document.querySelector("#comment-form").addEventListener("submit", comment);
