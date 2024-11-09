import React from 'react';

const FunFacts = () => {
  const facts = [
    {
      fact: "During World War II, a Great Dane named Juliana was awarded the Blue Cross Medal. She extinguished an incendiary bomb by peeing on it!",
      doodle: null
    },
    {
      fact: "Russia ran out of vodka celebrating the end of World War II! When the long war ended, street parties engulfed the Soviet Union, lasting for days—until all of the nation’s vodka reserves ran out a mere 22 hours after the partying started.",
      doodle: null
    },
    {
      fact: "Winston Churchill typically smoked eight to ten cigars a day, sometimes as much as fifteen. During the American prohibition, he would get a doctor’s note saying he needed to drink 'indefinite' amounts of alcohol when he would come and visit the states.",
      doodle: '🍷' 
    },
    {
      fact: "Adolf Hitler helped design the Volkswagen Beetle. Between Hitler and Ferdinand Porsche, the iconic bug-like car was designed as part of a Hitler-revived German initiative to create an affordable and practical car that everyone could own.",
      doodle: '🚗' 
    },
    {
      fact: "Shakespeare originated the 'yo momma' joke. In his play, Titus Andronicus, one of the characters, Chiron, exclaims, 'Thou has undone our mother,' to which another character, Aaron, replies, 'Villain, I have done thy mother.'",
      doodle: '✍️' 
    },
    {
      fact: "Snoop Dogg’s real name is Cordozar Calvin Broadus Jr. His nickname came from his mother who thought he looked like Snoopy from the Peanuts.",
      doodle: null
    }
  ];

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.85)', 
      color: 'white',
      padding: '40px',
      minHeight: '100vh',
      fontFamily: "'Roboto', sans-serif", 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
      overflowX: 'hidden', 
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '700',
        marginBottom: '30px',
        letterSpacing: '2px',
        textAlign: 'center',
        textTransform: 'uppercase',
      }}>
        Fun Facts
      </h1>
      <ol style={{
        paddingLeft: '30px',
        fontSize: '1.3rem',
        lineHeight: '1.8',
        letterSpacing: '1px',
        maxWidth: '900px', 
        textAlign: 'left',
        margin: '0 auto', 
        listStyleType: 'none', 
      }}>
        {facts.map((fact, index) => (
          <li key={index} style={{
            marginBottom: '25px', 
            display: 'flex', 
            alignItems: 'center',
            flexWrap: 'wrap', 
            justifyContent: 'flex-start',
          }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginRight: '20px',
              backgroundColor: '#FF6347',
              padding: '8px 15px',
              borderRadius: '50%',
              color: '#fff',
              display: 'inline-block',
              width: '40px',
              textAlign: 'center',
              height: '40px',
            }}>
              {index + 1}
            </span>
            <div style={{
              flexGrow: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <span style={{
                marginBottom: '10px',
                fontSize: '1.25rem',
                lineHeight: '1.6',
              }}>
                {fact.fact}
              </span>
              {fact.doodle && (
                <span style={{
                  fontSize: '2rem',
                  marginLeft: '20px',
                  backgroundColor: 'yellow',
                  borderRadius: '50%',
                  padding: '15px',
                }}>
                  {fact.doodle}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FunFacts;