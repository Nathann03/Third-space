<script>
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Autoplay from "embla-carousel-autoplay";
  import SupriseBook from "./suprise-book.svelte";

  // Importing the stores
  import { currentCity, eventsForCurrentCity } from './stores.js';


  // Svelte store subscription
  let selectedCity;
  $: selectedCity = $currentCity; // Sync with the store

  // Update city function
  function updateCity(event) {
    currentCity.set(event.target.value);
  }
</script>

<div class="min-h-screen bg-gray-900 text-white">
  <!-- Starfield Background -->
  <div id="stars-bg"></div>
  <!-- Navbar -->
  <nav class="flex justify-between items-center py-4 px-6 border-b border-gray-700">
    <img
    src="/src/assets/logo.png"
    alt="3rd Space Logo"
    class="h-8 w-512"
  />
    <div class="flex items-center space-x-4">
      <select
        class="bg-gray-800 text-white px-3 py-2 rounded-md outline-none"
        aria-label="Select city"
        on:change={updateCity}
        bind:value={selectedCity}
      >
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
      <Button class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md">
        Sign Up
      </Button>
      <Button class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
        Log In
      </Button>
    </div>
  </nav>

  <div
  class="bg-[url('https://cdn.esahubble.org/archives/images/publicationjpg/heic1106d.jpg')] bg-cover bg-center min-h-screen text-white"
  style="background-blend-mode: overlay; background-color: rgba(0, 0, 0, 0.7);"
>
  <!-- Hero Section -->
  <section class="flex flex-col items-center text-center py-64">
    <h1 class="text-3xl font-semibold">Making friends & connections easier</h1>
    <h1 class="text-3xl font-semibold">any day of the week</h1>
    <p class="mt-4 text-lg text-gray-400">
      Find like-minded strangers to go and attend
    </p>
    <p class="text-lg text-gray-400">
      <u>events</u>, <u>dinners</u>, or <u>adventures</u>.
    </p>
    <div class="flex space-x-4 mt-6">
      <SupriseBook/>
      <Button class="px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md">
        Join a Space!
      </Button>
    </div>
  </section>

  <!-- Upcoming Events -->
  <section class="px-24 py-10">
    <h2 class="text-2xl font-semibold mb-4">
      Upcoming Events in <span class="text-indigo-400">{selectedCity}</span>
    </h2>
    <Carousel.Root class="w-full" opts={{
      align: "start",
      loop: true,
    }} plugins={[
      Autoplay({
        delay: 3300,
      })
    ]}>
      <Carousel.Content class="flex -ml-2">
        {#each $eventsForCurrentCity as event, i (event.date)}
          <Carousel.Item class="basis-1/5 flex-shrink-0 px-2">
            <Card.Root class="h-[350px] flex flex-col">
              <!-- Image Section -->
              <Card.Content
                class="flex-none aspect-[16/9] bg-gray-800"
                style="background-image: url({event.picture}); background-size: cover; background-position: center;"
              ></Card.Content>
              
              <!-- Text Section -->
              <Card.Content class="p-4 flex-1 flex flex-col space-y-2">
                <h3 class="text-lg font-semibold text-indigo-400 truncate">{event.event_name}</h3>
                <p class="text-sm text-gray-400">Time: {event.time} {event.date}</p>
                <p class="text-sm text-gray-400">Location: {event.location}</p>
                <p class="text-sm text-gray-500 line-clamp-3">{event.description}</p>
              </Card.Content>
            </Card.Root>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <div class="flex justify-between mt-2">
        <Carousel.Previous class="text-indigo-400 hover:text-indigo-300" />
        <Carousel.Next class="text-indigo-400 hover:text-indigo-300" />
      </div>
    </Carousel.Root>    
  </section>
</div>
</div>

<style>

</style>