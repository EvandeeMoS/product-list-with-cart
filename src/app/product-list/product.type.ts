export type Product = {
    image: image;
    name: string;
    category: string;
    price: number;
}

type image = {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}