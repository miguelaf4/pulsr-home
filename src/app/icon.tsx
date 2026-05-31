import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
          borderRadius: 7,
          color: "#ffffff",
          fontSize: 26,
          fontWeight: 800,
          fontFamily: "system-ui, -apple-system, sans-serif",
          lineHeight: 1,
          paddingBottom: 4,
        }}
      >
        p
      </div>
    ),
    { ...size }
  );
}
