import Record from "./Record";

export default function Records({ subscriptionList }) {
  return (
    <div className="Records">
      {subscriptionList.map((record) => (
        <Record key={record} companyId={record} />
      ))}
    </div>
  );
}
