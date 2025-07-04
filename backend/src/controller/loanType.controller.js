import LoanType from "../model/loanType.js";


// Get all loan types
export const getLoanTypes = async (req, res) => {
  try {
    const loanTypes = await LoanType.find();
    res.status(200).json(loanTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single loan type by ID
export const getLoanTypeById = async (req, res) => {
  try {
    const loanType = await LoanType.findById(req.params.id);
    if (!loanType) return res.status(404).json({ message: 'Loan Type not found' });
    res.status(200).json(loanType);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new loan type
export const createLoanType = async (req, res) => {
  const { loanType, pusrpose, limit } = req.body;

  

  try {
    const savedLoanType = await LoanType.create(req.body);
    res.status(201).json(savedLoanType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing loan type
export const updateLoanType = async (req, res) => {
  try {
    const updatedLoanType = await LoanType.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedLoanType) return res.status(404).json({ message: 'Loan Type not found' });

    res.status(200).json(updatedLoanType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a loan type
export const deleteLoanType = async (req, res) => {
  try {
    const deleted = await LoanType.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Loan Type not found' });

    res.status(200).json({ message: 'Loan Type deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
