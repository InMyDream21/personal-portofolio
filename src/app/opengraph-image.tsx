import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const alt = `${personalInfo.name} — ${personalInfo.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card. Uses the bundled default font (no network fetch at build).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 0% 0%, #1e1b4b 0%, #030712 45%), radial-gradient(circle at 100% 100%, #1e1b4b 0%, transparent 45%)",
          backgroundColor: "#030712",
          color: "#f9fafb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#818cf8",
          }}
        >
          Available for opportunities
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
          {personalInfo.name}
        </div>
        <div style={{ fontSize: 40, fontWeight: 600, marginTop: 16, color: "#9ca3af" }}>
          {personalInfo.jobTitle}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 28,
            fontWeight: 600,
            color: "#6366f1",
          }}
        >
          {personalInfo.siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
