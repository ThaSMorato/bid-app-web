import { Card } from "../../components/Card";
import { Checkboxes } from "../../components/Checkboxes";
import { Layout } from "../../components/Layout";
import { Range } from "../../components/Range";
import { Select } from "../../components/Select";
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

const cardsProducts = [
  {
    id: "1",
    image_url: "https://picsum.photos/300/500?random=1",
    name: "Product 1",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "2",
    image_url: "https://picsum.photos/300/500?random=2",
    name: "Product 2",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "3",
    image_url: "https://picsum.photos/300/500?random=3",
    name: "Product 3",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "4",
    image_url: "https://picsum.photos/300/500?random=4",
    name: "Product 4",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "5",
    image_url: "https://picsum.photos/300/500?random=5",
    name: "Product 5",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "6",
    image_url: "https://picsum.photos/300/500?random=6",
    name: "Product 6",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "7",
    image_url: "https://picsum.photos/300/500?random=7",
    name: "Product 7",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "8",
    image_url: "https://picsum.photos/300/500?random=8",
    name: "Product 8",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "9",
    image_url: "https://picsum.photos/300/500?random=9",
    name: "Product 9",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "10",
    image_url: "https://picsum.photos/300/500?random=10",
    name: "Product 10",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "11",
    image_url: "https://picsum.photos/300/500?random=11",
    name: "Product 11",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "12",
    image_url: "https://picsum.photos/300/500?random=12",
    name: "Product 12",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "13",
    image_url: "https://picsum.photos/300/500?random=13",
    name: "Product 13",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "14",
    image_url: "https://picsum.photos/300/500?random=14",
    name: "Product 14",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "15",
    image_url: "https://picsum.photos/300/500?random=15",
    name: "Product 15",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
  {
    id: "16",
    image_url: "https://picsum.photos/300/500?random=16",
    name: "Product 16",
    description:
      "Sunt ad nisi anim dolor et ex pariatur tempor deserunt ipsum ad. Non sit do pariatur nulla ipsum tempor cillum id ullamco voluptate nulla. Laboris elit mollit id dolore adipisicing occaecat consequat amet. Aute tempor ex eiusmod do dolor elit incididunt eu ea.",
  },
];

export const Home = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
