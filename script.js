/* Modal general */
.modal {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

/* Contenido del modal */
.modal-content {
  background: #fff;
  padding: 25px 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 480px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeIn 0.3s ease-in-out;
  position: relative;
}

/* Animación de fade-in */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Botón cerrar modal (X) */
.close {
  float: right;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  user-select: none;
}

/* Selector de método de pago */
#paymentMethod {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
}

/* Contenedor QR */
#qrDisplay {
  margin-top: 15px;
  text-align: center;
}

/* Botón enviar WhatsApp */
.modal-footer {
  text-align: center;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-buy {
  background-color: #0d6efd;
}

.btn-buy:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

/* Botones de Términos y Condiciones */
.modal-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
}

.btn-aceptar {
  background-color: #198754;
}

.btn-aceptar:hover {
  background-color: #157347;
}

.btn-rechazar {
  background-color: #dc3545;
}

.btn-rechazar:hover {
  background-color: #bb2d3b;
}

/* Texto con scroll en términos */
.terminos-texto {
  max-height: 300px;
  overflow-y: auto;
  text-align: left;
  padding-right: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 15px;
}
