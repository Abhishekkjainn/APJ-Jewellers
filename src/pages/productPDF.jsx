import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
  },
});

// PDF document
const ProductPDF = ({ item, priceIndex }) => {
  const priceLabels = ['Total Price', 'RQ', 'FRQ'];
  const priceValues = [item.totalPrice, item.RQ, item.FRQ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>{item.name}</Text>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Category:</Text> {item.category}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Material:</Text> {item.material} (
            {item.purity})
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Gross Weight:</Text> {item.grossWeight}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Net Weight:</Text> {item.netWeight}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Stone:</Text> {item.stoneType} (
            {item.stoneWeight})
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Wastage %:</Text> {item.wastagePercent}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>Making Charges/g:</Text>{' '}
            {item.makingChargesPerGram}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Text style={styles.label}>{priceLabels[priceIndex]}:</Text> ₹
            {priceValues[priceIndex]}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>{item.description}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ProductPDF;
