import React from 'react';
import banner_amazon from '../images/banner_amazon.jpg';
import '../CSS/Home.css'
import Products from './Products';
import amzon_first from "../images/amzon_first.jpg"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={banner_amazon} alt="banner_img" />
            <div className="home_row">
                <Products
                    id="12567"
                    rating={5}
                    pricing={11.27}
                    title="Dell Laptop Battery for Dell Inspiron 14/ 17, Inspiron 1440,"
                    image='https://m.media-amazon.com/images/I/61SlLIZzVNL._AC_UL320_.jpg'
                />
                <Products
                    id="1"
                    rating={5}
                    pricing={11.27}
                    title="set of 4 colorFull T-shirts"
                    image='https://m.media-amazon.com/images/I/81Qc6O6BgyS._AC_UL320_.jpg'
                />
            </div>
            <div className="home_row">
                <Products
                    id="12"
                    rating={5}
                    pricing={37.99}
                    title="Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                />
                <Products
                    id="123"
                    rating={5}
                    pricing={379.99}
                    title="SAMSUNG Galaxy Watch 4 Classic 46mm Smartwatch "
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                />
                <Products
                    id="12345"
                    rating={5}
                    pricing={19.99}
                    title="Mens Belt, Chaoren Ratchet Belt Dress with 1 3/8 Genuine Leather, Slide Belt with Easier Adjustable Buckle, Trim to Fit"
                    image="https://m.media-amazon.com/images/I/71Xg3TBalCL._AC_UL320_.jpg"
                />
            </div>
            <div className="home_row">
                <Products
                    id="1234"
                    rating={5}
                    pricing={29.99}
                    title="Mounting Dream Full Motion TV Wall Mount for Most 26-55 Inch TVs, Wall Mount for TV with Swivel Articulating Arms, Perfect Center Design TV Mounts Wall, up to VESA"
                    image={amzon_first}
                />
            </div>


        </div>
    )
}

export default Home
