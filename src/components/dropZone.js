import Dropzone from "react-dropzone";
import { CloudUpload } from "lucide-react";

const FileDropZone = (props) => {
  return (
    <Dropzone
      accept={{
        image: [".png", ".jpg", ".jpeg"],
      }}
      onDrop={(acceptedFiles) => {
        props.onFileChange(acceptedFiles[0]);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section className="file-drop-zone ">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="file-drop-zone-text">
              <CloudUpload style={{ color: "#bdbdbd", marginRight: 10 }} />
              <p>Upload Your File Here</p>
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileDropZone;
