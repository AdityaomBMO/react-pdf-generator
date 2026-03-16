import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Casestudy from "./Casestudy";

const PreviewComponent = ({ certificateData, styles }) => {
  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm flex flex-col">
      <h1 className="text-xl font-semibold mb-4">Certificate Preview</h1>
      <div className="flex-1 border rounded-lg overflow-hidden min-h-125">
        {true ? (
          <PDFViewer width="100%" height="100%" className="min-h-125">
            <Casestudy {...certificateData} styles={styles} />
          </PDFViewer>
        ) : (
          <div className="flex justify-center items-center h-full text-center">
            Enter details to generate preview
          </div>
        )}
      </div>
      <div className="mt-4">
        <PDFDownloadLink
          document={<Casestudy {...certificateData} styles={styles} />}
          fileName="certificate.pdf"
        >
          {({ loading }) => (
            <button
              disabled={loading || !certificateData.clientName}
              className={`w-full py-3 rounded-lg ${loading || !certificateData.clientName ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"} text-white font-medium shadow`}
            >
              {loading ? "preparing document..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PreviewComponent;
