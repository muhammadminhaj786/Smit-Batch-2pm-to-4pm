import express from 'express';
import { createLoanType, deleteLoanType, getLoanTypeById, getLoanTypes, updateLoanType } from '../controller/loanType.controller.js';
import { authVerify } from '../middlewares/authmiddleware.js';


const loanTypeRoutes = express.Router();

loanTypeRoutes.get('/',authVerify, getLoanTypes);
loanTypeRoutes.get('/:id' ,getLoanTypeById);
loanTypeRoutes.post('/', createLoanType);
loanTypeRoutes.put('/:id', updateLoanType);
loanTypeRoutes.delete('/:id', deleteLoanType);

export default loanTypeRoutes;
