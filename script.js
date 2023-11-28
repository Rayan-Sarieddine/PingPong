if (confirm("Are you ready to play ping pong!") == true) {
  let xball = 150;
  let yball = 250;
  let xspeed = 5;
  let yspeed = 5;
  let score = 0;
  function setup() {
    createCanvas(500, 500);
  }

  function draw() {
    background("#1affff");
    //paddle
    fill(0);
    rect(mouseX, 475, 90, 15);

    //score
    fill("#00004d");
    textSize(25);
    text("Score is " + score, 10, 40);

    display();
    move();
    bounce();
    hit();
  }

  function display() {
    fill("#00004d");
    circle(xball, yball, 25);
  }

  function move() {
    xball += xspeed;
    yball += yspeed;
  }

  function bounce() {
    if (xball < 0 || xball > 500) {
      xspeed *= -1;
    }

    if (yball < 0 || yball > 500) {
      yspeed *= -1;
    }
  }

  function hit() {
    if (xball > mouseX && xball < mouseX + 90 && yball + 25 >= 475) {
      xspeed *= -1;
      yspeed *= -1;
      score++;
    }
  }
}
