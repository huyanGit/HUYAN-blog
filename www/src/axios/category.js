import instance from "./instance"

var categoryResource = {
	getCategories: function(){
		return instance.get('/category');
	},
	getCategoryById: function(categoryId){
		return instance.get('/category/' + categoryId);
	}
};

export default categoryResource;
