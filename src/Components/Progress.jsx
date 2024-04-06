export default function Progress(props) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${props.totalDonation}</span> of 
        <span className="secondary">${props.targetAmount}</span>
      </h2>
    </section>);
}
