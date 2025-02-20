import React, { useEffect, useRef } from 'react';
import { Calendar, BarChart, Code, TestTubes, Headphones } from 'lucide-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const stepsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: <Calendar className="w-10 h-10 text-indigo-600" />,
      title: "Kostenlose Erstberatung",
      description: "In einem unverbindlichen Erstgespräch analysieren wir Ihre Anforderungen und Ziele. Wir hören Ihnen aufmerksam zu und dokumentieren Ihre Vorstellungen, um eine maßgeschneiderte Lösung entwickeln zu können."
    },
    {
      icon: <BarChart className="w-10 h-10 text-indigo-600" />,
      title: "Lösungskonzept & Projektplanung",
      description: "Nach der Analysephase präsentieren wir Ihnen ein detailliertes Konzept inklusive Design-Vorschlägen, Budgetplanung, Zeitplan und technischer Architektur. Hier definieren wir gemeinsam die Projektmeilensteine und Erfolgskriterien."
    },
    {
      icon: <Code className="w-10 h-10 text-indigo-600" />,
      title: "Agile Entwicklung",
      description: "Mit einem agilen Entwicklungsansatz realisieren wir Ihr Projekt in überschaubaren Etappen. Nach jedem Sprint präsentieren wir Ihnen die Fortschritte und nehmen Ihr Feedback direkt auf. So bleiben wir flexibel und können schnell auf Änderungswünsche reagieren."
    },
    {
      icon: <TestTubes className="w-10 h-10 text-indigo-600" />,
      title: "Umfassende Qualitätssicherung",
      description: "Vor der Übergabe durchläuft Ihr Produkt intensive Testphasen. Wir prüfen die Funktionalität auf verschiedenen Geräten und unter verschiedenen Bedingungen, um höchste Qualität und Zuverlässigkeit zu gewährleisten."
    },
    {
      icon: <Headphones className="w-10 h-10 text-indigo-600" />,
      title: "Lebenslanger Support",
      description: "Unsere Zusammenarbeit endet nicht mit dem Projektabschluss. Als geschätzter Kunde profitieren Sie von unserem lebenslangen Support-Service. Wir stehen Ihnen bei Fragen, Wartung und Weiterentwicklungen jederzeit zur Verfügung."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const panels = stepsRefs.current;

    // Set initial states
    gsap.set(panels, { 
      yPercent: 100,
      opacity: 0,
      scale: 0.9
    });
    
    gsap.set(panels[0], { 
      yPercent: 0,
      opacity: 1,
      scale: 1
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        start: "top top",
        end: "+=400%"
      }
    });

    // Add animations for each panel
    panels.forEach((panel, i) => {
      if (i !== 0) {
        tl.to(panels[i - 1], {
          yPercent: -100,
          opacity: 0,
          scale: 0.9,
          duration: 1
        })
        .to(panel, {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 1
        }, "<");
      }
    });

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-gradient-to-b from-indigo-50 to-white overflow-hidden"
    >
      {/* Header (fixed position) */}
      <div className="absolute top-0 left-0 w-full z-10 pt-16 pb-8 bg-gradient-to-b from-indigo-50 via-indigo-50 to-transparent">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-indigo-900 mb-6 mt-9">
              Unser Prozess
            </h2>

          </div>
        </div>
      </div>

      {/* Steps Container */}
      <div 
        ref={containerRef}
        className="h-full flex items-center justify-center"
      >
        {steps.map((step, index) => (
          <div
            key={index}
            ref={el => { stepsRefs.current[index] = el; }}
            className="absolute w-full max-w-4xl mx-auto px-4"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-indigo-600">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-indigo-50 p-6 rounded-2xl">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-indigo-600 font-bold text-xl">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-indigo-600/30"
            >
              <div 
                className="w-full h-full rounded-full bg-indigo-600 transform scale-0 origin-center"
                ref={el => {
                  if (el) {
                    gsap.to(el, {
                      scale: 1,
                      scrollTrigger: {
                        trigger: stepsRefs.current[index],
                        start: "top center",
                        end: "bottom center",
                        toggleActions: "play none none reverse",
                        scrub: true
                      }
                    });
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

