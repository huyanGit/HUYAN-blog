<template>
  <form method="post"action="http://localhost:3000/upload/picture" enctype="multipart/form-data">
    <el-input type="file" name="picture"></el-input>
    <div class="button"><button type="submit" class="upload">上传</button></div> 
  </form>
</template>
<script>

</script>
<style>
.upload{
  color: #fff;
  background-color: #20a0ff;
  border-color: #20a0ff;
	display: inline-block;
	line-height: 1;
	cursor: pointer;
	border: 1px solid #20a0ff;
	padding: 10px 15px;
	font-size: 14px;
	text-align: center;
	outline: none;
	margin: 0;
	border-radius: 4px;
}
.upload:hover{
	background: #4db3ff;
  border-color: #4db3ff;
  color: #fff;
}
.button{
	margin-top: 10px;
}
</style>