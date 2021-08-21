// Memory Section
function extraMemoryPriceUpdate(memoryPrice) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = memoryPrice;
}

document.getElementById('memory-8gb').addEventListener('click', function () {
    extraMemoryPriceUpdate(0);
})

document.getElementById('memory-16gb').addEventListener('click', function () {
    extraMemoryPriceUpdate(180)
})

// Storage Section
function extraStoragePriceUpdate(storagePrice) {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = storagePrice;
}

document.getElementById('ssd-256gb').addEventListener('click', function () {
    extraStoragePriceUpdate(0);
})
document.getElementById('ssd-512gb').addEventListener('click', function () {
    extraStoragePriceUpdate(100);
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
    extraStoragePriceUpdate(180);
})

// Delivery Charge Section
function deliveryChargeUpdate(charge) {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = charge;
}

document.getElementById('delivery-free').addEventListener('click', function () {
    deliveryChargeUpdate(0);
})

document.getElementById('delivery-20usd').addEventListener('click', function () {
    deliveryChargeUpdate(20)
})