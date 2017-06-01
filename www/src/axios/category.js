import instance from "./instance"

var categoryResource = {
	getCategories: function(){
		return instance.get('/category');
	},
	getCategoryById: function(categoryName){
		return instance.get('/category/' + categoryName);
	}
};

export default categoryResource;
