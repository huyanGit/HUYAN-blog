function timeFilter(time){
	if(!time){
		return '';
	}
	let timeString = time.toString();
	timeString = timeString.substr(0, 19).replace('T', ' ');
	return timeString;	
}
export {timeFilter}