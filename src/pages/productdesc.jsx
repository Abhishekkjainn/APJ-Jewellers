import { PDFDownloadLink, pdf } from '@react-pdf/renderer'; // adjust the path
import { saveAs } from 'file-saver';
import ProductPDF from './productPDF';
import { useState } from 'react';
export default function ProductDesc({ item, priceIndex, onBack }) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  if (!item) return <div>No item selected.</div>;

  const priceLabels = ['Total Price', 'RQ', 'FRQ'];
  const priceValues = [
    item.pricing.base,
    item.pricing.franchise,
    item.pricing.retail,
  ];

  const handleDownload = async () => {
    const blob = await pdf(
      <ProductPDF
        item={item}
        priceIndex={priceIndex}
        logoUrl={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpUQWDaUTeJ180nuMsWJwVVpLsDm2xVEycw&s'
        }
      />
    ).toBlob();

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const filename = `${item.id || 'item'}_${formattedDate}.pdf`;

    saveAs(blob, filename);

    // Show snackbar
    setSnackbarVisible(true);

    // Redirect after a short delay
    setTimeout(() => {
      setSnackbarVisible(false);
      setActiveTab('home');
    }, 2000); // Show snackbar for 2 seconds
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

      <img
        src="https://i.pinimg.com/236x/7e/16/45/7e1645afd92e02d9427837298d2e7dcc.jpg"
        alt={item.name}
        className="productdescriptionpage-image"
      />
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Category:</span>{' '}
        {item.subcategory}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Material:</span>{' '}
        {item.category}
        {/* ({item.purity}) */}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Gross Weight:</span>{' '}
        {item.grossweight} gms
      </p>

      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Price :</span> ₹
        {priceIndex == 0
          ? item.pricing.base
          : priceIndex == 1
          ? item.pricing.franchise
          : item.pricing.retail}
      </p>
      <p className="productdescriptionpage-detail">
        <span className="productdescriptionpage-label">Materials Used:</span>
      </p>
      <ul className="productdescriptionpage-materials">
        {item.materialsUsed?.map((material, index) => (
          <li key={index}>
            <strong>{material.docname}:</strong>{' '}
            {Object.entries(material)
              .filter(([key]) => key !== 'docname')
              .map(([name, value]) => `${name} - ${value} units`)
              .join(', ')}
          </li>
        ))}
      </ul>

      {/* <p className="productdescriptionpage-description">{item.description}</p> */}
      {snackbarVisible && (
        <div className="snackbar">PDF downloaded successfully!</div>
      )}
    </div>
  );
}
