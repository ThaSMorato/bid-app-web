import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { PageLoading } from "../../components/PageLoading";
import { Checkboxes } from "../../components/Checkboxes";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

type ProductObject = {
  name: string;
  description: string;
  image_url: string;
  id: string;
  details: string;
  minimum_bid: number;
  last_bid: number;
  available_until: Date;
};

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductObject | null>(null);

  useEffect(() => {
    console.log(id);
    setProduct({
      id: "1",
      minimum_bid: 10,
      last_bid: 15,
      available_until: new Date("2021-11-15"),
      image_url: "https://picsum.photos/300/500?random=1",
      name: "Product 1",
      description:
        "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
      details:
        "Laboris eiusmod anim excepteur eu enim Lorem dolor id sunt non ea pariatur non. Officia incididunt ea cillum qui dolore irure dolor veniam sint esse. Qui quis ullamco amet reprehenderit tempor est. Deserunt occaecat pariatur velit ut aliquip eu officia proident. Amet minim quis nulla dolore laborum veniam consequat est velit laboris eiusmod deserunt sunt. Proident ipsum in aliqua proident ad esse consectetur dolor sint velit duis deserunt. Qui id dolor laboris fugiat eu ea.",
    });
  }, [id]);

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
                <h4>{product.available_until.getDate()}</h4>
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
