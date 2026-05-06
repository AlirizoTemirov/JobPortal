import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/95 border-t border-white/10 w-full text-white text-start">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">About JobPortal</h3>
          <p className="text-gray-400 leading-relaxed">
            Your trusted platform for connecting with career opportunities.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link className="hover:text-white transition" href={"/jobs"}>
                Browse Jobs
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-white transition"
                href={"/admin/jobs"}
              >
                Post a Job
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>

          <p className="text-gray-400">support@jobportal.com</p>
        </div>
      </div>
    </footer>
  );
}
