const Product = (props) => {
    console.log(props);
     return (  <><p>product name: {props.name}</p><p>product price: {props.price}</p><p>discount: {props.children}</p></>
        );
}
 



export default Product;


