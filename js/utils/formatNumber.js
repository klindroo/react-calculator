/*
	Formats numbers to an easier to read form (finnish)
	Examples:
	4536.42 => 4 536.42
	75211235 => 75 211 235
 */
export default (value) => {
	const parts = (""+value).split(".");
	return parts[0]
			.split("")
			.reverse()
			.map((c, i) => { return i % 3 === 2 ? " " + c : c; })
			.reverse()
			.join("")
			+ (parts[1] ? "," + parts[1] : "");
}