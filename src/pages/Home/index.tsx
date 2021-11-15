import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Checkboxes } from "../../components/Checkboxes";
import { Layout } from "../../components/Layout";
import { PageLoading } from "../../components/PageLoading";
import { Range } from "../../components/Range";
import { Select } from "../../components/Select";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../service/api";
import styles from "./styles.module.scss";

const options = [
  {
    value: "1",
    label: "Category 01",
  },
  {
    value: "2",
    label: "Category 02",
  },
  {
    value: "3",
    label: "Category 03",
  },
  {
    value: "4",
    label: "Category 04",
  },
  {
    value: "5",
    label: "Category 05",
  },
  {
    value: "6",
    label: "Category 06",
  },
];

type Product = {
  id: string;
  image_url: string;
  name: string;
  description: string;
};

export const Home = () => {
  const [cardsProducts, setCardsProducts] = useState<Product[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      api.get<{ products: Product[] }>("products").then(({ data: { products } }) => {
        setCardsProducts(products);
      });
    }
  }, [user]);
  return (
    <Layout>
      {cardsProducts.length === 0 ? (
        <PageLoading />
      ) : (
        <div className={styles.Home}>
          <div className={styles.Home__container}>
            <section className={styles.Home__filters}>
              <h2>Filters</h2>

              <label className={styles.filter__label} htmlFor='arrange'>
                Arrange
              </label>
              <Select id='arrange'>
                <option value='pop'>Popular</option>
              </Select>
              <label className={styles.filter__label} htmlFor='minimun'>
                Minimum bid
              </label>
              <Range id='minimun' />
              <label className={styles.filter__label}>Category</label>
              <Checkboxes
                stateFunction={(item) => {
                  console.log(item);
                }}
                options={options}
              />
            </section>
            <section className={styles.Home__cards_wrapper}>
              {cardsProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </section>
          </div>
        </div>
      )}
    </Layout>
  );
};
