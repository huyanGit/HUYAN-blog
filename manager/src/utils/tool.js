const removeByValue = function (arr, value) {
	for(let i = 0; i < arr.length; i++){
		if(arr[i]._id == value._id){
			arr.splice(i, 1);
			break;
		}
	}
}

export default removeByValue