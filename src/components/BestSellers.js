// React component for the Best Sellers product bar
//CIS453L - Project Pt 3
import React from "react";
import './BestSellers.css';

const BestSellers = () => (
    <div>
        <h1>Best Sellers</h1>
        <section className="product-grid">
            <div className="grid-item">
                <img src="https://i5.walmartimages.com/asr/68b7defa-81c0-43a4-88fb-e08d2f9b2aaf.a2da9016b11d6b74b35fda6337be3012.jpeg" alt="box of HP copy paper" />
                <h3>HP Copy Paper 750 Sheets - $8.50</h3>
            </div>
            <div className="grid-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBF40ovrmFexLS3p092Dq8tGZpwXCOPZ0YhC_oDG4VzHdZGde3vojHHvhew3h951lTOQ&usqp=CAU" alt="stack of envelopes" />
                <h3>100 Brown Small Envelopes - $7.89</h3>
            </div>
            <div className="grid-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxMnFagxI2oCqIrFDuz5ruQUYBhyyfolYkjS48VVeS0brCRSurStwtuu9-UTqvQ3DT0U&usqp=CAU" alt="pack of black rubber bands" />
                <h3>Rubber Bands - Black, 300 - $6.69</h3>
            </div>
            <div className="grid-item">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06482759.png" alt="box of HP Laserjet Black Toner" />
                <h3>HP Laserjet Toner - $18.50</h3>
            </div>
            <div className="grid-item">
                <img src="https://cdn.arteza.com/products/20/05/retractable-black-gel-ink-pens-set-of-24_JPpQhi1x.jpg" alt="group of black gel pens" />
                <h3>Arteza Black Gel Pen 24pk - $12.89</h3>
            </div>
        </section>
    </div>
)

export default BestSellers;