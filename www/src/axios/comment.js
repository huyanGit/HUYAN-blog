import instance from './instance'

var commentResource = {
	createComment: function(data){
		return instance.post('/comment', data);
	},
	getAllComments: function(){
		return instance.get('/comment');
	}
};

export default commentResource;