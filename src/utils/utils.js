/*
 * Author: Jay Mark
 * Email: admin@majie.co
 * Website: http://majie.co
 */



/**
 * Extract the parameter value from the current URL (?clientID=0&param=4)
 *
 * @method getParameterByName
 * @param name {String} parameter to search for
 * @return {String} null or the value found
 */
export function getParameterByName (name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
	let regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
	let results = regex.exec(window.location.search)
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
}
