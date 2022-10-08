<h2>Add Review</h2>
<?php if(isset($message)){echo "<div class='alert alert-success' role='alert'>$message</div>";}?>
<form action="" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <label class="small mb-1" for="review_name">Name</label>
        <input name="reivew_name" class="form-control py-4" id="review_name" type="text" />
    </div>

    <div class="form-group">
        <label class="small mb-1" for="review_content">Review</label>
        <textarea name="review_content" id="review_content" cols="30" rows="10" class="form-control py-4"></textarea>
    </div>

    <div class="form-group">
        <label class="small" for="review_img">upload Image</label>
        <input name="review_img" class="form-control" id="review_img" type="file" />
    </div>

    <div class="form-group">
    <label class="small" for="review_rating">Your rating</label>
    <select class="form-select" aria-label="Default select example" name="reivew_rating" id="review_rating">
        <option selected>Your Reating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </div>
    <!-- submit --->
    <input type="submit" name="add_review" value="Add Review" class="form control py-2 btn btn-block btn-primary">
</form>