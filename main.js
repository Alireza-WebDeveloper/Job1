// !! Packages
import './style.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// !! Dom Elements
const app = document.querySelector('#app');
// !! View
import * as CourselProductElem from './view/carousel';
import * as ProductElemDevice from './view/product';

app.innerHTML = `
  <h1 class='text-center fs-3'>دوره های آموزشی</h1>
  ${CourselProductElem.render()}
  ${ProductElemDevice.render()}
`;
