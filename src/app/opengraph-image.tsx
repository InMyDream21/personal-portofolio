import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const alt = `${personalInfo.name}, ${personalInfo.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#f4f0e8",
        color: "#17201d",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#ae351a",
        }}
      >
        Available for opportunities
      </div>
      <div
        style={{
          fontSize: 84,
          fontWeight: 800,
          marginTop: 24,
          lineHeight: 1.05,
        }}
      >
        {personalInfo.name}
      </div>
      <div
        style={{
          fontSize: 40,
          fontWeight: 600,
          marginTop: 16,
          color: "#5f6760",
        }}
      >
        {personalInfo.jobTitle}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          fontSize: 28,
          fontWeight: 600,
          color: "#ae351a",
        }}
      >
        {personalInfo.siteUrl.replace("https://", "")}
      </div>
    </div>,
    { ...size },
  );
}
