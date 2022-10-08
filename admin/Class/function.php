<?php
  class adminClass{
    private $conn;
    public function __construct(){
        $this->conn = mysqli_connect('localhost','root','','eduhum_storge');
        if(!$this->conn){
            die('database faild');
        }
    }
     public function add_blog($data){
       $blog_title = $data['blog_title'];
       $blog_content = $data['blog_content'];
       $blog_img = $_FILES['blog_img']['name'];
       $blog_tmp_name = $_FILES['blog_img']['tmp_name'];

       $query = "INSERT INTO blog(blog_title,blog_content,blog_img) VALUES('$blog_title', '$blog_content', '$blog_img')";

       if(mysqli_query($this->conn,$query)){
          move_uploaded_file($blog_tmp_name, '../upload/'.$blog_img);
          return 'post added sucessfully';
       }
    }

    public function display_blog(){
      $query = "SELECT * FROM blog";
      $blog = mysqli_query($this->conn,$query);
      return $blog;
      exit();
      if(mysqli_query($this->conn,$query)){
         $blog = mysqli_query($this->conn,$query);
         return $blog;
      }
    }
  

  
// end of the lin 
}
?>