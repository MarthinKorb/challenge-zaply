import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Product from "../models/Product";

import * as Yup from "yup";

export default {
  async index(request: Request, response: Response) {
    const search = request.query.q;

    const productsRepository = getRepository(Product);

    if (search) {
      const foundProducts = await productsRepository.find({
        where: {
          categories: search,
        },
      });
      return response.status(200).json(foundProducts);
    }
    const products = await productsRepository.find({
      order: {
        name: "ASC",
      },
    });

    return response.status(200).json(products);
  },

  async create(request: Request, response: Response) {
    const { image, name, categories, price, brand } = request.body;

    const productsRepository = getRepository(Product);

    const data = { image, name, categories, price, brand };

    const schema = Yup.object().shape({
      image: Yup.string().required(),
      name: Yup.string().required(),
      categories: Yup.string().required(),
      price: Yup.string().required(),
      brand: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const product = productsRepository.create(data);

    await productsRepository.save(product);

    return response.status(201).json(product);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const productsRepository = getRepository(Product);

    const productToBeDelected = await productsRepository.findOne(id);

    if (!productToBeDelected) {
      return response.status(404).json({ message: "tool could not be found." });
    }

    productsRepository.delete(id);

    return response.status(200).json({ message: "Product deleted." });
  },

  async edit(request: Request, response: Response): Promise<any> {
    const { id } = request.params;

    const { image, name, categories, price, brand } = request.body;

    const productsRepository = getRepository(Product);

    const productToUpdate = await productsRepository.findOne(id);

    if (!productToUpdate) {
      throw new Error();
    }

    const schema = Yup.object().shape({
      image: Yup.string().required(),
      name: Yup.string().required().max(300),
      categories: Yup.string().required(),
      price: Yup.string().required(),
      brand: Yup.string().required(),
    });

    await schema.validate(
      { image, name, categories, price, brand },
      {
        abortEarly: false,
      }
    );

    const data = productToUpdate as Product;

    await productsRepository.update(data, {
      image,
      name,
      categories,
      price,
      brand,
    });

    return response
      .status(200)
      .json({ id, image, name, categories, price, brand });
  },
};
