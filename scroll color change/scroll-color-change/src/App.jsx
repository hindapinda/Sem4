// Importeer de benodigde hooks uit React.
import React, { useRef, useEffect } from 'react';

// Importeer de data die je wilt weergeven.
import { data } from './data';

// Definieer de App-component.
function App() {
  // Maak een referentie naar een array aan met useRef.
  const GroupRef = useRef([]);

  // Definieer een functie onScroll die wordt getriggerd wanneer er wordt gescrold.
  const onScroll = (el) => {
    // Haal de huidige waarde op van GroupRef en pas de stijlen van de body aan.
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();
        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);
    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = styles.group.dataset.textcolor;
  };

  // Voeg een effect toe dat wordt uitgevoerd na elke render.
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  // Render de component met data als div-elementen.
  return (
    <div>
      {data.map((group, i) => (
        <div
          key={i}
          ref={(el) => (GroupRef.current[i] = el)}
          style={{ height: '100vh' }}
          data-bgcolor={group.theme.background}
          data-textcolor={group.theme.text}
        >
          <h1>{group.title}</h1>
          <p>{group.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

// Exporteer de App-component.
export default App;
