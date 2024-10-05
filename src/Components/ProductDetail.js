import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { addProductToCart } from "../Action/index";

const ProductDetail = ({ dispatch, products }) => {
    const { id } = useParams(); 

    

   
    const productId = Number(id);
    const product = products.find(item => item.id === productId); 

    if (!product) {
        return <div>Loading...</div>;
    }

    const {
        title,
        images,
        brand,
        price,
        cpu,
        camera,
        size,
        weight,
        display,
        battery,
        memory,
        description,
    } = product;

    const onCart = () => {
        dispatch(addProductToCart(product));
    };

    return (
        <div className="product-detail-container">
            <aside className="product-image">
                <img 
                    src={images[0]} // تأكد من أن images هو مصفوفة من الصور
                    alt={title} 
                    className="img-fluid" // استخدم img-fluid لجعل الصورة تتناسب مع الحاوية
                />
            </aside>
            <article className="card-bodyy">
                <h3 className="title mb-3">{title}</h3>
                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency">$</span><span className="num">{price}</span>
                    </span>
                </p>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Brand</dt>
                    <dd className="text-capitalize">{brand}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Size</dt>
                    <dd>{size}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Camera</dt>
                    <dd>{camera}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>CPU</dt>
                    <dd>{cpu}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Memory</dt>
                    <dd>{memory}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Display</dt>
                    <dd>{display}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Battery</dt>
                    <dd>{battery}</dd>
                </dl>
                <hr />
                <button
                    onClick={onCart}
                    className="btnn btn-lg btn-outline-primary text-uppercase">
                    <i className="fa fa-shopping-cart" /> Add to cart
                </button>
            </article>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.cart.products 
    };
};

export default connect(mapStateToProps)(ProductDetail);
