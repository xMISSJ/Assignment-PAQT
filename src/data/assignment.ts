export const Assignments : Assignment[] = [
  {
    route: "/form-picker",
    title: "Opdracht 1: Form Picker",
    description: 
`
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
    answer_title: "Denkwijze",
    answer_description: 
`
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
    answer_description: 
`Ik vroeg me hierbij af hoe de driehoek moest meeschalen. Arlon heeft aangegeven dat ik moest doen wat ik dacht dat goed was. Ik heb aangenomen dat de driehoek op basis van schermgrootte waarbij de driehoek altijd 60% van de schermbreedte is en 100% van de schermgrootte.

Daarnaast is er in de opdracht gevraagd om mobile responsiveness, ik heb dit gedaan en ook mobile responsive gemaakt met hulp van media queries. Mobile responsiveness is anders dan mobile adaptiveness.

Footer is sticky gemaakt met hulp van fixed position.
`,
  },
  {
    route: "/case",
    title: "Opdracht 3: Case",
    description: `Bewoners van de gemeente Utrecht met een beperking komen in aanmerking voor een WMO-subsidie (Wet Maatschappelijke Ondersteuning). Dankzij deze subsidie kunnen bewoners tegen een beperkte vergoeding reizen met de ondersteuning die zij nodig hebben. Als een aanvraag wordt goedgekeurd door de gemeente dan ontvangt de bewoner een zogenaamde beschikking. Deze beschikking is een jaar geldig en wordt  iedere jaar automatisch verlengd, tenzij de subsidie wordt stopgezet door de gemeente. Een beschikking heeft een budget, dit is het totale aantal kilometers dat de bewoner jaarlijks mag reizen zolang de beschikking actief is. Het budget wordt jaarlijks gereset zolang de beschikking actief is. Voor een front-end applicatie zijn deze gegevens nodig.
    \nKun je de API endpoints vanuit de back-end beschrijven?`,
    answer_title: "Denkwijze",
    answer_description: 
`<b>Belangrijke punten:</b>
- Bewoner
- Ieder jaar automatisch verlengt
- Stopzetten 
- Heeft budget => total aantal kilometers
- Reset

<b>Hoe ik denk dat de subsidie JSON eruit ziet met benodigde gegevens:</b>
<code>
  {
    "id": "string", 
    "resident_id": "string", 
    "valid_to": "date",
    "active": "boolean", 
    "budget": "number", 
    "used_budget": "number",
  }
</code>

<b>Hoe ik denk dat de resident JSON eruit ziet met benodigde gegevens:</b>
<code>
  {
    "name": "string", 
    "email": "string", 
    "address": "date",
    "phone": "boolean", 
    "subsidy": {
    "id": "string",
      "resident_id": "string",
      "valid_to": "date",
      "active": "boolean",
      "budget": "number",
      "used_budget": "number"
    }
  }
</code>

- <code>GET {url}/api/subsidies:</code> Alle types subsidies ophalen
- <code>GET {url}/api/subsidies/{id}:</code> Ophalen specifieke subsidie
- <code>GET {url}/api/residents:</code> Alle bewoners met een subsidie
- <code>GET {url}/api/residents/{resident_id}:</code> Ophalen specifieke bewoner met subsidie
- <code>POST {url}/api/residents:</code> Maken van een nieuwe bewoner met subsidie
- <code>PATCH {url}/api/residents/{resident_id}:</code> Gegevens aanpassen van specifieke bewoner
- <code>PUT {url}/api/subsidies/{id}/activate:</code> Een subsidie activeren
- <code>PUT {url}/api/subsidies/{id}/deactivate:</code> Een subsidie deactiveren
- <code>PUT {url}/api/residents/{resident_id}/subsidies/{id}/activate:</code> Een specifieke subsidie activeren van een specifieke bewoner
- <code>PUT {url}/api/residents/{resident_id}/subsidies/{id}/deactivate:</code> Een specifieke subsidie deactiveren van een specifieke bewoner
- <code>PUT {url}/api/residents/{resident_id}/activate:</code> Een bewoner deactiveren
- <code>PUT {url}/api/residents/{resident_id}/deactivate:</code> Een bewoner activeren
- <code>PUT {url}/api/residents/{resident_id}/budget:</code> Een budget aanpassen
- <code>PUT {url}/api/residents/{resident_id}/validTo:</code> Aanpassen van valid_to datum
- <code>PUT {url}/api/residents/{resident_id}/resetBudget:</code> De budget en used_budget resetten.
- <code>DELETE {url}/api/residents/{resident_id}:</code> Een bewoner verwijderen
- <code>GET {url}/api/residents/{resident_id}/subsidies:</code> Fetching subsidies for a specific resident
`,
  }
];