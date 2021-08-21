// Memory Section
function extraMemoryPriceUpdate(memoryPrice) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = memoryPrice;
}

document.getElementById('memory-8gb').addEventListener('click', function () {
    extraMemoryPriceUpdate(0);
    calculateTotal('extra-memory-cost');
})

document.getElementById('memory-16gb').addEventListener('click', function () {
    extraMemoryPriceUpdate(180)
    calculateTotal('extra-memory-cost');
})

// Storage Section
function extraStoragePriceUpdate(storagePrice) {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = storagePrice;
}

document.getElementById('ssd-256gb').addEventListener('click', function () {
    extraStoragePriceUpdate(0);
    calculateTotal('extra-storage-cost');
})
document.getElementById('ssd-512gb').addEventListener('click', function () {
    extraStoragePriceUpdate(100);
    calculateTotal('extra-storage-cost');
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
    extraStoragePriceUpdate(180);
    calculateTotal('extra-storage-cost');
})

// Delivery Charge Section
function deliveryChargeUpdate(charge) {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = charge;
}

document.getElementById('delivery-free').addEventListener('click', function () {
    deliveryChargeUpdate(0);
    calculateTotal('delivery-charge')
})

document.getElementById('delivery-20usd').addEventListener('click', function () {
    deliveryChargeUpdate(20)
    calculateTotal('delivery-charge')
})

// Calculate Total
function calculateTotal(product) {
    const element = document.getElementById(product).innerText;
    const total = document.getElementById('total-price').innerText;
    const totalPrice = parseFloat(element) + parseFloat(total);

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-after-promo').innerText = totalPrice;
}

// Promocode Apply
document.getElementById('promo-apply-btn').addEventListener('click', function () {
    const promoInputField = document.getElementById('promocode-input');
    const promoCode = promoInputField.value;
    const previousTotal = document.getElementById('total-after-promo').innerText;
    const promodiscount = parseFloat(previousTotal) * 20 / 100;
    if (promoCode == 'stevekaku') {
        document.getElementById('total-after-promo').innerText = parseFloat(previousTotal) - promodiscount;
    }

    promoInputField.value = '';
})