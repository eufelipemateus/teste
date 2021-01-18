export interface IOrder {
  id?: number;
  qtd: number;
  valor: number;
  description: string;

  createdDate?: Date;
  updatedDate?: Date;
}
