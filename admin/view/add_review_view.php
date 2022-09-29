
<h2>Add Review</h2>
<?php if(isset($message)){echo "<div class='alert alert-success' role='alert'>$message</div>";}?>
<form action="" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <label class="small mb-1" for="blog_title">Name</label>
        <input name="blog_title" class="form-control py-4" id="blog_title" type="text" />
    </div>

    <div class="form-group">
        <label class="small mb-1" for="blog_content">Review</label>
        <textarea name="blog_content" id="blog_content" cols="30" rows="10" class="form-control py-4"></textarea>
    </div>

    <div class="form-group">
        <label class="small" for="blog_img">upload Image</label>
        <input name="blog_img" class="form-control" id="blog_img" type="file" />
    </div>

    <select class="my-4 form-group form-select" aria-label="Default select example">
        <option selected>Your Reating</option>
        <option value="1">One Start</option>
        <option value="2">Two Start</option>
        <option value="3">Three Start</option>
        <option value="4">Four Start</option>
        <option value="5">Five Start</option>
    </select>
    <!-- submit --->
    <input type="submit" name="add_review" value="Add Review" class="form control py-2 btn btn-block btn-primary">
</form>