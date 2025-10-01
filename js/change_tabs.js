// Inicializa pestañas Producto / Imágenes y modal de zoom
document.addEventListener('DOMContentLoaded', function () {
  const productTab = document.getElementById('product-tab');
  const imagesTab = document.getElementById('images-tab');
  const infoSection = document.getElementById('information-section');
  const imagesSection = document.getElementById('images-section');

  if (productTab && imagesTab && infoSection && imagesSection) {
    productTab.addEventListener('click', function () {
      productTab.classList.add('bg-blue-600', 'text-white');
      productTab.classList.remove('bg-gray-100', 'text-gray-700');
      imagesTab.classList.remove('bg-blue-600', 'text-white');
      imagesTab.classList.add('bg-gray-100', 'text-gray-700');
      infoSection.classList.remove('hidden');
      imagesSection.classList.add('hidden');
    });

    imagesTab.addEventListener('click', function () {
      imagesTab.classList.add('bg-blue-600', 'text-white');
      imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
      productTab.classList.remove('bg-blue-600', 'text-white');
      productTab.classList.add('bg-gray-100', 'text-gray-700');
      infoSection.classList.add('hidden');
      imagesSection.classList.remove('hidden');
    });
  }

  // Modal de imagen
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  window.viewImage = function (src) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function () {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  // Cambiar imagen principal desde miniaturas
  window.toExchangeImage = function (imgEl) {
    const main = document.getElementById('img_main');
    if (main && imgEl && imgEl.src) {
      main.src = imgEl.src;
    }
  };
});

