import AdminContent from "./AdminContent";

export const metadata = {
  title: "Admin Lead Portal | Quantum Medical",
  description: "Secure Lead Management & Inquiry Analytics Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminContent />;
}
