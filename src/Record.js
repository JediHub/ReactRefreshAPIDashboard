import { useEffect, useState } from "react";

export default function Record({ companyId }) {
  const [companyData, setCompanyData] = useState({});
  useEffect(() => {
    function getCompanyData() {
      const companyDataPromise = new Promise((resolve) =>
        resolve({ NSE: "100", BSE: "101" })
      );
      companyDataPromise.then((res) => setCompanyData(res));
    }
    setInterval(getCompanyData, 1000);
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div className="Records">
      <label>{companyId}</label>
      <p>{companyData.NSE}</p>
      <p>{companyData.BSE}</p>
    </div>
  );
}
