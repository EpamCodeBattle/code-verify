import User from '../models/user';
import * as commonCrudOperations from '../libs/commonCrudOperations';

export const getAll = commonCrudOperations.getAll(User);

export const getById = commonCrudOperations.getById(User);

export const getUser = commonCrudOperations.getById(User);

export const editUser = commonCrudOperations.update(User);
