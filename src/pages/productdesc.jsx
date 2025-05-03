import { PDFDownloadLink, pdf } from '@react-pdf/renderer'; // adjust the path
import { saveAs } from 'file-saver';
import ProductPDF from './productPDF';
export default function ProductDesc({ item, priceIndex, onBack }) {
  if (!item) return <div>No item selected.</div>;

  const priceLabels = ['Total Price', 'RQ', 'FRQ'];
  const priceValues = [item.totalPrice, item.RQ, item.FRQ];

  const handleDownload = async () => {
    const blob = await pdf(
      <ProductPDF item={item} priceIndex={priceIndex} />
    ).toBlob();

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // yyyy-mm-dd
    const filename = `${item.id || 'item'}_${formattedDate}.pdf`;

    saveAs(blob, filename);
  };

  return (
    <div className="productdescriptionpage-container">
      <button className="productdescriptionpage-back-button" onClick={onBack}>
        ← Back
      </button>
      <button
        className="productdescriptionpage-back-button"
        onClick={handleDownload}
      >
        download
      </button>
      <h2 className="productdescriptionpage-title">{item.name}</h2>
      <img
        src={item.image}
        alt={item.name}
        className="productdescriptionpage-image"
      />
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Category:</span>{' '}
        {item.category}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Material:</span>{' '}
        {item.material} ({item.purity})
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Gross Weight:</span>{' '}
        {item.grossWeight}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Net Weight:</span>{' '}
        {item.netWeight}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Stone:</span>{' '}
        {item.stoneType} ({item.stoneWeight})
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Wastage %:</span>{' '}
        {item.wastagePercent}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Making Charges/g:</span>{' '}
        {item.makingChargesPerGram}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">
          {priceLabels[priceIndex]}:
        </span>{' '}
        ₹{priceValues[priceIndex]}
      </p>
      <p className="productdescriptionpage-description">{item.description}</p>
    </div>
  );
}
