// Замена изображений при наведении
const pictureSize = (imgSelector) => {

    // Блоки изображений
    const blocks = document.querySelectorAll(imgSelector);

    // Показывать изображения
    function showImg(block) {
        // Картинка в блоке
        const img = block.querySelector('img');
        // Изменить путь картинки
        img.src = img.src.slice(0, -4) + '-1.png';
        // Убрать детали
        block.querySelectorAll('p:not(.sizes-hit)').forEach( p => {
            p.style.display = 'none';
        });
    }

    // Скрывать изображения
    function hideImg(block) {
        // Картинка в блоке
        const img = block.querySelector('img');
        // Изменить путь картинки
        img.src = img.src.slice(0, -6) + '.png';
        // Показать детали
        block.querySelectorAll('p:not(.sizes-hit)').forEach( p => {
            p.style.display = 'block';
        });
    }

    // Показывать или изображение при изменении наведения курсора мыши
    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });

        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize;