import * as React from "react";
import { useState } from "react"
import { Card } from "./Card";

export const PortfolioComponent = () => {

  const [selectedId, setSelectedId] = useState(null)

  return (
    <ul style={{
      maxWidth: '700px',
      margin: '0 auto',
      padding: '0',
    }}>
      {cardData.map(card => (
        <Card
          key={card.id}
          isSelected={selectedId === card.id}
          {...card}
        />
      ))}
    </ul>
  )
};

const cardData = [
  {
    id: "1",
    category: "3D, SSR, Game",
    title: "Helio-Tour: A 3D Journey Through the Solar System",
    description: 'A simple mockup with interesting facts about the planets. This 3D rendering of our solar system is written entirely in JavaScript, using the Three.js library with Fiber for implementation in React. Moreover, it is built on the Next.js framework, requiring various workarounds to run through SSR architecture but resulting in faster loadtimes.',
    backgroundColor: "#333",
    font: 'Tourney',
    link: '/',
  },{
    id: "2",
    category: "Game, MineSweeper",
    title: "<Virus_Sweeper>",
    description: 'Lorem Ipsum',
    backgroundColor: "#040",
    font: 'DotGothic16',
    link: '/',
  },{
    id: "3",
    category: "Calculator, Business",
    title: "Professional Residential Interior Painting Estimator",
    description: 'Lorem Ipsum',
    backgroundColor: "#B44",
    font: 'Mate SC',
    link: '/',
  },{
    id: "4",
    category: "Game, Boardgame",
    title: "Society",
    description: 'Lorem Ipsum',
    backgroundColor: "#814A0E",
    font: 'Mate SC',
    link: '/',
  },
];

export default PortfolioComponent;