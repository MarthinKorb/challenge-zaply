import React, { useRef, useCallback } from 'react';

import { FiCheckSquare, FiPlusSquare } from 'react-icons/fi';
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

interface ICreateProductData {
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddProduct: (product: Omit<IProducts, 'id'>) => void;
}

const ModalAddProduct: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddProduct,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateProductData) => {
      const { name, image, categories, price, brand } = data;

      handleAddProduct({ name, image, categories, price, brand });
      setIsOpen();
    },
    [handleAddProduct, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>
          <FiPlusSquare size={24} style={{ marginRight: '10px' }} />
          Adicionar novo produto
        </h1>
        <label htmlFor="name">Nome</label>
        <Input name="name" />

        <label htmlFor="image">Imagem</label>
        <Input name="image" />

        <label htmlFor="categories">Categoria</label>
        <Input name="categories" />

        <label htmlFor="brand">Marca</label>
        <Input name="brand" />

        <label htmlFor="price">Preço</label>
        <Input name="price" />

        <button type="submit" data-testid="add-product-button">
          <p className="text">Adicionar</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddProduct;
