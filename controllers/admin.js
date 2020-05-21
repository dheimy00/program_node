const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
  });
};


exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageURL: imageURL,
    userId: req.session.user
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
  
      });
    })
    .catch(err => console.log(err));
}


exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const UpdateTitle = req.body.title;
  const UpdatePrice = req.body.price;
  const UpdateDescription = req.body.description;
  const UpdateImageURL = req.body.imageURL;

  Product.findById(prodId).then(product => {
      product.title = UpdateTitle,
      product.price = UpdatePrice,
      product.description = UpdateDescription,
      product.imageURL = UpdateImageURL

    return product.save()
  })
    .then(result => {
      console.log('UPDATE PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));

}


exports.getProducts = (req, res, next) => {
  Product.find()
  // .select('title price -_id')
  // .populate('userId','name')
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
  
      });
    })
    .catch(err => console.log(err));
}


exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
}