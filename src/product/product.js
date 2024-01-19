import products_data from '../resources/data/product_data_dump.json';

const ParseProductsData = () => {
    const productDataParsed = [];
    products_data.forEach(element => {
        const id = element['Uniq Id']
        const desc = element['About Product']
        const imageList = element['Image']
        const name = element['Product Name']
        const price = element['Selling Price']
        const modelNumber = element['Model Number']
        const productElem = {
          "id" : id,
          "desc" : desc,
          "imageList" : imageList.split('|'),
          "name" : name,
          "price" : price,
          "modelNumber" : modelNumber 
        };

        productDataParsed.push(productElem);
        // console.log(productElem);
    });

    return productDataParsed;
}

function Product({ productData }) {
    console.log(productData.name);
    return (
        <div>
            {/* <img src={productData.imageList[0]}/> */}
            <h1>{productData.name}</h1>
            <h2>{productData.desc}</h2>
            <h2>{productData.price}</h2>
        </div>
    );
}

export default function ProductCatalogue() {
    const parsedProductsData = ParseProductsData();

    return (
        <div className='product-catalogue-container'>
            <ul>
                {
                    parsedProductsData.map(product => {
                        return (
                            <li key={product.id}>
                                {/* {product.name} */}
                                <Product productData={product}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );

}