import "./AddThread.scss";
import { Add } from "@mui/icons-material";

export default function AddThread({ handleNewThread }) {
  return (
    <button
      onClick={() => {
        handleNewThread();
      }}
      className="threads-section__save-button"
    >
      New thread
      <span className="threads-section__icon">
        <Add color="primary" />
      </span>
    </button>
  );
}
