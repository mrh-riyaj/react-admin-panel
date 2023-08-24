import { useState } from "react"
import ProductDetails from "./common/ProductDetails"

const NewPost = (props) => {
    const [ProductDetailsPopUp, setProductDetailsPopUp] = useState(false)

    return (
        <section className="new-posts position-r">
            <div onClick={() => setProductDetailsPopUp(true)}>
                <div className="post-images">
                    <img src={props.productImage}/>
                </div>
                <div className="info-section">
                    <span className="price">{props.price}</span>
                    {props.oldPrice && <del className="price old">{props.oldPrice}</del>}
                    <div className="product-name">{props.name}</div>
                    <div className="location">{props.location}</div>
                </div>
            </div>

            {ProductDetailsPopUp && <ProductDetails
                productImage={props.productImage}
                price={props.price}
                oldPrice={props.oldPrice}
                name={props.name}
                condition={props.condition}
                location={props.location}
                onClose={() => setProductDetailsPopUp(false)}
            />}
        </section>
    )
}

export default NewPost