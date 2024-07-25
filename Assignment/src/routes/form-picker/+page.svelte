<script lang="ts">
  import Button from "./../../components/Button.svelte";
  import Typography from "../../components/Typography.svelte";
  import { formatDate } from "../../lib/dateUtils.js";
  import Spacer from "../../components/Spacer.svelte";
  import DateField from "../../components/DateField.svelte";
  import DropDown from "../../components/DropDown.svelte";
  import Image from "../../components/Image.svelte";

  type FormData = {
    startDate: string;
    endDate: string;
    dog: string;
  };

  type Dog = {
    photoUrl: string;
    name: string;
  };

  let imagePath = "/images/dogs/";

  let formData: FormData = {
    startDate: "",
    endDate: "",
    dog: "",
  };

  let dogs: Dog[] = [
    { photoUrl: imagePath + "border-collie.jpg", name: "Daisy" },
    { photoUrl: imagePath + "corgi.jpg", name: "Pawsly" },
    { photoUrl: imagePath + "shiba-inu.jpg", name: "Cooper" },
    { photoUrl: imagePath + "berner-sennen.jpg", name: "Bark Obama" },
    { photoUrl: imagePath + "golden-retriever.jpg", name: "Nala" },
  ];

  let dogNames: string[] = dogs.map((dog) => dog.name);

  function handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;

    let name = input.name;
    let value = input.value;

    formData[name as keyof FormData] = value;

    console.log(value);
  }

  function onSubmit() {}

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

    <div id="dog-picture">
      <Image
        src={formData.dog != ""
          ? getPhotoUrlByName(formData.dog)
          : imagePath + "placeholder.jpg"}
        alt="Dog"
      />
    </div>

    <div id="inputfields">
      <DateField
        label="Start Datum"
        value={formData.startDate}
        onChange={handleInputChange}
      />

      <DateField
        label="Eind Datum"
        value={formData.endDate}
        onChange={handleInputChange}
      />

      <DropDown
        label="Hond"
        placeholder="Kies een hond"
        items={dogNames}
        onChange={handleInputChange}
      />
    </div>
    <Spacer multiplier={0.5} />
    <Button onClick={onSubmit} rounded={false}>Verzenden</Button>
  </fieldset>
</section>

<style lang="scss">
  #form-picker {
    display: flex;
    width: fit-content;
    flex-direction: column;
    margin: 20px;
  }

  #form-fieldset {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid white;
  }

  #form-legend {
    color: var(--color-darkest-lilac);
  }

  #inputfields {
    display: flex;
    gap: 20px;
  }

  #dog-picture {
    width: 300px;
    height: 300px;
  }
</style>
