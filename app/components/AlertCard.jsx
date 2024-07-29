'use client';

const AlertCard = ({ message, onClose }) => {
    return (
        <dialog id="alert_card_modal" className="modal">
            <div className="modal-box rounded-md">
                <h3 className="font-bold text-xl">{message}</h3>
                <div className="modal-action">
                    <button onClick={onClose} className="btn rounded-md">Close</button>
                </div>
            </div>
        </dialog>
    );
};

export default AlertCard;
