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
    id: number;
    firstname: string;
    lastname: string;
  };
}

export interface Loged {
  loged: boolean;
}
