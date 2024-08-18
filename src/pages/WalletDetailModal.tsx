import { useNavigate } from 'react-router-dom';

import { Modal } from '../components';

export function WalletDetailModal() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1)
  }

  return (
    <Modal onClose={handleClose}>
      <h2 className="text-xl font-bold mb-4">Wallet detail</h2>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corporis
        quidem est itaque distinctio sequi cumque accusantium officiis nostrum,
        unde cupiditate facere sed fuga aspernatur qui veniam aliquid esse
        placeat?
      </div>

      <button
        onClick={handleClose}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Close
      </button>
    </Modal>
  )
}
