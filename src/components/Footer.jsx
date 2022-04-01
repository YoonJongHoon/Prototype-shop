// components/Footer.jsx.
import Year from "react-live-clock";

export default function Footer() {
  return (
    <footer>
      <p>
        ©
        <Year
          id="Year"
          format={" YYYY "}
          ticking={false}
          timezone={"KR/Pacific"}
        />
        JongHoon Yoon. All rights reserved.
      </p>
    </footer>
  );
}
