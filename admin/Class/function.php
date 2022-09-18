<?php
  class adminClass{
    private $conn;
    public function __construct(){
        $this->con = mysqli_connect('localhost','root','','eduhum_storge');
        if(!$this->conn){
            die('database faild');
        }
    }
  }
?>