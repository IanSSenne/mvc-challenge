document
	.querySelector("#logout-button")
	.addEventListener("click", async (e) => {
		e.preventDefault();
		const response = await fetch("/api/auth/logout", {
			method: "POST",
		});
		if (response.ok) {
			document.location.replace("/");
		} else {
			alert("Failed to log out");
		}
	});
