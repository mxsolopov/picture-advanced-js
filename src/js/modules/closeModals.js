// Скрывать все модальные окна
const closeModals = (modals) => {
    
    // Скрыть каждое окно
    modals.forEach( item => {
        item.style.display = 'none';
    });

    // Вернуть возможность скроллинга
    document.body.style.overflow = '';
};

export default closeModals;