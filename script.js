// Tạo danh sách số ngẫu nhiên
const numbers = [5, 3, 8, 1, 6];
const sortable = document.getElementById('sortable');

// Tạo các phần tử số trong danh sách
numbers.forEach(number => {
    const li = document.createElement('li');
    li.textContent = number;
    sortable.appendChild(li);
});

// Kích hoạt chức năng kéo thả để sắp xếp
const sortableInstance = Sortable.create(sortable, {
    animation: 150,
    ghostClass: 'ghost'
});

// Kiểm tra thứ tự sắp xếp
document.getElementById('checkOrder').addEventListener('click', () => {
    const items = sortable.querySelectorAll('li');
    let orderCorrect = true;
    
    for (let i = 0; i < items.length - 1; i++) {
        if (parseInt(items[i].textContent) > parseInt(items[i + 1].textContent)) {
            orderCorrect = false;
            break;
        }
    }

    const result = document.getElementById('result');
    if (orderCorrect) {
        result.textContent = 'Chính xác! Bạn đã sắp xếp đúng thứ tự.';
    } else {
        result.textContent = 'Sai rồi! Hãy thử lại.';
    }
});

// Điều khiển nhạc nền
const backgroundMusic = document.getElementById('background-music');
const toggleMusicButton = document.getElementById('toggle-music');
const volumeControl = document.getElementById('volume-control');

// Nút bật/tắt nhạc
toggleMusicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicButton.textContent = 'Tắt nhạc';
    } else {
        backgroundMusic.pause();
        toggleMusicButton.textContent = 'Bật nhạc';
    }
});

// Điều chỉnh âm lượng
volumeControl.addEventListener('input', () => {
    backgroundMusic.volume = volumeControl.value;
});
