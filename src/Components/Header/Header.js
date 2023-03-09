import './Header.scss';
import { Bar, BarDesign } from "@ui5/webcomponents-react";

export default function Header() {
  return (
    <Bar
      className='header'
      design={BarDesign.Header}
    >
      Header
    </Bar>
  );
}