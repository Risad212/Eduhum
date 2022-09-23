<?php 
  $blogs = $obj->display_blog();
?>
<h2>Mange Blog</h2>
<div class="table-responsive">
<table class="table">
  <thead>
    <tr>
       <th>ID</th>
       <th>Title</th>
       <th>content</th>
       <th>Thumnail</th>
       <th>Action</th>
    </tr>
  </thead>
  <tbody>
     <?php while($blogdata=mysqli_fetch_assoc($blogs)){?>
     <tr>
       <td><?php echo $blogdata['blog_id']?></td>
       <td><?php echo $blogdata['blog_title']?></td>
       <td><?php echo $blogdata['blog_content']?></td>
       <td>
        <img height="100px" src="../upload/<?php echo $blogdata['blog_img']?>" alt="">
      </td>
      <td>
          <a href="#" class="btn btn-success">Edit</a>
          <a href="#" class="btn btn-danger">Delate</a>
       </td>
     </tr>
     <?php }?>
  </tbody>
</table>
</div>