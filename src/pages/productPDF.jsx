// import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// // PDF styles
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 12,
//     backgroundColor: '#fff',
//   },
//   section: {
//     marginBottom: 10,
//   },
//   heading: {
//     fontSize: 18,
//     marginBottom: 15,
//   },
//   label: {
//     fontWeight: 'bold',
//   },
// });

// // PDF document
// const ProductPDF = ({ item, priceIndex }) => {
//   const priceLabels = ['Total Price', 'RQ', 'FRQ'];
//   const priceValues = [item.totalPrice, item.RQ, item.FRQ];

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <Text style={styles.heading}>{item.name}</Text>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>Category:</Text> {item.category}
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>Material:</Text> {item.material} (
//             {item.purity})
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>Gross Weight:</Text> {item.grossWeight}
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>Net Weight:</Text> {item.netWeight}
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>Stone:</Text> {item.stoneType} (
//             {item.stoneWeight})
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>Wastage %:</Text> {item.wastagePercent}
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>Making Charges/g:</Text>{' '}
//             {item.makingChargesPerGram}
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>
//             <Text style={styles.label}>{priceLabels[priceIndex]}:</Text> ₹
//             {priceValues[priceIndex]}
//           </Text>
//         </View>
//         <View style={styles.section}>
//           <Text>{item.description}</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default ProductPDF;

import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },
  header: {
    borderBottom: '1 solid #000',
    marginBottom: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  shopInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  contactLine: {
    fontSize: 10,
    marginBottom: 1,
  },
  section: {
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1 solid #ccc',
    paddingBottom: 4,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    width: '40%',
  },
  value: {
    width: '58%',
    textAlign: 'right',
  },
  itemImage: {
    width: 120,
    height: 120,
    marginVertical: 10,
    alignSelf: 'center',
  },
  footerNote: {
    fontSize: 10,
    marginTop: 20,
    textAlign: 'center',
  },
});

// PDF document
const ProductPDF = ({ item, priceIndex, logoUrl }) => {
  const priceLabels = ['Total Price', 'RQ', 'FRQ'];
  const priceValues = [item.totalPrice, item.RQ, item.FRQ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Logo and Shop Details */}
        <View style={styles.header}>
          {logoUrl && <Image style={styles.logo} src={logoUrl} />}
          <View style={styles.shopInfo}>
            <Text style={styles.shopName}>Amarsons Pearl and Jewels</Text>
            <Text style={styles.contactLine}>
              Address - Aurangabad , Maharashtra Infront of Anil Medico
            </Text>
            <Text style={styles.contactLine}>Phone: +91 98765 43210</Text>
            <Text style={styles.contactLine}>Email: contact@amarsons.in</Text>
            <Text style={styles.contactLine}>Website: www.amarsons.in</Text>
          </View>
        </View>

        {/* Item Name as Heading */}
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
            textAlign: 'center',
            textDecoration: 'underline',
          }}
        >
          {item.name}
        </Text>

        {/* Product Image */}
        {item.image && <Image style={styles.itemImage} src={item.image} />}

        {/* Details Section */}
        <View style={styles.section}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>{item.category}</Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Material:</Text>
            <Text style={styles.value}>
              {item.material} ({item.purity})
            </Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Gross Weight:</Text>
            <Text style={styles.value}>{item.grossWeight} g</Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Net Weight:</Text>
            <Text style={styles.value}>{item.netWeight} g</Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Stone:</Text>
            <Text style={styles.value}>
              {item.stoneType} ({item.stoneWeight} g)
            </Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Wastage %:</Text>
            <Text style={styles.value}>{item.wastagePercent} %</Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Making Charges/g:</Text>
            <Text style={styles.value}>₹{item.makingChargesPerGram}</Text>
          </View>
          <View style={styles.labelRow}>
            <Text style={styles.label}>{priceLabels[priceIndex]}:</Text>
            <Text style={styles.value}>₹{priceValues[priceIndex]}</Text>
          </View>
        </View>

        {/* Description */}
        {item.description && (
          <View style={styles.section}>
            <Text style={{ fontSize: 10 }}>{item.description}</Text>
          </View>
        )}

        {/* Footer */}
        <Text style={styles.footerNote}>Thank you for shopping with us!</Text>
      </Page>
    </Document>
  );
};

export default ProductPDF;
