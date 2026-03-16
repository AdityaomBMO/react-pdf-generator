import { StyleSheet, Font } from "@react-pdf/renderer";
import PreviewComponent from "./components/PreviewComponent";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import RobotoSerif from "./fonts/Roboto_Serif/RobotoSerif-VariableFont.ttf";
import RobotoSerifBold from "./fonts/Roboto_Serif/static/RobotoSerif-Bold.ttf";

Font.register({
  family: "Roboto",
  src: "http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf",
});

Font.register({
  family: "Roboto-Serif",
  fonts: [{ src: RobotoSerif }, { src: RobotoSerifBold, fontWeight: 700 }],
});

const styles = StyleSheet.create({
  page: {
    fontSize: 14,
    textAlign: "left",
    backgroundColor: "#fdfdfd",
    height: "100%",
  },
  border: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  logoWrap: {
    paddingVertical: 20,
    paddingHorizontal: 33,
    minWidth: 140,
    maxWidth: "20%",
  },
  logo: {
    width: 72,
    height: 56,
  },
  titleWrap: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: "#033347",
    minWidth: "80%",
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Serif",
    color: "#F9F8F6",
    fontWeight: 400,
  },
  intro: {
    display: "flex",
    flexDirection: "row",
  },
  coverWrap: {
    width: 139,
    display: "flex",
    flexDirection: "column",
    maxWidth: "20%",
  },
  coverImg: {
    width: 139,
    height: 138,
  },
  coverBottom: {
    width: 139,
    paddingHorizontal: 14,
    paddingVertical: 20,
    backgroundColor: "#033347",
  },
  coverText: {
    fontFamily: "Roboto-Serif",
    fontSize: 8,
    color: "#fff",
    fontWeight: 600,
  },
  link: {
    fontFamily: "Roboto-Serif",
    fontSize: 8,
    color: "#02B5FF",
  },
  overview: {
    padding: 29,
    maxWidth: "80%",
  },
  client: {
    paddingLeft: 29,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#02B5FF",
    marginBottom: 20,
  },
  heading: {
    paddingLeft: 29,
    marginBottom: 8,
    fontSize: 15,
    fontFamily: "Roboto-Serif",
    fontWeight: 700,
    color: "#000000",
  },
  body: {
    fontSize: 10,
    paddingLeft: 29,
    marginBottom: 10,
    fontFamily: "Roboto",
    color: "#000",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    fontFamily: "Roboto",
    color: "#444",
  },
  name: {
    fontSize: 26,
    marginVertical: 20,
    fontFamily: "Roboto-Serif",
    color: "#111",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 40,
  },
  signature: {
    borderTop: "1pt solid #000",
    width: 150,
    textAlign: "center",
    paddingTop: 5,
    fontSize: 12,
    fontFamily: "Roboto",
  },
  date: {
    marginTop: 20,
    fontSize: 12,
    color: "grey",
  },
});

function App() {
  const [certificateData, setCertificateData] = useState({
    title: "",
    clientName: "",
    overview: "",
    caseStudyTitle: "",
    content: "",
  });

  const handlePreview = (input) => {
    setCertificateData(input);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FormComponent onPreview={handlePreview} />
        <PreviewComponent certificateData={certificateData} styles={styles} />
      </div>
    </div>
  );
}

export default App;
