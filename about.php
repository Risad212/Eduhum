<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="with=device-width, initial-scale=1.0">
  <title>College Website</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="assets/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/pages/allpage.css">
</head>
<body>

  <section class="sub-header">
    <div class="container">
       <?php include_once('./includes/navbar.php') ?>
    </div>
    <h1>About Us</h1>
  </section>

  <!---about us content---->
  <section class="about-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-5 d-flex align-items-center">
          <div class="about-col pe-3">
            <h1>We are the world's largest University</h1>
            <p>Lorem ipsum dolor sit amet, consectetuur adipiscing elit.
              Pellentesque aliquet turpis nulla, eleifend faucibus est sollicituding ut.
              Maecenas ut venenatis ex, et dapibus purus Donec sit.
              amet nisl non justo malesuada fermentum. Donex eget felis dolor.
              suspendisse
              condimentum vestibulum ex ac cursus. Nam pharetra viverra efficitur.
              Sed pellentesques luctus arcu, quis finibus nibh luctus mattis.</p>
            <a href="#" class="red-btn">EXPLORE NOW</a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="about-col">
            <img class="w-100" src="assets/images/about.jpg" alt="about-eduhum">
          </div>
        </div>
      </div>
    </div>
  </section>


  <!---footer--->
  <section class="footer">
    <h4>About Us</h4>
    <p>Lorem ipsum dolor sit amet, consectetuur adipiscing elit.
      Pellentesque aliquet turpis nulla, eleifend faucibus est <br>
      sollicituding ut. Maecenas ut venenatis ex, et dapibus purus</p>
    <div class="icons">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-linkedin"></i>
      <p>Made with <i class="far fa-heart"></i> by Easy Tutorial</p>
    </div>
  </section>
  
  <!-- js plugin -->
<script src="assets/bootstrap/bootstrap.bundle.min.js"></script>
</body>
</html>