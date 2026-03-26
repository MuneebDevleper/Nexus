import { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const DocumentChamber = () => {
  const [docs, setDocs] = useState<File[]>([]);
  const [sigPad, setSigPad] = useState<any>(null);

  const handleUpload = (e: any) => {
    const files = Array.from(e.target.files);
    setDocs([...docs, ...files]);
  };

  return (
    <div className="p-4 border rounded-lg shadow bg-white mb-4">
      <h2 className="text-xl font-bold mb-2">Document Chamber</h2>
      <input type="file" multiple onChange={handleUpload} className="mb-2" />
      <ul className="list-disc list-inside">
        {docs.map((doc, idx) => (
          <li key={idx}>{doc.name} - Draft</li>
        ))}
      </ul>
      <div className="mt-2">
        <h3 className="font-semibold">E-Signature (mock)</h3>
        <SignatureCanvas
          penColor="black"
          canvasProps={{ width: 300, height: 150, className: 'border' }}
          ref={(ref) => setSigPad(ref)}
        />
        <button
          className="bg-blue-500 text-white px-2 py-1 mt-2 rounded hover:bg-blue-600 hover:scale-105 transition-all duration-200"
          onClick={() => sigPad && sigPad.clear()}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default DocumentChamber;