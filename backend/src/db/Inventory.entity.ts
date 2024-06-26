//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Inventory')
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  product: number;

  @Column('integer', { nullable: true })
  quantity: number;

  @Column('integer', { nullable: true })
  lowStockThreshold: number;
}
