<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="with=device-width, initial-scale=1.0">
  <title>College Website</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
    rel="stylesheet">
  <!--==========================================-->
  <link rel="stylesheet" href="assets/owl/owl.carousel.min.css">
  <!--==========================================-->
  <link rel="stylesheet" href="assets/owl/owl.theme.default.css">
  <!--==========================================-->
  <link rel="stylesheet" href="assets/bootstrap/bootstrap.min.css">
  <!--==========================================-->
  <link rel="stylesheet" href="assets/css/pages/allPage.css">
</head>
<body>

  <section class="sub-header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="assets/images/logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="course.html">Course</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item nav-button">
                <a class="nav-link" href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
   <h1>Contact Us</h1>
</section>

  <!--- location ---->
  <section class="location">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55565170.29301636!2d-132.08532758867793!3d31.786060306224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1617595456847!5m2!1sen!2sbd"
      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </section>

  <!---contact us ---->
  <section class="contact-us">
    <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12">
      <div class="contact-col">
        <div>
          <i class="fas fa-home"></i>
          <span>
            <h5>XYZ Road, ABC Building</h5>
            <p>United State of America</p>
          </span>
        </div>

        <div>
          <i class="fas fa-phone"></i>
          <span>
            <h5>+1 0123456789</h5>
            <p>Munday to Satarday, 10AM to 6PM</p>
          </span>
        </div>

        <div>
          <i class="fas fa-envelope"></i>
          <span>
            <h5>info.abc@gmail.com</h5>
            <p>Email us your query</p>
          </span>
        </div>
      </div>
    </div>
      <!-- second column -->
      <div class="col-lg-6 col-md-12">
       <div class="contact-col">
        <form action="form-handeller.php" method="post">
          <input type="text" name="name" placeholder="Enter your name" required>
          <input type="email" name="email" placeholder="Enter email address" required>
          <input type="text" name="subject" placeholder="Enter your subject" required>
          <textarea rows="8" name="message" placeholder="Message" required></textarea>
          <button type="submit" class="main-button">Send Message</button>
        </form>
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
      <p>Made with <i class="far fa-heart"></i> by Risad</p>
    </div>
  </section>

<!--- ========================= --->
<script src="assets/bootstrap/bootstrap.bundle.min.js"></script>
</body>
</html>