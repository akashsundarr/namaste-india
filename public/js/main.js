document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Indian Culture website!');

    const currentDate = new Date().toLocaleDateString();
    console.log('Current Date:', currentDate);

    const diwaliDateElement = document.getElementById('diwali-date');
    const holiDateElement = document.getElementById('holi-date');
    const eidDateElement = document.getElementById('eid-date');
    const navaratriDateElement = document.getElementById('navaratri-date');
    const thrissurDateElement = document.getElementById('thrissur-date');

    if (diwaliDateElement) {
        diwaliDateElement.textContent = currentDate;
        console.log('Diwali date element found and updated.');
    } else {
        console.error('Diwali date element not found.');
    }

    if (holiDateElement) {
        holiDateElement.textContent = currentDate;
        console.log('Holi date element found and updated.');
    } else {
        console.error('Holi date element not found.');
    }

    if (eidDateElement) {
        eidDateElement.textContent = currentDate;
        console.log('Eid date element found and updated.');
    } else {
        console.error('Eid date element not found.');
    }

    if (navaratriDateElement) {
        navaratriDateElement.textContent = currentDate;
        console.log('Navaratri date element found and updated.');
    } else {
        console.error('Navaratri date element not found.');
    }

    if (thrissurDateElement) {
        thrissurDateElement.textContent = currentDate;
        console.log('Thrissur date element found and updated.');
    } else {
        console.error('Thrissur date element not found.');
    }
});
