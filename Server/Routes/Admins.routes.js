/ admin routes////////////////////////////////////////////////////////////////
const express = require("express") ;
const router = express.Router() ;



// Require controller modules.
const {getAllAdmin ,addAdmin, deleteAdmin,updateAdmin} = require('../Controllers/Admin.controllers')


/// POSTS ROUTES ///

//GET request to fetch all admin.
router.get('/allAdmin',getAllAdmin ) ;
// POST request for creating a new post.
router.post('/addAdmin',addAdmin) ;
//DELETE request to delete 
router.delete('/delete/:idDeleted',deleteAdmin) ;
//UPDATE request to update 
router.put('/update/:idUpdate',updateAdmin) ;










module.exports = router;