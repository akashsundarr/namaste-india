document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to the Indian Culture website!');

    // Festival Dates
    const diwaliDate = "October 26, 2025";
    const holiDate = "March 17, 2025";
    const eidDate = "April 9, 2025";
    const navaratriDate = "October 1, 2025";
    const thrissurDate = "May 4, 2025";

    // Removed button logic, directly updating the date elements
   
    if (diwaliDateElement) {
        diwaliDateElement.textContent = diwaliDate;
        console.log('Diwali date element found and updated.');
    } else {
        console.error('Diwali date element not found.');
    }

    if (holiDateElement) {
        holiDateElement.textContent = holiDate;
        console.log('Holi date element found and updated.');
    } else {
        console.error('Holi date element not found.');
    }

    if (eidDateElement) {
        eidDateElement.textContent = eidDate;
        console.log('Eid date element found and updated.');
    } else {
        console.error('Eid date element not found.');
    }

    if (navaratriDateElement) {
        navaratriDateElement.textContent = navaratriDate;
        console.log('Navaratri date element found and updated.');
    } else {
        console.error('Navaratri date element not found.');
    }

    if (thrissurDateElement) {
        thrissurDateElement.textContent = thrissurDate;
        console.log('Thrissur date element found and updated.');
    } else {
        console.error('Thrissur date element not found.');
    }
});
