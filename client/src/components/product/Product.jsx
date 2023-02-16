import React, {useState} from 'react';

const Product = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handleByProductHandler = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
        },500);
    }

    return (
        <div className='authorization'>
            {isLoading && <span>...loading</span>}
            {isSuccess && <span>Оплата прошла успешно</span>}
            <button className="authorization__btn" onClick={handleByProductHandler}>Купить</button>
        </div>
    );
};

export default Product;
