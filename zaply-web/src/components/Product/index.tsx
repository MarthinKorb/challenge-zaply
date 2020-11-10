import React from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IProducts {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

interface IProps {
  product: IProducts;
  handleEditProduct: (product: IProducts) => void;
  handleOpenDeleteModal: (id: number) => void;
}

const Product: React.FC<IProps> = ({
  product,
  handleEditProduct,
  handleOpenDeleteModal,
}: IProps) => {
  function setEditingProduct(): void {
    handleEditProduct(product);
  }

  return (
    <Container>
      <section className="body">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingProduct()}
            data-testid={`edit-product-${product.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            id="icon-delete"
            type="button"
            className="icon"
            onClick={() => handleOpenDeleteModal(product.id)}
            data-testid={`remove-product-${product.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>
        <div className="main-content">
          <img src={product.image} alt="" />
          <div>
            <h3>{product.name}</h3>

            <p>
              Categoria: <b> {product.categories}</b>
            </p>

            <p>
              Marca: <b>{product.brand}</b>
            </p>
            <p className="price">R$ {product.price}</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Product;
