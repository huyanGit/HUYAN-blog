<template>
    <div class="create-blog">
			<el-form label-position="top" label-width="80px" :model="ruleForm">
			  <el-form-item label="文章标题" required>
			    <el-input v-model="ruleForm.title"></el-input>
			  </el-form-item>
        <el-form-item label="文章标签" required>
            <el-tag
              v-for="tag in ruleForm.tags"
              :closable="true"
              type="primary"
              @close="handleClose(tag)"
               >
              {{tag.name}}
            </el-tag>
          <el-button icon="plus" size="large" @click.native="showDialog" style="vertical-align: middle; margin: 10px;"></el-button>
          <transition name="fade">
            <div class="el-form-item__error" v-show="tagsValid">{{ tagsError }}</div>
          </transition>
        </el-form-item>
			  <el-form-item label="文章分类" required>
			    <el-input v-model="ruleForm.category"></el-input>
			  </el-form-item>
			  <el-form-item>
		    	<el-button type="primary">提交</el-button>
			    <el-button>重置</el-button>
			  </el-form-item>

			</el-form>
			<!-- 弹框 -->
      <el-dialog title="添加活动标签"  v-model="dialogFormVisible" top="35%">
        <el-form :model="dialogForm">
          <el-form-item>
            <el-input v-model="dialogForm.name" auto-complete="off" ></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click.native="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary"  @click.native="handleAdd(dialogForm.name,dialogForm,ruleForm.tags)">添加</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script>
export default {
	data(){
		return{
      ruleForm:{
      	title: '',
      	category: '',
      	tags:[]
      },
      tagsValid:false,                // 活动标签是否合法
 			dialogForm:{name:''},           // 活动标签对话框表单
      tagsError:'请设置标签',         // 活动标签不合法的提示信息 
    	dialogFormVisible: false,       // 添加活动标签的对话框可见？
    	dialogForm:{name:''},           // 活动标签对话框表单         
		}
	},
	watch: {    // 监控
	  ruleForm: {
	    handler: function (val,oldVal) {
	      store.commit('setRuleForm',this.ruleForm);
	      this.tagsValid = !this.ruleForm.tags.length ? '' :false ;
	      this.ruleFormChange = true ;
	    },
	    deep: true // 深度监控，可以观察到ruleForm内任意属性的变化
	  }
	},
	methods: {
		//显示添加标签对话框
    showDialog: function () {
      if(this.ruleForm.tags.length >=5 ){
        this.$message({
          message: '最多设置5个标签',
          type: 'warning'
        });
      }else{
        this.dialogFormVisible = true;
        this.dialogForm = {};
      }
    },
    //删除标签
    handleClose: function (tag) {
      var index = this.ruleForm.tags.indexOf(tag);
      this.ruleForm.tags.splice(index,1);
    },
    // 添加标签
    handleAdd: function (tag,form,tags) {
      if(tag && tag.trim().length !== 0){
        var isExist = false ;
        tag = tag.trim();
        for(var i=0;i<tags.length; i++){
          if(tags[i].name == tag ){
            isExist = true;
            break
          }
        }
        if(isExist){
          this.$message({
            message: '该标签已存在',
            type: 'warning'
          });
        }else{
          this.dialogFormVisible = false;
          this.dialogFormFenLeiVisible = false;
          tags.push({
            name: tag
          });
        }
      }else{
        this.$message({
          message: '标签不能为空',
          type: 'warning'
        });
      }
    }       
  },
  // 页面初始化
  created: function(){

  }  		
}
</script>
<style>
.create-blog .el-form-item{margin-bottom: 25px;margin-right: 50px;}
.create-blog .el-tag{
	padding: 10px 15px;
	margin:10px;
	vertical-align: middle;
	height: auto;
}
.create-blog .el-tag:first-child{
	margin-left: 0;
}
</style>

