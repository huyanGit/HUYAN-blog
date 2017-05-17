function blogLengthFilter(content, length){
	if(!content){
		return '';
	}
	length = length || 50;
	let text = content.toString();
	text = text.replace(/<[^>]*>|&nbsp;| /g, '').substr(0, length);
	return text;
}
function timeFilter(time){
	if(!time){
		return '';
	}
	let timeString = time.toString();
	timeString = timeString.substr(0, 19).replace('T', ' ');
	return timeString;	
}
export {blogLengthFilter, timeFilter}