import {
  GraduationCap,
  Users,
  Building2,
  HeartHandshake
} from "lucide-react";

export default function Numbers() {

  const stats = [
    {
      icon: <GraduationCap size={34} />,
      number: "+5.000",
      label: "Estudantes impactados"
    },
    {
      icon: <Users size={34} />,
      number: "+800",
      label: "Professores capacitados"
    },
    {
      icon: <Building2 size={34} />,
      number: "35",
      label: "Instituições atendidas"
    },
    {
      icon: <HeartHandshake size={34} />,
      number: "98%",
      label: "Satisfação dos parceiros"
    }
  ];

  return (
    <section className="numbers">

      <div className="container">

        <div className="numbers-grid">

          {stats.map((item, index) => (

            <div className="number-card" key={index}>

              <div className="number-icon">
                {item.icon}
              </div>

              <h2>{item.number}</h2>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}