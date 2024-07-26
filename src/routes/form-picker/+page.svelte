<script lang="ts">
  import Button from "./../../components/Button.svelte";
  import Typography from "../../components/Typography.svelte";
  import { formatDate } from "../../lib/dateUtils.js";
  import Spacer from "../../components/Spacer.svelte";
  import DateField from "../../components/FormPicker/DateField.svelte";
  import DropDown from "../../components/FormPicker/DropDown.svelte";
  import Image from "../../components/Image.svelte";
  import { fakeRequest } from "$lib/fakeApi";
  import ErrorField from "../../components/FormPicker/ErrorField.svelte";

  type FormData = {
    startDate: string;
    endDate: string;
    dog: string;
  };

  type Dog = {
    photoUrl: string;
    name: string;
  };

  let formData: FormData = {
    startDate: "",
    endDate: "",
    dog: "",
  };

  let imagePath = "/images/dogs/";

  let dogs: Dog[] = [
    { photoUrl: imagePath + "border-collie.jpg", name: "Daisy" },
    { photoUrl: imagePath + "corgi.jpg", name: "Pawsly" },
    { photoUrl: imagePath + "shiba-inu.jpg", name: "Cooper" },
    { photoUrl: imagePath + "berner-sennen.jpg", name: "Bark Obama" },
    { photoUrl: imagePath + "golden-retriever.jpg", name: "Nala" },
  ];

  let showErrorText: boolean = false;
  let dogNames: string[] = dogs.map((dog) => dog.name);
  let errorText: string = "";

  $: {
    showErrorText = errorText == "" ? false : true;
  }

  function handleInputChange(event: Event) {
    errorText = "";
    const input = event.target as HTMLInputElement;

    let fieldName = input.name;
    let fieldValue = input.value;

    // Assign value to formData object with assigned fieldName.
    // fieldName in formData should be the same string value as the ones assigned to the formFields (=DateField and DropDown).
    formData[fieldName as keyof FormData] = fieldValue;
  }

  function validateForm(): boolean {
    if (!formData.startDate || !formData.endDate || !formData.dog) {
      errorText = "Alle velden moeten ingevuld zijn.";
      return false;
    }

    if (formData.startDate == formData.endDate) {
      errorText = "De start- en einddatum mogen niet gelijk zijn.";
      return false;
    }

    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      errorText = "Voer een startdatum in die vóór de einddatum begint.";
      return false;
    }
    return true;
  }

  async function onSubmit() {
    if (!validateForm()) {
      return;
    }

    // Do fake request and use fake response.
    const response = await fakeRequest(formData);
    handleServerResponse(response);
  }

  function handleServerResponse(response: {
    firstAvailableDate: string | null;
  }) {
    if (response.firstAvailableDate) {
      const formattedStartDate: string = formatDate(formData.startDate);
      const formattedAvailableDate: string = formatDate(
        response.firstAvailableDate
      );

      // Check whether the start date is the same or later than the first available date.
      if (new Date(formattedStartDate) >= new Date(formattedAvailableDate)) {
        errorText = "De hond is beschikbaar in de gekozen periode.";
        return;
      }
      errorText = `De gekozen hond is niet beschikbaar. Beschikbaar vanaf: ${formattedAvailableDate}`;
    } else {
      // If there is no first available date for the dog, it's by default available.
      errorText = "De hond is beschikbaar in de gekozen periode.";
    }
  }

  function getPhotoUrlByName(name: string): string | undefined {
    const dog = dogs.find((dog) => dog.name === name);
    return dog?.photoUrl;
  }
</script>

<section id="form-picker">
  <fieldset id="form-fieldset">
    <legend id="form-legend">
      <Typography variant="h1" type="subtitle">
        {"Hondenhuurservice".toUpperCase()}
      </Typography>
    </legend>
    <Spacer multiplier={10} />
    <div id="dog-picture">
      <Image
        src={formData.dog != ""
          ? getPhotoUrlByName(formData.dog)
          : imagePath + "placeholder.jpg"}
        alt="Dog"
      />
    </div>
    <Spacer />
    <div id="inputfields">
      <DateField
        label="Start Datum"
        fieldName="startDate"
        fieldValue={formData.startDate}
        onChange={handleInputChange}
      />

      <DateField
        label="Eind Datum"
        fieldName="endDate"
        fieldValue={formData.endDate}
        onChange={handleInputChange}
      />

      <DropDown
        label="Hond"
        fieldName="dog"
        placeholder="Kies een hond"
        items={dogNames}
        onChange={handleInputChange}
      />
    </div>
    <Spacer multiplier={0.5} />
    <ErrorField show={showErrorText}>{errorText}</ErrorField>
    <Spacer multiplier={0.5} />
    <Button onClick={onSubmit}>Beschikbaarheid Controleren</Button>
    <Spacer />
  </fieldset>
</section>

<style lang="scss">
  #form-picker {
    display: flex;
    align-items: center;
    width: fit-content;
    flex-direction: column;
    margin: 20px;
  }

  #form-fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border: 1px solid var(--color-dark-lilac);
    border-radius: 12px;
  }

  #form-legend {
    display: flex;
    color: var(--color-darkest-lilac);
    left: 0;
    right: 0;
    margin: auto;
    position: relative;
  }

  #inputfields {
    display: flex;
    gap: 20px;
  }

  #dog-picture {
    width: 300px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
  }
</style>
