import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import AnchorLogo from "../assets/Anchor-logo.png";
import Cover from "../assets/cover.jpg";
import Html from "react-pdf-html";
import React from "react";

const Casestudy = ({
  title,
  clientName,
  overview,
  caseStudyTitle,
  content,
  styles,
}) => {
  const htmlStyles = {
    h1: {
      fontFamily: "Roboto-Serif",
      fontSize: 16,
      marginBottom: 10,
      marginTop: 0,
    },
    h2: {
      fontFamily: "Roboto-Serif",
      fontSize: 16,
      marginBottom: 10,
      marginTop: 0,
    },
    p: {
      fontFamily: "Roboto",
      fontSize: 11,
      marginBottom: 10,
      marginTop: 0,
    },
    ul: {
      marginBottom: 0,
      marginTop: 0,
    },
    li: {
      fontFamily: "Roboto",
      fontSize: 10,
      marginTop: 0,
      marginBottom: 0,
    },
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View fixed style={[styles.header, { marginBottom: 20 }]}>
          <View style={styles.logoWrap}>
            <Image style={styles.logo} src={AnchorLogo} />
          </View>

          <View style={styles.titleWrap}>
            <Text style={styles.title}>
              {title || "Construction & Real Estate"}
            </Text>
          </View>
        </View>

        <View style={[styles.intro, { marginTop: -20 }]}>
          <View style={styles.coverWrap}>
            <Image style={styles.coverImg} src={Cover} />
            <View style={styles.coverBottom}>
              <Text style={styles.coverText}>
                For more information about our services, visit
              </Text>
              <Link style={styles.link}>www.ankrok.com</Link>
            </View>
          </View>
          <View style={styles.overview}>
            <Text style={styles.client}>
              {clientName || "Client info: Clinet info name or anything"}
            </Text>
            <Text style={styles.heading}>Project Overview</Text>
            <Text style={styles.body}>
              {overview ||
                `John Kemp is a sales and distribution business in the US. They came to SKB Accounting for bookkeeping support, but discovered their real problem was something else entirely: their team was drowning in manual reporting work that could and should be automated. Over the course of our engagement, we identified multiple processes that were consuming hundreds of hours of their team's time every year. We built custom automation solutions for each one.`}
            </Text>
            <Text style={[styles.heading, { marginTop: 5 }]}>
              {caseStudyTitle || "Case Study 1: Commission Report Automation"}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Html stylesheet={htmlStyles}>{content}</Html>
        </View>
        {/* <Text style={styles.subtitle} break>
          This certificate is proudly presented to
        </Text>
        <Text style={styles.name}>{clientName || "Your name here"}</Text>
        <Text style={styles.body}>
          For outstanding performance and dedication. We celebrate your
          achievement and wish you continued success.
        </Text>
        <View style={styles.footer}>
          <Text style={styles.signature}>Signature</Text>
          <Text style={styles.signature}>Director</Text>
        </View>
        <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text> */}
      </Page>
    </Document>
  );
};

export default Casestudy;
