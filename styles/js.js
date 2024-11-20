const targetDate = new Date('2024-11-24T00:00:00');

function updateCountdown() {
    const now = new Date();
    const remainingTime = targetDate - now;

    if (remainingTime <= 0) {
        showContent();

        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

function showContent() {
    document.getElementById('birthday-message').style.display = 'block';
    document.getElementById('birthday-wish').style.display = 'block';

    document.getElementById('countdown-section').style.display = 'none';
    document.getElementById('content-section').style.display = 'block';
}

function toggleAudio() {
    const audio = document.getElementById('birthday-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

const descriptions = [
    "ວັນເກິດປີນີ້ຂອງເຈົ້າຂ້ອຍຂໍໃຫ້ເຈົ້າມີຄວາມສຸກ ❤️",
    "ຂໍໃຫ້ເປັນລູກທີ່ດີຂອງພໍ່ແມ່ 🌟",
    "ຂໍໃຫ້ສົມຫວັງທຸກປະການຂໍໃຫ້ປະສົບຜົນສຳເລັດໃນສິ່ງທີ່ເຮັດ 💕",
    "ຂໍໃຫ້ເຈົ້າສຸກກາຍສະບາຍໃຈກັບວັນເກິດປີນີ້ຂອງເຈົ້າ 🌹",
    "ຂໍໃຫ້ເຈົ້າລືມສິ່ງທີ່ບໍ່ດີໄປໃນມື້ນີ້ເພາະມື້ນີ້ເປັນມື້ໃຫມ່ຂອງເຈົ້າ💖",
    "ຂອງຂວັນວັນເກີດປີນີ້ຂ້ອຍຈະໃຫ້ເຈົ້າ~~~ຫາເອົາເອງ55555😜 ຂອງຂວັນຢູ່ໃນນີ້ນິລະ"
];

let currentIndex = 0;
const delay = 4500;

function showPopup() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
    document.getElementById('current-description').textContent = descriptions[0];
    startDescriptions();
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
    currentIndex = 0;
}

function startDescriptions() {
    const descriptionElement = document.getElementById('current-description');
    const interval = setInterval(() => {
        currentIndex++;
        if (currentIndex < descriptions.length) {
            descriptionElement.textContent = descriptions[currentIndex];
        } else {
            clearInterval(interval);
        }
    }, delay);
}


setInterval(updateCountdown, 1000);
