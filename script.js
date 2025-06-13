// Variables para producto actual
let currentProduct = {
  title: '',
  price: ''
};

// Detecta todos los botones "Comprar" y les agrega evento para abrir modal de pago
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    // Verifica que los términos estén aceptados
    if (!localStorage.getItem("terminosAceptados")) {
      document.getElementById("terminosModal").style.display = "flex";
      return;
    }

    // Busca el contenedor del producto
    const productCard = btn.closest('.product-item');
    if (!productCard) return;

    // Obtiene título y precio
    currentProduct.title = productCard.querySelector('.product-title').innerText;
    currentProduct.price = productCard.querySelector('.product-price').innerText;

    // Muestra modal de pago
    const modal = document.getElementById('buyModal');
    if (modal) modal.style.display = 'flex';

    // Resetea selección previa
    const paymentSelect = document.getElementById('paymentMethod');
    const qrDiv = document.getElementById('qrDisplay');
    const sendBtn = document.getElementById('sendWhatsApp');
    if (paymentSelect) paymentSelect.selectedIndex = 0;
    if (qrDiv) qrDiv.innerHTML = '';
    if (sendBtn) sendBtn.disabled = true;
  });
});

// Función para cerrar modal
function closeModal() {
  const modal = document.getElementById('buyModal');
  if (modal) modal.style.display = 'none';

  const qrDiv = document.getElementById('qrDisplay');
  if (qrDiv) qrDiv.innerHTML = '';

  const paymentSelect = document.getElementById('paymentMethod');
  if (paymentSelect) paymentSelect.selectedIndex = 0;
}

// Cerrar modal con botón 'x'
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', closeModal);
});

// Cerrar modal si clic fuera del contenido
window.addEventListener('click', function(e) {
  const modal = document.getElementById('buyModal');
  if (e.target === modal) closeModal();
});

// Cerrar modal con tecla Escape
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Mostrar QR y habilitar botón enviar WhatsApp al seleccionar método de pago
document.getElementById('paymentMethod').addEventListener('change', function() {
  const method = this.value;
  const qrMap = {
    "BNB": "https://i.ibb.co/qLKP1Jm5/IMG-20250525-WA0000.jpg",
    "Tigo Money": "https://i.ibb.co/67hBspQ1/IMG-20250525-WA0001.jpg",
    "Yape": "https://i.ibb.co/XYZYAPE.png"
  };

  const qrDiv = document.getElementById('qrDisplay');
  const sendBtn = document.getElementById('sendWhatsApp');

  if (method && qrMap[method]) {
    qrDiv.innerHTML = `<p>Escanea el QR de <strong>${method}</strong> para pagar:</p>
                       <img src="${qrMap[method]}" alt="QR de ${method}" style="width: 200px; display: block; margin: 10px auto">`;
    sendBtn.disabled = false;
  } else {
    qrDiv.innerHTML = '';
    sendBtn.disabled = true;
  }
});

// Enviar mensaje WhatsApp con info compra y método
document.getElementById('sendWhatsApp').addEventListener('click', function() {
  const method = document.getElementById('paymentMethod').value;
  if (!method) {
    alert('Por favor selecciona un método de pago.');
    return;
  }
  const msg = `Hola, quiero confirmar la compra de *${currentProduct.title}* por *${currentProduct.price}*.\nHe pagado con *${method}*. Aquí adjunto el comprobante.`;
  const url = `https://wa.me/59172386302?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});

// Mostrar modal de términos al cargar si no están aceptados
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("terminosAceptados")) {
    document.getElementById("terminosModal").style.display = "flex";
  }
});

// Aceptar términos
function aceptarTerminos() {
  localStorage.setItem("terminosAceptados", "true");
  document.getElementById("terminosModal").style.display = "none";
}

// Rechazar términos
function rechazarTerminos() {
  alert("Debes aceptar los términos para continuar.");
  window.location.href = "https://www.google.com";
}

// Menú toggle (si tienes menú)
const menuToggle = document.getElementById('menuToggle');
const popupMenu = document.getElementById('popupMenu');

if (menuToggle && popupMenu) {
  menuToggle.addEventListener('click', function() {
    popupMenu.style.display = (popupMenu.style.display === 'block') ? 'none' : 'block';
  });

  window.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !popupMenu.contains(event.target)) {
      popupMenu.style.display = 'none';
    }
  });
}
