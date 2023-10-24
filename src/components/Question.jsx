import Card from "./Card";

export function Question({ pregunta }) {
  
  return (
    <section className="h-screen mx-auto flex flex-col items-center justify-center snap-start">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-2/3 md:max-w-[90%]">
        {pregunta.choices.map((choice, index) => (
          <Card key={index} imageSrc={choice.img} text={choice.text} />
        ))}
      </div>
    </section>
  );
}
