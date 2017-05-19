<template>
  <div class="blog-archive">
    <div v-for="year in archives">
      <div class="year">{{year.year}}<span class="blog-num">（共有{{year.count}}篇文章）</span></div>
      <ul>
        <li v-for="blog in year.blogs">
          <span class="time">{{blog.create_at | timeFilter}}</span>
          <router-link :to="'/blog/' + blog._id" class="title">{{blog.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import archiveResource from '../../axios/archive'
import {timeFilter} from '../../utils/filters'
export default {
  data () {
    return {
      archives: []
    }
  },
  methods: {
    getArchives: function(){
      var vm = this;
      archiveResource.getArchives().then(function(res){
        vm.archives = res.data;
      });
    }
  },
  filters:{
    timeFilter: function(time){
      return timeFilter(time).substr(0,10);
    }
  },
  created(){
    return this.getArchives();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-archive{
	width: 800px;
	margin: 30px auto;
}
.year{
	font-size: 22px;
  color: #666;
}
li{
  list-style: none;
  height: 40px;
  line-height: 40px;
}
a:hover{
  color:#1D8CE0;
}
.time{
  margin-right:15px;
  font-size: 14px;
  color: #555;
}
.title{
  font-size: 16px;
  color:#666;
}
.blog-num{
  font-size: 16px;
  margin-left: 10px;
  color: #999;
  font-weight: 200;
}
</style>
