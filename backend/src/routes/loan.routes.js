import express from 'express';
import { createLoanType, deleteLoanType, getLoanTypeById, getLoanTypes, updateLoanType } from '../controller/loanType.controller.js';


const loanTypeRoutes = express.Router();

loanTypeRoutes.get('/', getLoanTypes);
loanTypeRoutes.get('/:id', getLoanTypeById);
loanTypeRoutes.post('/', createLoanType);
loanTypeRoutes.put('/:id', updateLoanType);
loanTypeRoutes.delete('/:id', deleteLoanType);

export default loanTypeRoutes;
