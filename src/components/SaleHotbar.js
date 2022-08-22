// React component for the SaleHotbar product bar
//CIS453L - Project Pt 3
import React from "react";
import './BestSellers.css';

const SaleHotbar = () => (
    <div>
        <h1>On Sale</h1>
        <section className="product-grid">
            <div className="grid-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxMnFagxI2oCqIrFDuz5ruQUYBhyyfolYkjS48VVeS0brCRSurStwtuu9-UTqvQ3DT0U&usqp=CAU" alt="pack of black rubber bands" />
                <h3>Rubber Bands - Black, 100 - $1.99</h3>
            </div>
            <div className="grid-item">
                <img src="https://i5.walmartimages.com/asr/68b7defa-81c0-43a4-88fb-e08d2f9b2aaf.a2da9016b11d6b74b35fda6337be3012.jpeg" alt="box of HP copy paper" />
                <h3>3 Pack - HP Copy Paper 750 Sheets - $16.99</h3>
            </div>
            <div className="grid-item">
                <img src="https://cdn.arteza.com/products/20/05/retractable-black-gel-ink-pens-set-of-24_JPpQhi1x.jpg" alt="group of black gel pens" />
                <h3>Arteza Black Gel Pen 12pk - $4.99</h3>
            </div>
            <div className="grid-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBF40ovrmFexLS3p092Dq8tGZpwXCOPZ0YhC_oDG4VzHdZGde3vojHHvhew3h951lTOQ&usqp=CAU" alt="stack of envelopes" />
                <h3>100 Brown Medium Envelopes - $8.59</h3>
            </div>
            <div className="grid-item">
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06482759.png" alt="box of HP Laserjet Black Toner" />
                <h3>2 Pack - HP Laserjet Toner - $25.00</h3>
            </div>
        </section>
    </div>
)

export default SaleHotbar;