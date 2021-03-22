export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginAPIResponse {
  exitcode: number;
  encode: string;
  message: string;
}

export interface User {
  user_name: string;
  user_phone: number;
  user_email: string;
  permission: number;
}

export interface Blog {
  readonly id: string;
  id_category: Category;
  id_user: User;
  blog_name: string;
  blog_title: string;
  blog_description: string;
  blog_seen: number;
}

export interface Category {
  readonly id: string;
  category_name: string;
  published: boolean;
}

export interface Contact {
  readonly id: string;
  contact_name: string;
  contact_phone: number;
  contact_email: string;
  contact_message: string;
  st: boolean;
}
export interface HTTPdata {
  code: number;
  message: string;
  values: any;
}
