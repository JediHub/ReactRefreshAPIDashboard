import { useEffect, useState } from "react";
import "./styles.css";
import Records from "./Records";

export default function App() {
  const [subscriptionList, setList] = useState([]);
  useEffect(() => {
    const subscriplistPromise = new Promise((resolve) =>
      resolve(["NIIT", "Google"])
    );
    subscriplistPromise.then((res) => setList(res));
  }, []);

  return (
    <div className="App">
      <Records subscriptionList={subscriptionList} />
    </div>
  );
}
