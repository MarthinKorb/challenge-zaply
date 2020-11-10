import React, { useState, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';
import Header from '../../components/Header';

import api from '../../services/api';

import Product from '../../components/Product';
import ModalAddProduct from '../../components/ModalAddProduct';
import ModalEditProduct from '../../components/ModalEditProduct';
import ModalDeleteConfirmation from '../../components/ModalDeleteConfirmation';

import { ProductsContainer } from './styles';
import Button from '../../components/Button';

interface IProducts {
  id: number;
  image: string;
  name: string;
  categories: string;
  price: number;
  brand: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [editingProduct, setEditingProduct] = useState<IProducts>(
    {} as IProducts,
  );
  const [deletingProduct, setDeletingProduct] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [search, setSearch] = useState('');

  const [idSelected, setIdSelected] = useState(-1);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      //searching all products in database
      const response = await api.get('/products');
      //setting the state with the response of api
      console.log(response.data);
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    async function fetchItems(): Promise<void> {
      const response = await api.get(`products?q=${search}`);
      setProducts(response.data);
    }
    fetchItems();
  }, [search]);

  async function handleAddProduct(
    product: Omit<IProducts, 'id'>,
  ): Promise<void> {
    try {
      //posting data to create a new product
      const response = await api.post('/products', {
        ...product,
      });
      //setting state with the current list of products and the new one
      setProducts([...products, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateProduct(
    product: Omit<IProducts, 'id'>,
  ): Promise<void> {
    try {
      const response = await api.put(`/products/${editingProduct.id}`, {
        ...editingProduct,
        ...product,
      });

      setProducts(
        products.map(mappedProduct =>
          mappedProduct.id === editingProduct.id
            ? { ...response.data }
            : mappedProduct,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenDeleteModal(id: number): void {
    setIdSelected(id);
    setDeleteModalOpen(!deleteModalOpen);
  }

  async function handleDeleteProduct(id: number): Promise<void> {
    try {
      await api.delete(`/products/${id}`);

      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (deletingProduct) {
      handleDeleteProduct(idSelected);
      setDeleteModalOpen(!deleteModalOpen);
      setDeletingProduct(false);
      setIdSelected(-1);
    }
  }, [deletingProduct, idSelected, deleteModalOpen]);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function toggleDeleteModal(): void {
    setDeleteModalOpen(!deleteModalOpen);
  }

  function handleEditProduct(product: IProducts): void {
    setEditingProduct(product);
    toggleEditModal();
  }

  return (
    <>
      <ModalAddProduct
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddProduct={handleAddProduct}
      />
      <ModalEditProduct
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingProduct={editingProduct}
        handleUpdateProduct={handleUpdateProduct}
      />

      <ModalDeleteConfirmation
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        deletingProduct={deletingProduct}
        setDeletingProduct={setDeletingProduct}
      />

      <ProductsContainer data-testid="products-list">
        <Header openModal={toggleModal} />
        <div className="button-add-new">
          <div className="input-container">
            <FiSearch />
            <input
              name="search"
              placeholder="Digite sua busca aqui"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Button openModal={toggleModal} />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            boxSizing: 'inherit',
          }}
        >
          {products &&
            products.map(product => (
              <Product
                key={product.id}
                product={product}
                handleOpenDeleteModal={handleOpenDeleteModal}
                handleEditProduct={handleEditProduct}
              />
            ))}
        </div>
      </ProductsContainer>
    </>
  );
};

export default Dashboard;
