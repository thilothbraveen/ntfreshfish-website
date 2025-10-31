function sendWhatsApp() {
    // Get form values
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let product = document.getElementById('product').value;
    let quantity = document.getElementById('quantity').value;

    // Construct the pre-filled message, using %0A for new line and %20 for space
    let message = `*NEW ORDER (NT FRESH FISH)*%0A%0A*Customer Details:*%0AName: ${name}%0AAddress: ${address}%0APhone: ${phone}%0A%0A*Order Details:*%0AProduct: ${product}%0AQuantity: ${quantity} kg`;
    
    // The WhatsApp number for 'NT FRESH FISH'
    let whatsappNumber = '917904748077'; 
    
    let whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank');
}