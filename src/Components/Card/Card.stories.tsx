import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";

// Définition de la story dans l'interface
export default {
    // affichage du titre dans l'interface
    title: "Shared/Card",
    // composant ) tester
    component: Card
} as ComponentMeta<typeof Card>

// créer un template du composant
// un façon de donner dynamiquement les props au composant
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// une story attaché au template
export const Basic = Template.bind({});
// arguments du composant pour cette story
Basic.args = {
    title: 'Titre',
    body: 'Body'
}

// une story attaché au template
export const AvecFooter = Template.bind({});
// arguments du composant pour cette story
AvecFooter.args = {
    title: 'Titre',
    body: 'Body',
    footer: 'Footer'
}

// une story attaché au template
export const AvecButton = Template.bind({});
// arguments du composant pour cette story
AvecButton.args = {
    title: 'Titre',
    body: 'Body',
    buttonLabel: 'Bouton',
    handleClick: ()=>alert('click!')
}

