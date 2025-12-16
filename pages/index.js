import styles from "../styles/styles.module.css";

function getNextVolleyDay() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilWednesday = (3 - dayOfWeek + 7) % 7 || 7;
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7;
  const nextWednesday = new Date(today);
  nextWednesday.setDate(today.getDate() + daysUntilWednesday);
  const nextFriday = new Date(today);
  nextFriday.setDate(today.getDate() + daysUntilFriday);
  return nextWednesday < nextFriday ? nextWednesday : nextFriday;
}

function formatDate(date) {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
}

function Home() {
  const nextVolleyDay = getNextVolleyDay();

  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>
        Tu vai no vôlei <strong>{formatDate(nextVolleyDay)}</strong> ?
      </h1>
    </div>
  );
}

export default Home;
