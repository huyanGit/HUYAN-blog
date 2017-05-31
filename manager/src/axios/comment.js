import instance from './instance'
var commentResource = {
	getAllComments: function(){
		return instance.get('/comment');
	},
	deleteOneComment: function(commentId){
		return instance.delete('/comment/' + commentId);
	}
};
export default commentResource;