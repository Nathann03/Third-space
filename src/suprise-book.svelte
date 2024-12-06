<script lang="ts">
  import {
    Button,
    buttonVariants
  } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { currentCity, eventsForCurrentCity } from "./stores.js";

  const spaces = [
    { value: "park", label: "Park" },
    { value: "cafe", label: "Café" },
    { value: "museum", label: "Museum" },
    { value: "library", label: "Library" }
  ];

  const personalities = [
    { value: "introvert", label: "Introvert" },
    { value: "extrovert", label: "Extrovert" },
    { value: "ambivert", label: "Ambivert" }
  ];

  const partySizes = [
    { value: "small", label: "Small (2-4)" },
    { value: "medium", label: "Medium (5-10)" },
    { value: "large", label: "Large (10+)" }
  ];

  const days = [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "sunday", label: "Sunday" }
  ];

  const timeRanges = [
    { value: "morning", label: "Morning (6 AM - 12 PM)" },
    { value: "afternoon", label: "Afternoon (12 PM - 6 PM)" },
    { value: "evening", label: "Evening (6 PM - 12 AM)" }
  ];

  const cities = [
    { value: "new-york", label: "New York" },
    { value: "san-francisco", label: "San Francisco" },
    { value: "los-angeles", label: "Los Angeles" }
  ];

  // Svelte store subscription
  let selectedCity;
  $: selectedCity = $currentCity; // Sync with the store

  // Update city function
  function updateCity(event) {
    currentCity.set(event.target.value);
  }

  let events;
  $: events = $eventsForCurrentCity; // Automatically reflects events for the city

  // Function to select a random event
  function bookRandomEvent() {
    if (events.length > 0) {
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      console.log("Booked Event:", randomEvent);
      alert(`Your surprise booking is: ${randomEvent.event_name} at ${randomEvent.location}!`);
    } else {
      alert("No events available for the selected city.");
    }
  }
</script>

<Dialog.Root>
  <Dialog.Trigger class="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md">
    Surprise Booking
  </Dialog.Trigger>

  <Dialog.Content class="max-w-4xl bg-gray-900 border border-gray-700 rounded-lg text-white p-8">
    <Dialog.Header>
      <Dialog.Title class="text-4xl font-bold text-center text-indigo-400 mb-4">
        Surprise Booking
      </Dialog.Title>
      <Dialog.Description class="text-lg text-center mb-8">
        Fill in your preferences below to book a surprise space!
      </Dialog.Description>
    </Dialog.Header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left Column -->
      <div class="space-y-6">
        <div class="flex items-center">
          <label class="text-lg font-medium w-48">Favorite space:</label>
          <Select.Root portal={null}>
            <Select.Trigger class="w-full max-w-[180px] bg-gray-700 text-white border border-gray-600 rounded-md">
              <Select.Value placeholder="Select a space" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {#each spaces as space}
                  <Select.Item value={space.value} label={space.label}>
                    {space.label}
                  </Select.Item>
                {/each}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>

        <div class="flex items-center">
          <label class="text-lg font-medium w-48">Your personality:</label>
          <Select.Root portal={null}>
            <Select.Trigger class="w-full max-w-[180px] bg-gray-700 text-white border border-gray-600 rounded-md">
              <Select.Value placeholder="Select personality" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {#each personalities as personality}
                  <Select.Item value={personality.value} label={personality.label}>
                    {personality.label}
                  </Select.Item>
                {/each}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>

        <div class="flex items-center">
          <label class="text-lg font-medium w-48">Preferred party size:</label>
          <Select.Root portal={null}>
            <Select.Trigger class="w-full max-w-[180px] bg-gray-700 text-white border border-gray-600 rounded-md">
              <Select.Value placeholder="Select size" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {#each partySizes as size}
                  <Select.Item bind:value={selectedCity} label={size.label} on:change={updateCity}>
                    {size.label}
                  </Select.Item>
                {/each}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <div class="flex items-center">
          <label class="text-lg font-medium w-48">What day this week:</label>
          <Select.Root portal={null}>
            <Select.Trigger class="w-full max-w-[180px] bg-gray-700 text-white border border-gray-600 rounded-md">
              <Select.Value placeholder="Select a day" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {#each days as day}
                  <Select.Item value={day.value} label={day.label}>
                    {day.label}
                  </Select.Item>
                {/each}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>

        <div class="flex items-center">
          <label class="text-lg font-medium w-48">Time range:</label>
          <div class="flex space-x-2">
            <!-- Start Time Input -->
            <Input
              type="time"
              placeholder="Start time"
              class="max-w-xs bg-gray-700 text-white border border-gray-600 rounded-md"
            />
             
            <!-- End Time Input -->
            <Input
              type="time"
              placeholder="End time"
              class="max-w-xs bg-gray-700 text-white border border-gray-600 rounded-md"
            />
          </div>
        </div>
        

        <div class="flex items-center">
          <label class="text-lg font-medium w-48">Location:</label>
          <Select.Root portal={null}>
            <Select.Trigger class="w-full max-w-[180px] bg-gray-700 text-white border border-gray-600 rounded-md">
              <Select.Value placeholder="Select a city" />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                {#each cities as city}
                  <Select.Item value={city.value} label={city.label}>
                    {city.label}
                  </Select.Item>
                {/each}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <!-- Book Me Button -->
      <Button
        class="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-md"
        on:click={bookRandomEvent}
      >
        Book Me a Space!
      </Button>
    </div>
  </Dialog.Content>
</Dialog.Root>
