import styles from "./styles/Root.module.scss";
import Layout from "../components/layout/Layout";

export default function Root() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <text className={styles.title}>NotIn<span style={{ color: "red" }}>Albania</span></text>
          <text className={styles.subtitle}>This is a collection of all services and businesses that do not operate in Albania, as well as alternatives for each of them.</text>
          <section className={styles.cardSection}></section>
        </main>
      </Layout>
    </>
  );
}