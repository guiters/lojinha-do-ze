export class Product {
    id;
    name;
    description;
    image;
    price;
    category;
    features;

    featuresArray() {
        this.features = this.features.split('|');
    }
}
