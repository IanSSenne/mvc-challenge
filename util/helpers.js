function summary(text) {
	if (text.length < 100) {
		return text;
	}
	return text.substring(0, 100) + "...";
}
function formatTime(time) {
	return time.toLocaleString();
}
module.exports = { summary, formatTime };
