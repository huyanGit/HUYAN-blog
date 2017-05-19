import instance from './instance'

var tagResource = {
	getTags: function(){
		return instance.get('/tag');
	},
	getTagById: function(tagId){
		return instance.get('/tag/' + tagId);
	}
}
export default tagResource;
