import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Orders } from '../schema/order';
import { Model } from 'mongoose';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectModel(Orders.name) private readonly orderModel: Model<Orders>,
  ) {}

  async find(query: any) {
    return await this.orderModel.find(query);
  }

  async findOne(query: any) {
    const order = await this.orderModel.findOne(query);
    return order;
  }

  async create(order: any) {
    const createdOrder = await this.orderModel.create(order);
    return createdOrder;
  }

  async findOneAndUpdate(query: any, update: any, options: any) {
    const order = await this.orderModel.findOneAndUpdate(
      query,
      update,
      options,
    );
    return order;
  }
}
