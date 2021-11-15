import { Link } from "react-router-dom";
import { Button } from "../Button";
import styles from "./styles.module.scss";

type Product = {
  name: string;
  description: string;
  image_url: string;
  id: string;
};

type CardProps = {
  product: Product;
};

export const Card = ({ product }: CardProps) => {
  return (
    <div className={styles.Card}>
      <img src={product.image_url} alt={product.name} />
      <div className={styles.Card__footer}>
        <div>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </div>
        <Link to={`/product/${product.id}`}>
          <Button>Bid now</Button>
        </Link>
      </div>
    </div>
  );
};
