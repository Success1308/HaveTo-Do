export default function Home() {
    const nameInput = document.querySelector('#name');
    const submitButton = document.querySelector('.home-btn');

    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem('userName', name);
        } else {
            alert('Please enter your name.');
        }
    });
}