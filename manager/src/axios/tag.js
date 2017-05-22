import instance from './instance'

var tagResource = {
	getTags: function(){
		return instance.get('/tag');
	},
	createOneTag: function(data){
		return instance.post('/tag', data);
	},
	deleteOneTag: function(tagId){
		return instance.delete('/tag/' + tagId);
	},
	getOneTag: function(tagId){
		return instance.get('/tag/' + tagId);
	},
	updateOneTag: function(tagId, data){
		return instance.put('/tag/' + tagId, data);
	}
}
export default tagResource;
