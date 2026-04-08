// WhatsApp Form
document.getElementById('customerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const service = document.getElementById('serviceType').value;
    const msg = `*New Premium Lead*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}`;
    window.open(`https://wa.me/919625596391?text=${msg}`, '_blank');
});