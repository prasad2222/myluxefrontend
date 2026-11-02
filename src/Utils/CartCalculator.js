export const cartCalculator = (cart, deliveryType, coupon) => {
    // const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    let subtotal = cart.reduce((acc, item) => {
        const qty = item.quantity || 1;

        // console.log("Item:", item.title);
        // console.log("Quantity:", qty);
        // console.log("Price:", item.price);
        // console.log("Total for item:", item.price * qty);

        return acc + item.price * qty;
    }, 0);

    subtotal = Math.round(subtotal);

    let discount = 0;
    let tax = 0;
    let total = 0;

    let deliveryCharge = 0;
    switch (deliveryType) {
        case 'standard':
            deliveryCharge = 0;
            break;
        case 'express':
            deliveryCharge = 99;
            break;
        case 'overnight':
            deliveryCharge = 199;
            break;
        default:
            break;
    }

    if (coupon === "LUXE20") {
        discount = Math.floor(subtotal * 0.2);
    } else if (coupon === "FREESHIP") {
        discount = 100;
    } else if (coupon === "FIRST10") {
        discount = Math.floor(subtotal * 0.1);
    } else {
        discount = 0;
    }

    tax = Math.floor((subtotal - discount) * 0.18);
    total = Math.round( subtotal + deliveryCharge - discount + tax);

    return { subtotal, deliveryCharge, discount, tax, total };
}

    