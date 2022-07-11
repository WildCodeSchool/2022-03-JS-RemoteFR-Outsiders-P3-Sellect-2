import "../assets/Calendly.css";
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div className="Calendly">
      <InlineWidget url="https://calendly.com/sellect/1heure" />
    </div>
  );
}

export default Calendly;
