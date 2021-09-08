const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product  price'],
        maxlength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id:{
                type: String,
                requuired: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, 'Please product product category'],
        enum: {
            values: [
                'Cloths',
                'Shoes',
                'Beauty/Health',
                'Electronics',
                'Camera',
                'Laptop',
                'Mobile',
                'Computer',
                'Food',
                'Accessories',
                'Books',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select a correct category for the product'
        }
    },
    seller: {
        type : String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxlength : [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true  
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
        
})
module.exports = mongoose.model('Product', productSchema);