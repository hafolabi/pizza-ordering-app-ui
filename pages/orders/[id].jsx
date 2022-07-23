import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>OrderID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <span className={styles.id}>1234567098</span>
                </td>

                <td>
                  <span className={styles.name}>Afo Olad</span>
                </td>

                <td>
                  <span className={styles.adrress}>old ajia ibadan</span>
                </td>

                <td>
                  <span className={styles.total}>#3000</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}></div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal:</b> #3000
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> #00.00
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> #3000
          </div>

          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
