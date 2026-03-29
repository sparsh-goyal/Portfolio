export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="text-sm text-secondary font-medium">
          © {new Date().getFullYear()} Sparsh Goyal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
