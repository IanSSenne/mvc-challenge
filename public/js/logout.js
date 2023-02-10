async function logout() {
	const response = await fetch("/api/auth/logout", {
		method: "POST",
	});
	if (response.ok) {
		document.location.replace("/");
	} else {
		alert("Failed to log out");
	}
}
let btn = document.querySelector("#logout-button");
if (btn)
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		logout();
	});

setTimeout(logout, 1000 * 60 * 60 * (1 / 6));
