import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "18px",
          fontFamily: "monospace",
          fontWeight: "500",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a6b3c",
          color: "#ffffff",
        }}
      >
        ke.
      </div>
    ),
    {
      ...size,
    }
  );
}