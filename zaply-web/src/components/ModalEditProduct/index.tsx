import React, { useRef, useCallback } from 'react';

import { FiCheckSquare, FiEdit3 } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IProducts {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateProduct: (product: Omit<IProducts, 'id'>) => void;
  editingProduct: IProducts;
}

interface IEditProductsData {
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

const ModalEditProduct: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingProduct,
  handleUpdateProduct,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditProductsData) => {
      const { name, image, categories, price, brand } = data;
      handleUpdateProduct({
        name,
        image,
        categories,
        price,
        brand,
      });
      setIsOpen();
    },
    [handleUpdateProduct, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingProduct}>
        <h1>
          {' '}
          <FiEdit3
            size={24}
            style={{
              marginRight: '12px',
            }}
          />
          Editar Produto
        </h1>
        <label htmlFor="name">Nome do produto</label>
        <Input name="name" placeholder="" />

        <label htmlFor="name">Imagem</label>
        <Input name="image" placeholder="link para imagem" />

        <label htmlFor="categories">Categoria</label>
        <Input name="categories" placeholder="categories" />

        <label htmlFor="price">Preço</label>
        <Input name="price" placeholder="price" />

        <label htmlFor="brand">Marca</label>
        <Input name="brand" placeholder="brand" />

        <button type="submit" data-testid="edit-product-button">
          <div className="text">Editar Produto</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditProduct;
