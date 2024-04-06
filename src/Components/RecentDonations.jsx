export default function RecentDonations(props) {

  const donationsArr = props.donationsProp;
  const getDonations = donationsArr.map((donation) =>
  <li><span>{donation.name} {donation.amount}</span>{donation.caption}</li>);

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {getDonations}
      </ul>
    </section>
  );
}
