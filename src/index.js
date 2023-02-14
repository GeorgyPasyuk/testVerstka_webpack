import './index.html';
import './index.scss';


function formatInputs() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('input', () => {
            if (item.value.length > 19) {
                item.value = item.value.slice(0, 19);
            }
            const inputValue = item.value.replace(/[^\d]/g, '');
            const formattedValue = inputValue.replace(/(\d{3})(?=\d)/g, '$1 ');

            item.value = formattedValue;
        });
    });
}
formatInputs()