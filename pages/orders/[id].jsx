import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index)=>{
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>OrderID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>1234567098</span>
                </td>

                <td>
                  <span className={styles.name}>Afo Olad</span>
                </td>

                <td>
                  <span className={styles.address}>old ajia ibadan</span>
                </td>

                <td>
                  <span className={styles.total}>#3000</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt='' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
            <Image src="/img/checked.png" width={20} height={20} alt='' />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt='' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
            <Image src="/img/checked.png" width={20} height={20} alt='' />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt='' />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
            <Image src="/img/checked.png" width={20} height={20} alt='' />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt='' />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
            <Image src="/img/checked.png" width={20} height={20} alt='' />
            </div>
          </div>
        </div>
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
