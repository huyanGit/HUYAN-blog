import instance from "./instance"

var categoryResource = {
	getCategories: function(){
		return instance.get('/category');
	}
};

export default categoryResource;
