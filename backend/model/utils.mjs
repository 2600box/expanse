
/* This file needs to be statically imported, can't get used with await import() since it uses getImportPath() in this file */

function now_epoch() {
	const now_epoch = Math.floor(Date.now() / 1000);
	return now_epoch;
}

function epoch_to_formatted_datetime(epoch) {
	let formatted_datetime = new Date(epoch * 1000).toLocaleString("en-GB", {timeZone: "UTC", timeZoneName: "short", hour12: true}).toUpperCase().split("/").join("-").replace(",", "").replace(" AM", ":AM").replace(" PM", ":PM");
	const split = formatted_datetime.split(" ");
	(split[1][1] == ":" ? split[1] = "0"+split[1] : null);
	formatted_datetime = split.join(" ");
	return formatted_datetime;
}

function strip_trailing_slash(string) {
	const stripped_string = (string.endsWith("/") ? string.slice(0, -1) : string);
	return stripped_string;
}

/* Probably needs better naming */
function getBackendPath() {
	return process.cwd().replace('C:\\', 'file://');
}

function isWindows() {
	return process.platform === "win32";
}

function getImportPath() {
	return isWindows() ? '..' : getBackendPath();
}

export {
	now_epoch,
	epoch_to_formatted_datetime,
	strip_trailing_slash,
	getBackendPath,
	getImportPath
};
