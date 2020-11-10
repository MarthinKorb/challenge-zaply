import React from 'react';

import { FiTrash } from 'react-icons/fi';
import Modal from '../Modal';
import { Container } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  deletingProduct: boolean;
  setDeletingProduct: (boolean: boolean) => void;
}

const ModalDeleteProduct: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  deletingProduct,
  setDeletingProduct,
}) => {
  function handleConfirmation(): void {
    setDeletingProduct(true);
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <div>
          <h1>
            {' '}
            <FiTrash
              size={24}
              style={{
                marginRight: '12px',
              }}
            />
            Remover Produto
          </h1>
        </div>
        <div className="span-text">
          <span>Você tem certeza que deseja remover este produto?</span>
        </div>
        <div className="buttons-confirmation">
          <Container>
            <button
              id="button-cancel"
              type="button"
              onClick={() => setIsOpen()}
            >
              <div className="text">Cancelar</div>
            </button>
          </Container>
          <Container>
            <button type="button" onClick={handleConfirmation}>
              <div className="text">sim, remover</div>
              <div className="icon">
                <FiTrash size={24} />
              </div>
            </button>
          </Container>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalDeleteProduct;
