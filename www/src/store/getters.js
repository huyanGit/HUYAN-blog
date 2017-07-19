export const countByTag = state => {
	let count = 0;
	const blogs = state.blog.blogs
	const tag = state.tag.tag
	for (let i = 0; i < blogs.length; i++) {
		for (let j = 0; j < blogs[i].tags.length; j++) {
			if (blogs[i].tags[j].tag_name == tag.tag_name)
				count ++
		}
	}
	return count
}

export const countByCategory = state => {
	let count = 0;
	const blogs = state.blog.blogs
	const category = state.category.category
	for ( let i = 0; i < blogs.length; i++ ) {
		if( blogs[i].category.category_name == category.category_name )
			count ++
	}
	return count
}