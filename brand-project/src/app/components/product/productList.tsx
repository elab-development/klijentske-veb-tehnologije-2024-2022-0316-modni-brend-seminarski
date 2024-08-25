import Product from "./product";
import { AppProduct } from "../../types/product";

type Props = {
  products: AppProduct[];
}
export default function productList({products}:Props) {
  return (
    <div>
      <div className="container heading">
      <h2 style={{color: 'white'}}><b>HOT ITEMS</b></h2>
      <h4 style={{margin: '2rem auto 6rem auto'}}><a style={{color: 'white'}}>View all</a></h4>
      </div>
      <div  className="container product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
        
    </div>
  )
}
