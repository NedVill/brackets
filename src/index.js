module.exports = function check(str, bracketsConfig) {
	let totalStr = str;

	for (let i = 0; i < bracketsConfig.length; i++) {
		let replacedStr = replacer(totalStr, bracketsConfig[i].join(''));
		
		if (totalStr !== replacedStr) {
			totalStr = replacedStr;
			i = -1;
		}
	}

	return totalStr.length > 0 ? false : true;

	function replacer(str, replace) {
		
		if (str.length > 0 && str.replace(replace, '') !== str) {
			return replacer(str.replace(replace, ''), replace);
		}

		return str
	}
}