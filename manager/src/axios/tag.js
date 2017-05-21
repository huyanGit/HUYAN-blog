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
	}
}
export default tagResource;
