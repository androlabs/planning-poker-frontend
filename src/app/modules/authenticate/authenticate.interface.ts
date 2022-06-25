export type SingUp = {
  name: string;
  email: string;
  password: string
}

export type SingUpResponse = {
  user: {
    id: string;
    email: string;
    name: string;
  }
  accessToken: string;
}

export type SingIn = {
  email: string;
  password: string;
}

export type SingInResponse = {
  accessToken: string;
}

export type MeResponse = {
  name: string;
  email: string;
  password: string;}
