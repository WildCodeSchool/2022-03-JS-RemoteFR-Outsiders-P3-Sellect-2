import "../assets/Calendly.css";
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div className="Calendly">
      <InlineWidget url="https://calendly.com/a-mesbahi92" />
    </div>
  );
}

export default Calendly;
