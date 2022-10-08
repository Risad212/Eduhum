<?php
  if(isset($_POST['add_blog'])){
      $message = $obj->add_blog($_POST);
 }
?>
<div class="add-blog-form mt-3">
<h2>Add Blog</h2>
<?php if(isset($message)){echo "<div class='alert alert-success' role='alert'>$message</div>";}?>
<form action="" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <label class="mb-2" for="blog_title">Blog Title</label>
        <input name="blog_title" class="form-control py-4" id="blog_title" type="text" />
    </div>

    <div class="form-group">
        <label class="mb-2" for="blog_content">Blog content</label>
        <textarea name="blog_content" id="blog_content" cols="30" rows="10" class="form-control py-4"></textarea>
    </div>

    <div class="form-group">
        <label for="#">Add Image</label>
        <label for="blog_img"><i class="fa-solid fa-circle-plus uploadfiles"></i></label>
        <input name="blog_img" class="form-control" id="blog_img" type="file" style="display: none"/>
    </div>
    <!-- submit --->
    <input type="submit" name="add_blog" value="Add Blog" class="form control py-2 btn btn-block btn-primary">
</form>
</div>