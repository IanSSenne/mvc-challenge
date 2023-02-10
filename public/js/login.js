document.querySelector("#login-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const email = document.querySelector("#login-email").value;
	const password = document.querySelector("#login-password").value;
	const data = { email, password };
	fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.ok) {
			window.location.replace("/");
		} else {
			alert("Invalid username or password");
		}
	});
});

document.querySelector("#signup-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const name = document.querySelector("#signup-username").value;
	const email = document.querySelector("#signup-email").value;
	const password = document.querySelector("#signup-password").value;
	const data = { name, password, email };
	fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((res) => {
		if (res.ok) {
			window.location.replace("/");
		} else {
			alert("Failed to create account");
		}
	});
});
