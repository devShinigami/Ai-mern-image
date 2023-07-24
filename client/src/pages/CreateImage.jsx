import React, { useState } from "react";
import { getRandomPrompt } from "../utils";
import Loader from "../components/Loading";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";
import axios from "axios";
const CreateImage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  const handleSumbit = () => {};
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGenerating(true);
        const response = await axios.post(
          `http://localhost:3001/api/v1/dalle`,
          {
            prompt: form.prompt,
          }
        );
        console.log(response);
        setForm({
          ...form,
          photo: `response:image/jpeg;base64,${response.photo}`,
        });
      } catch (e) {
        console.log(e);
      } finally {
        setGenerating(false);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="lg:w-1/2 mx-auto p-4">
        <h1 className="font-extrabold lg:text-3xl m-4 uppercase">
          Generate Image
        </h1>
        <form onSubmit={handleSumbit}>
          <FormField
            label="Name"
            name="name"
            type="text"
            value={form.name}
            handleChange={handleChange}
            placeholder="name"
          />
          <FormField
            placeholder="A velociraptor working at a hotdog stand, lomography"
            label="Prompt"
            name="prompt"
            type="text"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-base-100 border w-64 justify-center items-center h-64 m-4">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-64 h-64 object-contain opacity-40 "
              />
            )}
            {generating && (
              <div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg bg-neutral/40 ">
                <Loader />
              </div>
            )}
          </div>
          <div className="mt-5 flex gap-5">
            <button
              disabled={generating}
              type="button"
              onClick={generateImage}
              className="btn btn-active btn-neutral m-4 "
            >
              {generating ? "Generating..." : "Generate"}
            </button>
          </div>
          <div className="mt-10">
            <p className="lg:text-2xl font-bold uppercase ">
              Once you Created the image you want, you can share it with others
              in the community.
            </p>
            <button type="submit" className="btn btn-active btn-neutral m-4">
              {" "}
              {loading ? "Sharing" : "Share with the community"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateImage;
