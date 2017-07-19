import instance from './instance'

var archiveResource = {
	getArchives: function(){
		return instance.get('/archive');
	}
}

export default archiveResource