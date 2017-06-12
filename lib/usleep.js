module.exports = function usleep (micro_seconds=1000) {
    let milli_seconds = micro_seconds / 1000
	return new Promise( (resolve, reject) => {
		return setTimeout( ()=> {
			resolve(true)
		}, milli_seconds)
	})
}
