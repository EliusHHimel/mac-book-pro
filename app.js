// Memory Section
function extraMemoryPriceUpdate(memoryPrice) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = memoryPrice;
}

function memoryConfiguration8GB(price) {
    extraMemoryPriceUpdate(price);
    calculateTotal('extra-memory-cost');
}

function memoryConfiguration16GB(price) {
    extraMemoryPriceUpdate(price);
    calculateTotal('extra-memory-cost');

    const memory16GB = document.getElementById('memory-16gb');
    memory16GB.onclick = '';
}

// Storage Section
function extraStoragePriceUpdate(storagePrice) {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = storagePrice;
}
function storageConfiguration(price) {
    extraStoragePriceUpdate(price);
    calculateTotal('extra-storage-cost');
}
function storageConfiguration512(price) {
    extraStoragePriceUpdate(price);
    calculateTotal('extra-storage-cost');

    const ssd512GB = document.getElementById('ssd-512gb');
    ssd512GB.onclick = '';
}
function storageConfiguration1TB(price) {
    extraStoragePriceUpdate(price);
    calculateTotal('extra-storage-cost');

    const ssd1TB = document.getElementById('ssd-1tb');
    ssd1TB.onclick = '';
}

// Delivery Charge Section
function deliveryChargeUpdate(charge) {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = charge;
}

function deliveryChargeFree(charge) {
    deliveryChargeUpdate(charge)
    calculateTotal('delivery-charge')
}

function deliveryCharge20USD(charge) {
    deliveryChargeUpdate(charge)
    calculateTotal('delivery-charge')

    const deliveryWithCharge = document.getElementById('delivery-20usd');
    deliveryWithCharge.onclick = '';
}

// Calculate Total
function calculateTotal(product) {
    const extraMemoryPrice = document.getElementById('extra-memory-cost').innerText;
    const extraStoragePrice = document.getElementById('extra-storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;

    const bestPrice = document.getElementById('best-price').innerText;
    const totalPrice = parseFloat(extraMemoryPrice) + parseFloat(extraStoragePrice) + parseFloat(deliveryCharge) + parseFloat(bestPrice);

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-after-promo').innerText = totalPrice;
}

// Promocode Apply
function promoApply() {
    const promoInputField = document.getElementById('promocode-input');
    const promoCode = promoInputField.value;
    const previousTotal = document.getElementById('total-after-promo').innerText;
    const promodiscount = parseFloat(previousTotal) * 20 / 100;
    if (promoCode == 'stevekaku') {
        document.getElementById('total-after-promo').innerText = parseFloat(previousTotal) - promodiscount;
    }

    promoInputField.value = '';

    const element = document.getElementById('promo-apply-btn');
    element.onclick = '';

}