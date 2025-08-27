-- Insert categories
INSERT INTO categories (name, slug) VALUES
('Women', 'women'),
('Men', 'men'),
('Teen', 'teen'),
('Kids', 'kids'),
('Home', 'home');

-- Insert subcategories
INSERT INTO categories (name, slug, parent_id) VALUES
('Clothing', 'women-clothing', 1),
('Shoes', 'women-shoes', 1),
('Bags', 'women-bags', 1),
('Accessories', 'women-accessories', 1),
('Clothing', 'men-clothing', 2),
('Shoes', 'men-shoes', 2),
('Accessories', 'men-accessories', 2);

-- Insert sample products
INSERT INTO products (name, description, price, original_price, category_id, sku, is_featured) VALUES
('Structured Blazer', 'Structured blazer with lapel collar and long sleeves. Front button fastening.', 79.99, 99.99, 1, 'WB001', true),
('Cotton T-Shirt', 'Basic cotton t-shirt with round neckline and short sleeves.', 19.99, NULL, 1, 'WT001', true),
('Denim Jacket', 'Classic denim jacket with button fastening and chest pockets.', 59.99, NULL, 5, 'MJ001', false),
('Floral Dress', 'Midi dress with floral print and short sleeves.', 49.99, NULL, 1, 'WD001', true),
('Casual Shirt', 'Cotton casual shirt with button-down collar.', 39.99, NULL, 5, 'MS001', false),
('Summer Shorts', 'Lightweight shorts perfect for summer.', 29.99, 39.99, 3, 'TS001', false);

-- Insert product images
INSERT INTO product_images (product_id, image_url, alt_text, sort_order) VALUES
(1, '/placeholder.svg?height=600&width=400', 'Structured Blazer Front View', 0),
(1, '/placeholder.svg?height=600&width=400', 'Structured Blazer Back View', 1),
(2, '/placeholder.svg?height=600&width=400', 'Cotton T-Shirt', 0),
(3, '/placeholder.svg?height=600&width=400', 'Denim Jacket', 0),
(4, '/placeholder.svg?height=600&width=400', 'Floral Dress', 0),
(5, '/placeholder.svg?height=600&width=400', 'Casual Shirt', 0),
(6, '/placeholder.svg?height=600&width=400', 'Summer Shorts', 0);

-- Insert product variants
INSERT INTO product_variants (product_id, size, color, stock_quantity, sku) VALUES
(1, 'XS', 'Black', 10, 'WB001-XS-BLK'),
(1, 'S', 'Black', 15, 'WB001-S-BLK'),
(1, 'M', 'Black', 20, 'WB001-M-BLK'),
(1, 'L', 'Black', 12, 'WB001-L-BLK'),
(1, 'XL', 'Black', 8, 'WB001-XL-BLK'),
(2, 'XS', 'White', 25, 'WT001-XS-WHT'),
(2, 'S', 'White', 30, 'WT001-S-WHT'),
(2, 'M', 'White', 35, 'WT001-M-WHT'),
(2, 'L', 'White', 20, 'WT001-L-WHT'),
(2, 'XL', 'White', 15, 'WT001-XL-WHT');
