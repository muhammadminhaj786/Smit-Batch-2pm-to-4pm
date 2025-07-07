import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';



cloudinary.config({ 
    cloud_name: 'dmuf5myro', 
    api_key: '829968978782487', 
    api_secret: 'AGrf9fDp8Nq74q-tp_3asDfReNA' 
});




const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'batch-12',
      allowed_type: ['jpg','png'],
    //   format: 'jpeg'
    },
  });


export {
    cloudinary,
    storage

}