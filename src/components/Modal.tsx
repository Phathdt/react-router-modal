import { ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center">
      <div
        ref={modalRef}
        className="bg-white w-full h-full overflow-auto p-6 animate-slide-up"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
          x
        </button>
        {children}
      </div>
    </div>
  )
}
