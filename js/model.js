export const state = {
  products: [],
};

export const loadProducts = (data) => {
  try {
    state.products = data.map((item) => {
      return {
        id: item.id,
        description: item.description,
        isOnSale: item.isOnSale,
        isNew: item.isNew,
        price: item.price,
      };
    });
  } catch (error) {
    throw error;
  }
};
