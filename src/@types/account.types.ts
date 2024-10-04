export interface RegisterParams {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  account_type: string;
}

export interface AuthData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  account_type: string;
  user: {
    firstname: string;
    lastname: string;
    email: string;
    id: number;
    account_type: string;
  };
}

export interface Loged {
  loged: boolean;
}
