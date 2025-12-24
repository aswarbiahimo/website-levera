import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

// 1. Definisikan bentuk data dari Database
interface MenuItem {
  id: number;
  nama: string;
  jenis: string;
  harga: number;
  deskripsi: string;
}

interface MenuSectionProps {
  onViewMenu?: () => void;
}

export function MenuSection(): React.ReactNode {
  // 2. Buat State untuk menampung data dari database
  const [menuItems, setMenuitems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 3. Ambil data dari API saat halaman dimuat
  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuitems(data); // Simpan data ke state
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="menu" className="py-20 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block px-4 py-2 border border-[var(--color-border)]">
            <span className="text-sm text-[var(--color-accent)]">Our Menu</span>
          </div>
          <h2 className="mb-4">Discover Our Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From morning coffee to evening dining, explore our carefully curated
            menu
          </p>
        </div>

        {/* 4. Tampilkan Data (Looping) */}
        {loading ? (
          <p className="text-center">Sedang memuat menu...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item: MenuItem) => (
              <div className="p-6 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)] transition-colors">
                {/* Ikon hiasan (Opsional) */}
                <div className="mb-4 text-[var(--color-accent)]">
                  <Coffee size={24} />
                </div>

                {/* Nama Menu */}
                <h3 className="text-xl font-bold mb-2">{item.nama}</h3>

                {/* Deskripsi */}
                <p className="text-gray-500 text-sm mb-4 h-12 overflow-hidden">
                  {item.deskripsi}
                </p>

                {/* Harga */}
                <div className="flex justify-between items-center border-t border-[var(--color-border)] pt-4">
                  <span className="font-bold text-lg">
                    Rp {item.harga.toLocaleString("id-ID")}
                  </span>
                  <button className="text-sm text-[var(--color-accent)] hover:underline">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

//         <div className="grid md:grid-cols-3 gap-8">
//           {categories.map((category, index) => (
//             <div key={index} className="border border-[var(--color-border)] p-8 hover:border-[var(--color-accent)] transition-colors">
//               <category.icon className="w-12 h-12 text-[var(--color-accent)] mb-4" />
//               <h3 className="mb-6">{category.title}</h3>
//               <ul className="space-y-3">
//                 {category.items.map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-[var(--color-accent)]"></div>
//                     <span className="text-gray-600">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button onClick={onViewMenu} className="mt-6 text-[var(--color-accent)] hover:underline">
//                 View Full Menu →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
