'use client'
import { useState } from "react";
export default function(){
    const [file, setFile] =  useState<File | null>(null)
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("resume", file as File);
    formData.append("job", jobDescription);

    const res = await fetch("https://freelance-website-ai-real-time-2nsm.onrender.com/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.result);
  };
    return(
         <div className="p-6 max-w-2xl mx-auto">
      <input type="file" accept=".pdf" onChange={(e)=>{
        if (e.target.files && e.target.files.length>0){
            setFile(e.target.files[0]);
        }
      }} />
      <textarea
        rows={6}
        className="w-full p-2 mt-4 border"
        placeholder="Paste the job description here"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white">
        Analyze Resume
      </button>

      {result && (
        <div className="mt-6 p-4 border bg-gray-50 whitespace-pre-wrap">
          <strong>Result:</strong>
          <div>{result}</div>
        </div>
      )}
    </div>
    )
}
