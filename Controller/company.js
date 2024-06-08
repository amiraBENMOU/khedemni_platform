const Company = require('../model/company');


// Create a new company

exports.createCompany = async (req, res) => {
    try {
        
        const { name, address, phoneNumber } = req.body;
        console.log(name, address, phoneNumber); // Check if values are received
        const newCompany = new Company({ name, address, phoneNumber });
        await newCompany.save();
        res.status(201).json(newCompany);
    } catch (err) {
        res.status(500).json({ message: 'Error creating the company', err: err.message });
    }
};

// Update an Exesting company

exports.updateCompany = async(req, res) => {
    try{
        const company = await Company.findByIdAndUpadate(req.params.id,req.body,{new:true});
        if (!company) return res.status(404).json({ message:'Company not found' });
        res.status(200).json(company);
    }
    catch(err){
        res.status(500).json({ message:'Error updating the company',err});
    }
}

// Delete a company

exports.deleteCompany = async(req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) return res.status(404).json({ message:'Company not found' });
        res.status(200).json({ message:'Company deleted successfully' });
    }
    catch(err){
        res.status(500).json({ message:'Error deleting the company',err });
    }
}


// get a company by id
exports.getCompanyById = async(req, res) => {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message:'Company not found' });
    res.status(200).json(company);
}

// get all companies

exports.getCompanies = async(req, res) => {
try{

    const companies = await Company.find();
    if (!companies) return res.status(404).json({ message:'No companies found' });
    res.status(200).json(companies);
}
catch(err){
    res.status(500).json({ message:'Error getting the companies' ,err}); 

}

}
