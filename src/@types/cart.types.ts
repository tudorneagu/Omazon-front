export interface NewProductData {
  title: string;
  url: string;
  price: number;
  category_id: number;
  tag_id?: number | undefined;
  inStock: boolean;
  description: string;
  user_id: number;
}

export interface RegisterFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  account_type: string;
}
