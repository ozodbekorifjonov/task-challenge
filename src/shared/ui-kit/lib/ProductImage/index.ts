import InternalProductImage from './InternalProductImage.tsx';
import ProductImageCopy from './ProductImageCopy.tsx';

type CompoundedComponent = typeof InternalProductImage & {
  Copy: typeof ProductImageCopy;
};

const ProductImage = InternalProductImage as CompoundedComponent;
ProductImage.Copy = ProductImageCopy;

export default ProductImage;
