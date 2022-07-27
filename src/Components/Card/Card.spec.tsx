/* eslint-disable testing-library/no-node-access */
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Card from "./Card";

let container: HTMLElement;

describe("Card Component", () => {
  const cardDummy = {
    title: "Title-test",
    body: "Body-test",
    footer: "Footer-test",
    buttonLabel: "Button-test",
  };

  // code à executer avant chaque tests
  beforeEach(() => {
    // création d'une div qui va contenir le composant testé
    container = document.createElement("div");
    // monter l'élément dans le (shadow)dom de jest
    document.body.appendChild(container);
  });

  // pas necessaire
  // nettoie le DOM aprés chaque tests
  afterEach(cleanup);

  test("doit fournir un rendu", () => {
    // Faire un rendu du composant React avec ses props
    render(<Card title="Ma carte" body="" />);

    // récupére un élément à partir de son texte
    const carte = screen.getByText("Ma carte");

    // test si l'élément récupéré par screen existe
    expect(carte).toBeInTheDocument();
  });

  test("Le titre est affiché dans la partie titre", () => {
    // Rendu du composant dans le container ⚠ il faut lui donner un objet pour le container
    render(<Card title={cardDummy.title} body="" />, { container });

    // Récup du noeud DOM
    const cardTitleElement = container.querySelector(".card-title");

    // test
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardTitleElement?.textContent).toBe(cardDummy.title);
  });

  test("Le body est affiché dans la partie body", () => {
    // Rendu du composant dans le container ⚠ il faut lui donner un objet pour le container
    render(<Card title="" body={cardDummy.body} />, { container });

    // Récup du noeud DOM
    const cardBodyElement = container.querySelector(".card-body");

    // test
    expect(cardBodyElement).toBeInTheDocument();
    expect(cardBodyElement?.textContent).toBe(cardDummy.body);
  });

  test("Le footer est affiché dans la partie footer", () => {
    // Rendu du composant dans le container ⚠ il faut lui donner un objet pour le container
    render(<Card title="" body="" footer={cardDummy.footer} />, { container });

    // Récup du noeud DOM
    const cardFooterElement = container.querySelector(".card-footer");

    // test
    expect(cardFooterElement).toBeInTheDocument();
    expect(cardFooterElement?.textContent).toBe(cardDummy.footer);
  });

  test("Le footer ne doit pas être présent quand je ne fournis pas la prop footer", () => {
    render(<Card title="" body="" />, { container });

    const cardFooterElement = container.querySelector(".card-footer");
    // .not permet d'inverser l'assertion du test
    expect(cardFooterElement).not.toBeInTheDocument();
  });

  test("Le composant carte doit tout afficher", () => {
    render(
      <Card
        title={cardDummy.title}
        body={cardDummy.body}
        footer={cardDummy.footer}
      />,
      { container }
    );

    const cardTitleElement = container.querySelector('.card-title');
    const cardBodyElement = container.querySelector('.card-body');
    const cardFooterElement = container.querySelector('.card-footer');

    expect(cardTitleElement).toBeInTheDocument();
    expect(cardTitleElement?.textContent).toBe(cardDummy.title);
    expect(cardBodyElement).toBeInTheDocument();
    expect(cardBodyElement?.textContent).toBe(cardDummy.body);
    expect(cardFooterElement).toBeInTheDocument();
    expect(cardFooterElement?.textContent).toBe(cardDummy.footer);

  });

  test("Le bouton doit apparaitre quand je met la props", ()=>{
    render(<Card title="" body="" buttonLabel="Valider" handleClick={()=>{}} />, {container})

    // const buttonElement = screen.getByRole("button");
    // const buttonElement = screen.getByText("Valider");
    const buttonElement = container.querySelector('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement?.textContent).toContain("Valider");
  });

  test("Le bouton doit la fonction quand je click dessus", ()=>{
    // mock (ou spy) de la fonction passé du composant
    // il va enregistrer le nombre de fois ou il est appelé
    const handleClick = jest.fn();

    render(<Card title="" body="" buttonLabel="Valider" handleClick={handleClick} />, {container})

    const buttonElement = container.querySelector('button');

    // simuler un click
    fireEvent.click(buttonElement!);

    // vérifier que le spy a été appelé
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Le champ input doit changer de valeur", ()=>{
    // mock (ou spy) de la fonction passé du composant
    // il va enregistrer le nombre de fois ou il est appelé

    render(<Card title="" body="" />, {container})

    const inputElement = container.querySelector('input');

    fireEvent.change(inputElement!, {target: { value: "Poulet"}})

    expect(inputElement?.value).toBe('Poulet')
  })
});
