import React from "react";

import './css/Education.css'
import { BiCodeCurly, BiBookOpen, BiLike } from "react-icons/bi";

export default function Education() {

  const iconsColor = '#49a572';
  const iconsSize = '30px';


  return (
    <div className='Section'>
      <div>
        <strong className="Titles MainTitle">Vzdělání </strong>
      </div>
      <div>
        <p className="Paragraf">
        Střední vzdělání SPŠE Ječná obor Informatika, následně přechod na vysokou školu ČVUT FEL obor Softwarové inženýrství, délka studia 2 roky. Získané znalosti ohledně datových struktur, třídících / vyhledávacích algoritmů a základy výpočetní složitosti algoritmů. Dále získané znalosti jazyků C++, Python a obecné znalosti tradičního projektového řízení IT projektů.
        </p>
        <p className="Paragraf">
        Po dvou letech přechod na školu Unicorn University na obor Softwarový vývoj, získané znalosti tvorba web aplikací, architektury moderních systému, prohloubení znalostí projektového řízení tradiční vs. agilní přístup, znalosti jazyka javascript, tvorba backendu v NodeJS REST API a frontendu pomocí ReactJS, základní znalosti řízení lidských zdrojů a strategického marketingu.
        </p>
        <p className="Paragraf">
        Soukromé vzdělávání designu aplikací, 3d grafika v Blender 3D, spojení kódu a grafiky ve vývojovém prostředí Unity 3D a rozšíření znalostí NodeJS + ReactJS.
        </p>
        <div className="Interested-Container">
          <div className="Interested-Section">
            <div className="Interested-Item">
              <div className="Interested-Title">
                Znalosti
              </div>
              <div className="Interested-Item-Icon" title="Znalosti">
                <BiBookOpen color={iconsColor} size={iconsSize}/>
              </div>
              <div className="Interested-Item-Border">
                <div className="Interested-Item-Content">
                  <div>Datové struktůry</div>
                  <div>Výpočetní složitost</div>
                  <div>GIT, GitLab</div>
                  <div>Architektury systémů</div>
                  <div>SQL, NoSQL databáze</div>
                  <div>Základy projektového řízení (tradiční, agilní)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Interested-Section">
            <div className="Interested-Item">
              <div className="Interested-Title">
                Jazyky
              </div>
              <div className="Interested-Item-Icon" title="Jazyky">
                <BiCodeCurly color={iconsColor} size={iconsSize}/>
              </div>
              <div className="Interested-Item-Border">
                <div className="Interested-Item-Content">
                  <div>C#, .NET</div>
                  <div>NodeJS, ReactJS</div>
                  <div>MongoDB, MSSQL</div>
                  <div>HTML, JavaScript, CSS, SASS</div>
                  <div>Základy C++, Python</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Interested-Section">
            <div className="Interested-Item">
              <div className="Interested-Title">
                Zájem o
              </div>
              <div className="Interested-Item-Icon" title="Zájem o">
                <BiLike color={iconsColor} size={iconsSize}/>
              </div>
              <div className="Interested-Item-Border">
                <div className="Interested-Item-Content">
                  <div>NodeJS</div>
                  <div>ReactJS</div>
                  <div>MongoDB, MSSQL</div>
                  <div>Unity 3D, Blender 3D</div>
                  <div>C# .NET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <strong className="Titles SecondTitle">Zaměstnání</strong>
        </div>
        <p className="Paragraf">
          <ul>
            <li> Skill s.r.o. - developer v ASP.NET MVC <strong className="Highligh-Green-Text">/</strong> analýza, návrh , realizace a komunikace se zákazníky <strong className="Highligh-Green-Text">/</strong> 2019 - 2022 </li>
          </ul>
        </p>
      </div>
    </div>
  );
}