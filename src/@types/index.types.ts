export interface ICategory {
  id: number;
  title: string;
  slug: string;
  image: string;
}

export interface ITag {
  id: number;
  type: string;
  text: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  categories: ICategory;
  tags: ITag | null;
  description: string;
  inStock: boolean;
}

export interface ICart {
  product: IProduct[];
}

export type CartContextType = {
  handleRemove: (product: IProduct) => void;
  updateQuantityProduct: (productId: string, quantity: number) => void;
};

export type ModalContextType = {
  activeModal: string | null;
  setActiveModal: (modal: string | null) => void;
  onClose: () => void;
};


