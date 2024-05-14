// !! Packages
import products from '../data/products';
import FormatDate from '../modules/FormatDate';
import FormatNumber from '../modules/FormatNumber';

// !! Genereate Product Item Mobile
const createProductItemMobile = () =>
  products
    .map(({ name, date, price, src }, index) => {
      return `
    <div class="carousel-item ${
      index === 0 ? 'active' : ''
    }" data-bs-interval="2000">
      <div class="product_Card">
        <img src="${src}" class="rounded-top-4" />
        <div class="product_Body position-relative rounded-bottom-5 d-flex flex-column gap-2 p-2">
          <h1 class="fs-5 text-center">${name}</h1>
          <div class="d-flex align-items-center justify-content-around flex-wrap">
            <span>${FormatNumber(price)} تومان</span>
            <button class="btn btn-outline-light">جزییات</button>
            <span>${FormatDate(date)}</span>
          </div>
        </div>
      </div>
    </div>
    `;
    })
    .join('');

const createCarouselElem = () => {
  const carouselHtml = `
    <div id="carouselExampleInterval" class="carousel slide d-block d-sm-block d-md-none" data-bs-ride="carousel">
      <div class="carousel-inner">
        ${createProductItemMobile()}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
  return carouselHtml;
};

export const render = () => createCarouselElem();
