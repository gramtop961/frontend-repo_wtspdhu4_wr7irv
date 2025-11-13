export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3 text-white/80">
          <div>
            <h3 className="text-white font-semibold">Leisure & Vacations</h3>
            <p className="mt-2 text-sm">Full-service travel company: flights, hotels, packages, visas, insurance, cruises and more.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Contact</h4>
            <p className="mt-2 text-sm">Email: info@leisureandvacations.com</p>
            <p className="text-sm">Phone: +91 00000 00000</p>
            <p className="text-sm">Address: Kochi, Kerala, India</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Hours</h4>
            <p className="mt-2 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
            <p className="text-sm">Sun: Closed</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Leisure & Vacations. All rights reserved.</div>
      </div>
    </footer>
  );
}
