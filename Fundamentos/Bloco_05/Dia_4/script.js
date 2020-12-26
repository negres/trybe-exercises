// Selectors

const checkbox = document.querySelector('#checkbox');
const controllers = document.querySelector('#controllers');
const body = document.querySelector('body');

const handleStyle = {
  element: body,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  paragraphsColor(value) {
    this.element.style.color = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  },
  lineHeight(value) {
    this.element.style.lineHeight = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  }
}


// Functions

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value);
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function getValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]);
    controllers.elements[propertie].value = localStorage[propertie];
  })
}
getValues();

// Events listener

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    controllers.style.display = 'none';
  } else {
    controllers.style.display = ''
  }
});

controllers.addEventListener('change', handleChange);