import {
  ClassDocItem,
  ComponentDocItem,
  ConstDocItem,
  EnumDocItem,
  FunctionDocItem,
  InterfaceDocItem,
  ModuleDocItem,
  TypeDocItem
} from 'ngx-docs-generator';

export interface IDocItemsList {
  data: DocItem[];
  type: string;
}

export type DocItem =
  ComponentDocItem
  | ClassDocItem
  | ConstDocItem
  | EnumDocItem
  | FunctionDocItem
  | InterfaceDocItem
  | ModuleDocItem
  | TypeDocItem;
