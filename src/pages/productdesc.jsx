export default function ProductDesc({ item, priceIndex, onBack }) {
  if (!item) return <div>No item selected.</div>;

  const priceLabels = ['Total Price', 'RQ', 'FRQ'];
  const priceValues = [item.totalPrice, item.RQ, item.FRQ];

  return (
    <div className="productdesc">
      <button onClick={onBack} style={{ marginBottom: '1rem' }}>
        ← Back
      </button>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={{ width: '200px' }} />
      <p>
        <strong>Category:</strong> {item.category}
      </p>
      <p>
        <strong>Material:</strong> {item.material} ({item.purity})
      </p>
      <p>
        <strong>Gross Weight:</strong> {item.grossWeight}
      </p>
      <p>
        <strong>Net Weight:</strong> {item.netWeight}
      </p>
      <p>
        <strong>Stone:</strong> {item.stoneType} ({item.stoneWeight})
      </p>
      <p>
        <strong>Wastage %:</strong> {item.wastagePercent}
      </p>
      <p>
        <strong>Making Charges/g:</strong> {item.makingChargesPerGram}
      </p>
      <p>
        <strong>{priceLabels[priceIndex]}:</strong> ₹{priceValues[priceIndex]}
      </p>
      <p>{item.description}</p>
    </div>
  );
}
