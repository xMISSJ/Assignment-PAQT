export const Assignments : Assignment[] = [
  {
    route: "/form-picker",
    title: "Opdracht 1: Form Picker",
    description: `
    Voor het verhuren van objecten wordt gebruik gemaakt van een formulier, waarmee we objecten kunnen inplannen vanuit een contract. Tijdens het invullen van een contract wil de eindgebruiker zo snel mogelijk weten of een gekozen object verhuurd kan worden. Maak een formulier met een startdatum, een einddatum en een veld om een object te kunnen kiezen. De back-end valideert of een object beschikbaar is op basis van de ingevoerde startdatum en einddatum (optioneel).
    
    Voorwaarden:
    1. Maak gebruik van een datepicker voor de datumvelden.
    2. Voeg validatie voor het formulier toe aan de code.
    3. De back-end hoeft niet gemaakt te worden, je mag ervan uitgaan dat de server altijd een 200
    status code terugstuurt met in de body van de response:
    a. Een datum wanneer het object voor het eerst verhuurd gaat worden in de gekozen
    periode
    b. Een null als het object gewoon beschikbaar is in de gekozen periode,
    `,
    answer_title: "Waarom",
    answer_description: `
    Ik heb aangenomen dat 'objecten' een abstracte term is en dat ik mocht invullen wat dat was. In mijn geval dacht ik aan het verhuren van honden, dat leek me namelijk wel leuk.

    Ook is er in het project geen backend. Gezien de server mij altijd een 200 teruggeeft, heb ik ook geen check of een response is geslaagd of niet. Normaal gesproken check je ook of een response is gefailed (= error). Ik heb daarbij ook een fake request gemaakt.
    `,
  },
    {
    route: "/web-design",
    title: "Opdracht 2: Web design",
    description: `
    We hebben een webdesign toegevoegd dat wordt gebruikt om een applicatie mee op te bouwen. Kun je deze zo goed mogelijk namaken?

    Voorwaarden:
    - De footer is sticky.
    - De driehoek aan de rechterkant moet meeschalen.
    - Indien mogelijk graag mobile responsive.
    `,
    answer_title: "Denkwijze",
    answer_description: `
      Ik vroeg me hierbij af hoe de driehoek moest meeschalen. Arlon heeft aangegeven dat ik moest doen wat ik dacht dat goed was. Ik heb aangenomen dat de driehoek op basis van schermgrootte waarbij de driehoek altijd 60% van de schermbreedte is en 100% van de schermgrootte.
    
      Daarnaast is er in de opdracht gevraagd om mobile responsiveness, ik heb dit gedaan en ook mobile responsive gemaakt met hulp van media queries. Mobile responsiveness is anders dan mobile adaptiveness.
   
      Footer is sticky gemaakt met hulp van fixed position.
      `,
  },
  {
    route: "/case",
    title: "Opdracht 3: Case",
    description: `
      Bewoners van de gemeente Utrecht met een beperking komen in aanmerking voor een WMO-subsidie (Wet Maatschappelijke Ondersteuning). Dankzij deze subsidie kunnen bewoners tegen een beperkte vergoeding reizen met de ondersteuning die zij nodig hebben. Als een aanvraag wordt goedgekeurd door de gemeente dan ontvangt de bewoner een zogenaamde beschikking. Deze beschikking is een jaar geldig en wordt  iedere jaar automatisch verlengd, tenzij de subsidie wordt stopgezet door de gemeente. Een beschikking heeft een budget, dit is het totale aantal kilometers dat de bewoner jaarlijks mag reizen zolang de beschikking actief is. Het budget wordt jaarlijks gereset zolang de beschikking actief is. Voor een front-end applicatie zijn deze gegevens nodig.
      
      Kun je de API endpoints vanuit de back-end beschrijven?`,
    answer_title: "API endpoints",
    answer_description: `
      <b>Belangrijke punten:</b>
      - Bewoner
      - Ieder jaar automatisch verlengt
      - Stopzetten 
      - Heeft budget => total aantal kilometers
      - Reset
      

      <b>Hoe ik denk dat de JSON eruit ziet met benodigde gegevens:</b>
      {
        "id": "string", // ID van subsidie zelf, er kunnen verschillende types subsidies zijn binnen WMO
        "resident_id": "string", // ID van de bewoner die subsidie ontvangt
        "valid_from": "date", // Tot wanneer de subsidie duurt
        "valid_to": "date", // Wanneer subsidie is afgelopen
        "status": "string", // Weten of subsidie is stopgezet of niet => active/inactive
        "budget": "number", // Hoeveel totaal budget de bewoner heeft
        "used_budget": "number", // Hoeveel de bewoner heeft gebruikt
      }

      - Alle types subsidies ophalen: GET {url}/api/subsidies
      - Specifieke subsidie: GET {url}/api/subsidies/{id}
      - Alle bewoners met een subsidie: GET {url}/api/residents/
      - Specifieke bewoner met subsidie: GET {url}/api/residents/{resident_id} 
      - Gegevens aanpassen van secifieke bewoner: PUT {url}/api/residents/{resident_id} => aangeven in body wat je wilt aanpassen e.g. address
      - Een subsidie activeren: PUT {url}/api/subsidies/{id}/activate
      - Een subsidie deactiveren: PUT {url}/api/subsidies/{id}/deactivate
      - Een specifieke subsidie activeren van een specifieke bewoner: PUT {url}/api/residents/{resident_id}/subsidies/{id}/activate
      - Een specifieke subsidie deactiveren van een specifieke bewoner: PUT {url}/api/residents/{resident_id}/subsidies/{id}/deactivate
      - Een budget aanpassen: PUT {url}/api/residents/{resident_id}/budget
      - Edit valid_to and valid_from dates: PUT {url}/api/residents/{resident_id}/validDates
    `,
  }
];