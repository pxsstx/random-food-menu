'use client';

const AlertCardMenu = ({ category, item, onClose }) => {
    return (
        <dialog id="alert_card_menu_modal" className="modal">
            <div className="modal-box rounded-md">
                <h3 className="font-bold text-xl">{item}</h3>
                <div className="modal-action">
                    <button onClick={onClose} className="btn rounded-md">Close</button>
                </div>
            </div>
        </dialog>
    );
};

export default AlertCardMenu;
