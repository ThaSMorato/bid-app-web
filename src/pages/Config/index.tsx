import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout";
import { PageLoading } from "../../components/PageLoading";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../service/api";
import styles from "./styles.module.scss";

export const Config = () => {
  const { user } = useAuth();
  const [maximumBidAmount, setMaximumBidAmount] = useState(0);
  const [bidAlertAt, setBidAlertAt] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setMaximumBidAmount(user.maximum_bid_amount);
      setBidAlertAt(user.bid_alert_at);
    }
  }, [user]);

  const handleSaveConfigs = async () => {
    setIsLoading(true);
    await api.patch("user/config", {
      maximum_bid_amount: maximumBidAmount,
      bid_alert_at: bidAlertAt,
    });
    setIsLoading(false);
  };

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
            value={maximumBidAmount}
            name='bid-amount'
            label={"$"}
            labelPosition='left'
            type='number'
            onChange={(e) => setMaximumBidAmount(e.currentTarget.valueAsNumber)}
          />

          <h4>Bid Alert notification</h4>
          <p>Get the notification about your reserved bids</p>
          <Input
            value={bidAlertAt}
            name='porc-notification'
            label={"%"}
            labelPosition='right'
            type='number'
            max='100'
            onChange={(e) => setBidAlertAt(e.currentTarget.valueAsNumber)}
          />

          <Button onClick={handleSaveConfigs} disabled={isLoading}>
            {isLoading ? "..." : "Save"}
          </Button>
        </div>
      )}
    </Layout>
  );
};
