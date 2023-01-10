import React from 'react';

import './css/About.css';
import Services from './Services';
import Separater from './Separater';

export default function About() {

  const todaysDate = new Date();
  let currentOld = todaysDate.getFullYear() - 1998;

    const renderContent = (
      <>
        <p className='Paragraf'>
          <i>
          <span className='Highligh-Green-Text'><strong>{currentOld} let</strong></span>
          <span className='Seperater-Title'>/</span>
          <span className='Highligh-Green-Text'><strong>Břežany II</strong></span>
          <span className='Seperater-Title'>/</span>
          <span className='Highligh-Green-Text'><strong>Freelancer</strong></span>
          </i>
        </p>
        <p className='About-Text Paragraf'>
        Jsem vystudovaný vývojář na volné noze s praktickými zkušenosti analýzy, návrhu a vývoje softwarových systémů od 2019, osobně se věnuji vývoji a rozvoji znalostí ze světa softwaru od 2017. Mám logické myšlení a strategický postup \"Dvakrát měř, jednou řež.\" v návrhu algoritmu pro daný logické problémy. Dovedu si efektivně zorganizovat čas a práci pro dodržování termínů.
        </p>
       </>
    );

    return (
      <div className='Section'>
        <p>
          <strong className='Titles AboutMe'>Úvod</strong>
        </p>
        {renderContent}
        <Separater />
        <Services />
      </div>
    );
}
