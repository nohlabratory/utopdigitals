import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

export default function Works() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const works = [
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/672054632_122106846188884343_2969494769053333974_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEyKrurfK3zPaCExvvfH82N_BKvW-b4Pj38Eq9b5vg-PcGXJ_MImN63feO9awFjhmpwN7yx6nL_z2Iez19qXLUo&_nc_ohc=Xb5Pvy9KTP0Q7kNvwH-1BoF&_nc_oc=Adq1Jk0Tajn45k8j8qjjpMZzgM-YGscvKy0wy8LJzFrzqHt5GDoBuLGtWsFs4VN_34A&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=GPSYf4RYJB8oxiAIeJID5g&_nc_ss=7a3a8&oh=00_Af1BO3MevuMxYJ6JXBKQYtgO6xr7YwyJmV1VRGbvwwpCxg&oe=69E27894",
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/670881702_122106846230884343_7290519284753092811_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEgpAyJzP05r0D4ivHKRp63vpVyTq0Rbzq-lXJOrRFvOneKwfZttaoHwNzGLZWLPambqGSvP893cFHdgzs0ewYM&_nc_ohc=NdyQd91uI1UQ7kNvwHBoRz2&_nc_oc=Adow6LBA-GMcgqbcxEH1SDiDllGHn3jQ_zTyKCCGw-tfvuJ_yMeMG1WMFhLmxJDHOAI&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=noIuz36NZJl_b3jnqiXCrw&_nc_ss=7a3a8&oh=00_Af3ZzlIYk4ivLrbuYEnPo3oqpLXPYQeoCgq4n3hKw_A8ag&oe=69E2640C",
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/672023655_122106846284884343_4653755300861162564_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGTTVO5-rpqZe5VOuLMec-9yYOhHGX_dQ7Jg6EcZf91DiU8TIgez0ZkcOgQh6Z2YL_5BE2J0RXw5ae8V7T7ZzyZ&_nc_ohc=0ZdM5-42iq0Q7kNvwG2ULsx&_nc_oc=Adorfl4fHDRSVKt_B0mQ7BUI1MgoqyE0hjkPjL5tLHhkkPSmGMPbNBCPCA78LMyBAsQ&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=YAuIjmed19uZorv4ZxXMGA&_nc_ss=7a3a8&oh=00_Af2DzpAoYDysKr-jzTVIAUAa_9T3xv7I41nJRABvTDZVjw&oe=69E251BB",
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/672204946_122106846356884343_5047066628990583763_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHHO5gvhsQdZTyYDT_3OXIyhCCg_vmZpnaEIKD--ZmmdmQPRU5ELgyjpN2sJ-eQ41I6WL9Lmy5GLU3T9_djFHoV&_nc_ohc=l79ZQTodZFcQ7kNvwGcEMJs&_nc_oc=AdpaM1UfPXFWR_Zjo3nEFV6F4mC8vRKryTfQuliGMalYihGAXuthgIjcHH8IwG8ANfE&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=fQ8wNdHx5vlut2HZJDVnVg&_nc_ss=7a3a8&oh=00_Af0KCobTmRGUGqwA0pd-1JUCL3U8Gd0XsMgATSDToiYTnQ&oe=69E25BDC",
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/671820281_122106846446884343_193927442867931695_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHSjEBkWVzrM_lKQzZom6DxA_akSfI9KKID9qRJ8j0oogUhBKt5a9nJIObhc0aVNe8Y_S762n4_ngvm2LS4Ob31&_nc_ohc=6bY0NJcUdJwQ7kNvwFVby1i&_nc_oc=Adph_kMICpVsok4P9thbivL9zi0AhR71H3GvobWpT1iHRcY4J7BQkuDc3amcs2hj_Co&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=gpaRkry1kyOvf1pEpYMBGg&_nc_ss=7a3a8&oh=00_Af2x4yqCIstuorPxWW7J9smIky-7z8cAbDN89OnVGFUThQ&oe=69E259FA",
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/669780013_122106846650884343_526978109065976665_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFRabIZY8PbFsIrkNiUT-MLYxnHmAjyx69jGceYCPLHr8Olte3R3vwB42Zn5VnM_MwmX46ISn3httm51T8MxhXr&_nc_ohc=MHwFcmjIvdEQ7kNvwE-5lRt&_nc_oc=Adr-GYY4D3WtgbghMf4urEHD5gHwJCwUORkyK2vq-2vcp6B-aICGFq-4V4Cqq9W_I0g&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=nxUB_o8CZEXKe2mwHDqBNg&_nc_ss=7a3a8&oh=00_Af0NnH1nW290Ns6AGeDvcn-lYaycXHsrcdMaRUDaPM8zEQ&oe=69E2562B",
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/670408284_122106846926884343_2680274784136477111_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF41_HqVKrJnV1RFJ4COGBcepcs6GVpgdx6lyzoZWmB3G8kaoxzOmPBZIBmp35-gwrrU2a-p2yWDwQEFSnw5hyM&_nc_ohc=gWegWsrEoWwQ7kNvwG-AoPZ&_nc_oc=AdpHklOauK14Q2pWD7wOhfFIjnM14WLqOZG0xmIaLyAZYB3BdRWe846G-LH1oLVhxYQ&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=qrTJgG_vYxZyczHKhvCrMA&_nc_ss=7a3a8&oh=00_Af0n4ijL6G1qEIwnz83Vwnjj5YCIUD--EkgTTKeYg_3Pag&oe=69E25B6D",
    "https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/671317298_122106845636884343_648858826663012031_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFkWRil-2AHKBWMxlDNKeD85SqZA0TFazHlKpkDRMVrMU1pE17So740IcbQ1r_ZCi-ObP_BbnIBdBZ4W2XINvw3&_nc_ohc=Qd6wQVuaUrsQ7kNvwF3zkTO&_nc_oc=AdprkIgg4yBjyS01WGGKmDtAFH1anbJXz7evLO5z84B6ZrOvvq846IMKNCuBZUfYW_w&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=xyRiBlyAKQneFP8oyMiV9A&_nc_ss=7a3a8&oh=00_Af3ReIaFLbNu7r_8kQvJJQnnAK5vPzix9lUPHrgBGI2E8Q&oe=69E27961",
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Our <span className="text-[#1A73E8]">Works</span>
        </h2>
        <div className="relative">
          <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
            <div className="flex gap-6">
              {works.map((work, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_33.33%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square rounded-2xl overflow-hidden border border-gray-200 relative group"
                  >
                    <img
                      src={work}
                      alt={`Work ${i + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
    </section>
  );
}
