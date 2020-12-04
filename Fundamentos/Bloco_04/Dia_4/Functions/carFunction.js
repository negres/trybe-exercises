let statusCar = 'desligado';
let speed = 0;
let steering = 0;

function onOff() {
  if(statusCar === 'desligado') {
    statusCar = 'ligado';
  } else {
    statusCar = 'desligado';
  }
}

function speedUp (speedingUp) {
  speed = speed + speedingUp;
  return "Acelerando a " + speed + "m/s²";
}

function slowDown (decelerate) {
  speed = speed - decelerate;
  return "Desacelerando para " + speed + "m/s²"
}

function rotateSteering (angle) {
  steering = angle;
  return steering + "º";
}