import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — ${siteConfig.shortTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e293b 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            color: "#93c5fd",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "22px",
              border: "2px solid #e11b22",
            }}
          >
            BM
          </div>
          <span>{siteConfig.highway.interstate} · {siteConfig.address.state}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#cbd5e1",
              maxWidth: "900px",
            }}
          >
            {siteConfig.shortTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "20px",
            color: "#94a3b8",
          }}
        >
          <span>Open 24/7</span>
          <span>·</span>
          <span>Diesel & gas</span>
          <span>·</span>
          <span>Showers</span>
          <span>·</span>
          <span>Truck parking</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
