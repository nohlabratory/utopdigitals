import { motion } from "motion/react";

export default function Team() {
  const team = [
    {
      name: "CEO Noh",
      role: "CEO",
      image: "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/670564274_122106830978884343_5061283183725500432_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG_HkK1aOM6P3AAYzM-AAC_aucpZivSKGZq5ylmK9IoZphj1CRwC4rpF6xIxlqyFkdsnuYnCXfUWN6GsIYLz8D4&_nc_ohc=nn6jB96NQJIQ7kNvwGWZvXw&_nc_oc=AdoFNFR1QkExon3FhkC7bKiPkp2WCRd4WMlpi8Xd-quHRx_vdaeOr-7lCaPoAJDlUDE&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=RDjzAvSZuxmEF3X3Mrqo4g&_nc_ss=7a3a8&oh=00_Af2CZSBcSXTvNfzSQIdve6UonGSvtFPi08_ewXQfG4C3Rw&oe=69E23BEB",
    },
    {
      name: "Hana Moges",
      role: "Copywriter & Model",
      image: "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/670941228_122106835634884343_8231645172699403286_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGZuNMOO4RWNeeYqnAlFAyLkFTRJ1JsWHiQVNEnUmxYeO4nNje95a5SvEVo96OsmEofcbTBk5_UKrC40BX4ucVu&_nc_ohc=zxXQ2lyxh7YQ7kNvwHJnaMT&_nc_oc=AdrsKhkMFBl89F9drBXEKYrk50m5j-Jy_ZxrMdAAwzCDHjpYSSn3WF-jjUqkHPYSywk&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=l4z4Zn3WlGavAtFBNWbL8w&_nc_ss=7a3a8&oh=00_Af33w6txji6uccpuPh_0xveZrVaHcs_EWwO8mUt1JkOXTw&oe=69E25D41",
    },
  ];

  return (
    <section className="py-20 bg-[#E6E9EC]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Our <span className="text-[#1A73E8]">Leadership</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-[#1A73E8] font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
