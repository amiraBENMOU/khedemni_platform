const express = require('express');
const router = express.Router();
const companyController = require('../Controller/company');

router.post('/company', companyController.createCompany);
router.get('/company/:id', companyController.getCompanyById);
router.get('/company', companyController.getCompanies);
router.put('/company/:id', companyController.updateCompany);
router.delete('/company/:id',companyController.deleteCompany);

module.exports = router;
