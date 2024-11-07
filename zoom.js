const image = document.querySelector('.image');
const zoomResult = document.querySelector('.zoom-result');

// Cập nhật đường dẫn hình ảnh vào background của zoom-result
zoomResult.style.backgroundImage = `url(${image.src})`;

// Tăng tỷ lệ phóng to
const zoomFactor = 2.5; // Zoom lớn lên khoảng 2.5 lần

// Tính toán tỉ lệ phóng to
image.addEventListener('mousemove', moveLens);
image.addEventListener('mouseenter', () => zoomResult.style.display = 'block');
image.addEventListener('mouseleave', () => zoomResult.style.display = 'none');

function moveLens(e) {
    const pos = getCursorPos(e);
    const x = pos.x / image.width * 100;
    const y = pos.y / image.height * 100;

    // Cập nhật vị trí của background trong zoom-result
    zoomResult.style.backgroundPosition = `${x}% ${y}%`;
    zoomResult.style.backgroundSize = `${image.naturalWidth * zoomFactor}px ${image.naturalHeight * zoomFactor}px`;
}

function getCursorPos(e) {
    const a = image.getBoundingClientRect();
    const x = e.clientX - a.left;
    const y = e.clientY - a.top;
    return { x: x, y: y };
}