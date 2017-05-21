import instance from "./instance"

var categoryResource = {
	getCategories: function(){
		return instance.get('/category');
	},
	createOneCategory: function(data){
		return instance.post('/category', data);
	},
	deleteOneCategory: function(categoryId){
		return instance.delete('/category/' + categoryId);
	}
};

export default categoryResource;
