import "./Footer.scss";
import { Bar, BarDesign } from "@ui5/webcomponents-react";

export default function Footer() {
  return (
    <Bar
      className="footer"
      design={BarDesign.Footer}
    >
      Footer
    </Bar>
  );
}