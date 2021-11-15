import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { PageLoading } from "../../components/PageLoading";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.scss";

export const Config = () => {
  const { user } = useAuth();
  return (
    <Layout>
      {user === null ? (
        <PageLoading />
      ) : (
        <div className={styles.Config}>
          <span>SETTINGS</span>
          <h2>Configure the Auto-bidding</h2>
          <h4>Maximum bid amount</h4>
          <p>
            This maximum amount will be split between all items where we have activated auto-bidding
          </p>
          <p>Be mindful of the concurrency issues with auto-bidding!</p>
          <Input
            value={user.maximum_bid_amount}
            name='bid-amount'
            label={"$"}
            labelPosition='left'
            type='number'
          />

          <h4>Bid Alert notification</h4>
          <p>Get the notification about your reserved bids</p>
          <Input
            value={user.bid_alert_at}
            name='porc-notification'
            label={"%"}
            labelPosition='right'
            type='number'
          />

          <Button>Save</Button>
        </div>
      )}
    </Layout>
  );
};
