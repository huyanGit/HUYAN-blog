import instance from './instance'

var tagResource = {
	getTags: function(){
		return instance.get('/tag');
	},
	getTagById: function(tagName){
		return instance.get('/tag/' + tagName);
	}
}
export default tagResource;
