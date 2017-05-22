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
	},
	getOneCategory: function(categoryId){
		return instance.get('/category/' + categoryId);
	},
	updateOneCategory: function(categoryId, data){
		return instance.put('/category/' + categoryId, data);
	}
};

export default categoryResource;
