// !! Importing necessary modules and data
import products from '../data/products';
import FormatDate from '../modules/FormatDate';
import FormatNumber from '../modules/FormatNumber';

// !! Creating product items
const createProductItem = products
  .map(({ name, date, price, src }) => {
    return `
    <section class="product_Item col p-1">
      <div class="product_Card">
        <img src="${src}" class="rounded-top-4" />
        <div class="product_Body position-relative rounded-bottom-5 d-flex flex-column gap-2 p-2">
          <h1 class="fs-5 text-center">${name}</h1>
          <div class="d-flex align-items-center justify-content-around flex-wrap">
            <span>${FormatNumber(
              price
            )}  تومان</span><button class="btn btn-outline-light">جزییات</button><span>${FormatDate(
      date
    )}</span>
          </div>
        </div>
      </div>
    </section>
  `;
  })
  .join('');

//  !! Generating HTML element
const productHtml = `
  <div class="product row row-cols-lg-4 row-cols-md-3 row-cols-1 g-3 d-none d-sm-none d-md-flex">
    ${createProductItem}
  </div>
`;

// !! Exporting render function
export const render = () => productHtml;
