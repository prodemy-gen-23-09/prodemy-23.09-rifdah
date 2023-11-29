import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      img: "/images/1.jpg",
      title: "Pleated Drawstring Pants",
      description: "Pants",
      price: "Rp 550.000,00 - Rp 625.000,00"
    },
    {
      img: "/images/2.jpg",
      title: "Cocoon Cotton Shirt",
      description: "Blouse",
      price: "Rp 300.000,00 - Rp 325.000,00"
    },
    {
      img: "/images/3.jpg",
      title: "Marbella Silk Satin Batwing Shirt",
      description: "Blouse",
      price: "Rp 215.000,00 - Rp 250.000,00"
    },
    {
      img: "/images/4.jpg",
      title: "Altermat Belted Jumpsuit",
      description: "Jumpsuits",
      price: "Rp 1.500.000,00 - Rp 1.850.000,00"
    },
    {
      img: "/images/5.jpg",
      title: "Lennox Satin Jacket",
      description: "Jackets",
      price: "Rp 2.225.000,00 - Rp 2.550.000,00"
    },
    {
      img: "/images/6.jpg",
      title: "Boucle Cropped Jacket",
      description: "Jackets",
      price: "Rp 675.000,00 - Rp 690.000,00"
    },
  ];
  return (
    <div className="font-serif grid grid-cols-3 gap-40 mt-40 mr-4 ml-80 min-h-screen absolute top-1 left-1 -translate-x-1 -translate-y-1">
    {products.map((product, id) => (
      <ProductCard
        key={id}
        img={product.img}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    ))}
  </div>
  // <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  //   <ProductCard 
  //   img="https://resortfinest.com/cdn/shop/files/5635-1700-1.png?v=1684511232"
  //   title="Blouse Chic"
  //   description="Surprise effect: linen reveals its romantic side in this stunning blouse. Equipped with ruffled balloon sleeves and crochet lace inserts, this understated eyecatcher adds interest to any look. Featuring a gentle slub texture, the premium linen fabric flaunts its natural character"
  //   price="Rp 350.000,-"
  //   />
  // </div>
  );
}

export default App;
