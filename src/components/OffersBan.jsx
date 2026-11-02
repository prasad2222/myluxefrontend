import OffersBanCss from './OffersBan.module.css'

export const OffersBan = () => {

    return(
        <div className={OffersBanCss.offers_banner}>
            <div>
                <h2>Free express delivery on orders above ₹999</h2>
            </div>
            <div>
                <h2>New arrivals every Monday</h2>
            </div>
            <div>
                <h2>Use code LUXE20 for 20% off</h2>
            </div>
        </div>
    )
}