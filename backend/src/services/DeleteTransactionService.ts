import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transation = await transactionsRepository.findOne(id);

    if (!transation) {
      throw new AppError('This transaction does not exist');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
