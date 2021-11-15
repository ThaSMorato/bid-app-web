import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { PageLoading } from "../../components/PageLoading";
import { Checkboxes } from "../../components/Checkboxes";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../service/api";

type ProductObject = {
  name: string;
  description: string;
  image_url: string;
  id: string;
  details: string;
  minimum_bid: number;
  last_bid: number;
  available_until: number;
};

export const Product = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState<ProductObject | null>(null);
  const [until, setUntil] = useState("");

  const timeConvert = (num: number) => {
    const hours = Math.floor((Math.abs(num) / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((Math.abs(num) / (1000 * 60)) % 60);
    const seconds = Math.floor((Math.abs(num) / 1000) % 60);
    return `${hours}:${minutes > 10 ? minutes : `0${minutes}`}:${
      seconds > 10 ? seconds : `0${seconds}`
    }`;
  };

  useEffect(() => {
    let secondsInterval: NodeJS.Timeout;
    if (user) {
      api.get<{ product: ProductObject }>(`products/${id}`).then(({ data: { product } }) => {
        setProduct(product);
        secondsInterval = setInterval(() => {
          const now = Date.now();
          const diff = timeConvert(product.available_until - now);
          setUntil(diff);
        }, 1000);
      });
    }
    return () => {
      clearInterval(secondsInterval);
    };
  }, [id, user]);

  return (
    <Layout>
      {product === null ? (
        <PageLoading />
      ) : (
        <div className={styles.Product}>
          <div>
            <figure>
              <img src={product.image_url} alt={product.name} />
            </figure>
          </div>
          <div className={styles.Product__details}>
            <h2>{product.name}</h2>
            <h6>Minimum bid ${product.minimum_bid}</h6>
            <h5>Details</h5>
            <p>{product.description}</p>
            <p>{product.details}</p>
            <div className={styles.details__numbers}>
              <div>
                <p>Last bid made</p>
                <h4>${product.last_bid}</h4>
              </div>
              <div>
                <p>Available Until</p>
                <h4>{until}</h4>
              </div>
            </div>
            <Button>Place a Bid</Button>
            <div className={styles.details__autobidding}>
              <Checkboxes
                stateFunction={(state) => console.log(state)}
                options={[
                  {
                    label: "",
                    value: "activate_auto_bidding",
                  },
                ]}
              />
              <label htmlFor='activate_auto_bidding'>
                Activate the <Link to='/settings'>auto-bidding</Link>
              </label>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
