export interface ProductTypes {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  describe: string;
}

export const products: ProductTypes[] = [
  {
    id: 1,
    name: "Pizza",
    price: 30,
    quantity: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SspP4wLPsIqTNreUMPcYeWt9vUQyFhjAqg&s",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non qui eaque reprehenderit architecto quasi aspernatur dolore. Asperiores consequatur quaerat consectetur, libero nihil deserunt enim nam. Nihil optio esse accusantium?",
  },
  {
    id: 2,
    name: "Hamburger",
    price: 15,
    quantity: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUWoqMp8O5SwtyGrPOC9c6ouuwQYF0wP_LA&s",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non qui eaque reprehenderit architecto quasi aspernatur dolore. Asperiores consequatur quaerat consectetur, libero nihil deserunt enim nam. Nihil optio esse accusantium?",
  },
  {
    id: 3,
    name: "Bread",
    price: 10,
    quantity: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6JkOpY4cEYCDKQOVjDgWUV9kQCSQRPzPow&s",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non qui eaque reprehenderit architecto quasi aspernatur dolore. Asperiores consequatur quaerat consectetur, libero nihil deserunt enim nam. Nihil optio esse accusantium?",
  },
  {
    id: 4,
    name: "Cake",
    price: 30,
    quantity: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAogZTbezIjVv1Bujg92UjLJM_y6dCZkrAw&s",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non qui eaque reprehenderit architecto quasi aspernatur dolore. Asperiores consequatur quaerat consectetur, libero nihil deserunt enim nam. Nihil optio esse accusantium?",
  },
  
];
