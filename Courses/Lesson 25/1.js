window.onload = function () {
    function modal() {
        let modal = ce('div', 'modal');
        let modalBody = ce('div', '', 'modal_body');
        let modalOk = ce('span', 'OK', 'modal_ok', 'click', modalOKfn);
        let modalClose = ce('span', 'cancel', 'modal_cancel', 'click', modalClose);
        modal.append(modalBody);
        modalBody.append(modalOk);
        modalBody.append(modalClose);
        document.body.append(modal);

    }
}