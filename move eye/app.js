document.querySelector('body').addEventListener('mousemove', function (event) {
  let eyes = document.querySelectorAll('.eye');
  eyes.forEach((eye) => {
    let eyeRect = eye.getBoundingClientRect();
    let eyeCenterX = eyeRect.left + eyeRect.width / 2;
    let eyeCenterY = eyeRect.top + eyeRect.height / 2;

    let angle = Math.atan2(event.pageX - eyeCenterX, event.pageY - eyeCenterY);
    let rotate = (angle*(180 / Math.PI)*-1) + 270;
    console.log(rotate)
    eye.style.transform = `rotate(${rotate}deg)`;
  });
});
