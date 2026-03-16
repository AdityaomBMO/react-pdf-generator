import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

const FormComponent = ({ onPreview }) => {
  const [formData, setFormData] = useState({
    title: "",
    clientName: "",
    overview: "",
    caseStudyTitle: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditorChange = (html) => {
    setFormData({
      ...formData,
      content: html,
    });
  };

  const handlePreview = (e) => {
    e.preventDefault();
    onPreview(formData);
  };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handlePreview();
  //   }
  // };

  return (
    <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold mb-4">Generate Case Study PDF</h1>

      <form className="space-y-3" onSubmit={handlePreview}>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Service Title
          </span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter service title"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none mt-1"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Client Info</span>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Enter client info"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none mt-1"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Project Overview
          </span>
          <textarea
            rows="4"
            cols="50"
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            placeholder="Enter project overview"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none mt-1"
          ></textarea>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Case Study Title
          </span>
          <input
            type="text"
            name="caseStudyTitle"
            value={formData.caseStudyTitle}
            onChange={handleChange}
            placeholder="Enter case study title"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none mt-1"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">
            Detailed Case Study
          </span>
        </label>
        <RichTextEditor
          value={formData.content}
          onChange={handleEditorChange}
        />
        <button
          type="submit"
          className="w-full px-3 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
        >
          Update Preview
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
