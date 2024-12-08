<script>
    import { createEventDispatcher } from 'svelte'
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { currentCity, eventsForCurrentCity } from './stores.js';
    import * as Alert from "$lib/components/ui/alert/index.js";
    import Terminal from "lucide-svelte/icons/terminal";
    import { onMount } from "svelte";
    import { writable, get } from "svelte/store";
    import { cityEvents } from "./stores.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import * as Select from "$lib/components/ui/select/index.js";

      // Svelte store subscription
        let selectedCity;
        $: selectedCity = $currentCity;
        $: events = $eventsForCurrentCity;

        function createSpace() {
            // Placeholder function for create a space action
            alert("Create a space functionality coming soon!");
        }

    const dispatch = createEventDispatcher()
      
    // Emit an event to return to the main page
    function goBack() {
      dispatch('navigate', { page: 'main' });
    }

    let showAlert = false;
    function handleJoin() {
        showAlert = true;
        // Hide the alert after 3 seconds
        setTimeout(() => {
        showAlert = false;
        }, 3000);
    }

      // Form state
  let currcity = get(currentCity);
  let picture = "";
  let eventName = "";
  let description = "";
  let location = "";
  let startTime = "";
  let eventDate = "";

  const cities = Object.keys(get(cityEvents)); // Available cities
  const times = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", 
    "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  function createEvent() {
    // Get the current city events
    const updatedEvents = { ...get(cityEvents) };

    // Add the new event to the selected city
    updatedEvents[currcity] = [
      ...updatedEvents[currcity],
      {
        picture,
        event_name: eventName,
        time: startTime,
        date: eventDate, // Today's date as default
        location,
        description,
      },
    ];

    // Update the cityEvents store
    cityEvents.set(updatedEvents);

    // Reset form fields
    picture = "";
    eventName = "";
    description = "";
    location = "";
    startTime = "";
    alert("Event created successfully!");
  }
  </script>
  
  <div class="px-6 py-6 flex justify-between items-center">
    <h2 class="text-2xl font-semibold">
      Upcoming events/spaces in <span class="text-indigo-400">{selectedCity}</span>
    </h2>
<!-- Create a Space Button and Dialog -->
<Dialog.Root>
    <!-- Trigger Button -->
    <Dialog.Trigger class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white">
      Create a Space
    </Dialog.Trigger>
  
    <!-- Dialog Content -->
    <Dialog.Content class="max-w-screen-lg p-6 bg-gray-800 text-white rounded-lg space-y-6">
        <Dialog.Header>
          <Dialog.Title class="text-2xl font-bold text-indigo-400">Create a Space</Dialog.Title>
        </Dialog.Header>
      
        <!-- Two Columns Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Left Column -->
          <div class="space-y-4">
            <!-- Picture Input -->
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="picture">Picture</Label>
              <Input
                class="bg-gray-700 text-white border border-gray-600 rounded-md"
                id="picture"
                type="file"
                bind:value={picture}
              />
            </div>
      
            <!-- Event Name Input -->
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="eventName">Event Name</Label>
              <Input
                class="bg-gray-700 text-white border border-gray-600 rounded-md"
                id="eventName"
                type="text"
                bind:value={eventName}
                placeholder="Enter event name"
              />
            </div>
      
            <!-- Description Input -->
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="description">Description</Label>
              <Input
                class="bg-gray-700 text-white border border-gray-600 rounded-md"
                id="description"
                type="text"
                bind:value={description}
                placeholder="Enter description"
              />
            </div>
      
            <!-- Location Input -->
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="location">Location</Label>
              <Input
                class="bg-gray-700 text-white border border-gray-600 rounded-md"
                id="location"
                type="text"
                bind:value={location}
                placeholder="Enter location"
              />
            </div>
          </div>
      
          <!-- Right Column -->
          <div class="space-y-4">
            <!-- Date Input -->
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label for="date">Date</Label>
              <Input
                class="bg-gray-700 text-white border border-gray-600 rounded-md"
                id="date"
                type="date"
                bind:value={eventDate}
              />
            </div>
      
            <!-- Start Time Dropdown -->
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label>Start Time</Label>
              <Select.Root portal={null}>
                <Select.Trigger class="w-full bg-gray-700 text-white border border-gray-600 rounded-md">
                  <Select.Value placeholder="Select a time" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    {#each times as time}
                      <Select.Item value={time} on:click={() => (startTime = time)}>
                        {time}
                      </Select.Item>
                    {/each}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </div>
      
            <!-- City Dropdown -->
            <div class="grid w-full max-w-sm items-center gap-1.5">
              <Label>City</Label>
              <Select.Root portal={null} bind:value={currcity}>
                <Select.Trigger class="w-full bg-gray-700 text-white border border-gray-600 rounded-md">
                  <Select.Value placeholder="Select a city" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    {#each cities as city}
                      <Select.Item value={city}>{city}</Select.Item>
                    {/each}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </div>
          </div>
        </div>
      
        <!-- Create Button -->
        <div class="flex justify-end">
          <Button
            class="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md"
            on:click={createEvent}
          >
            Create Event
          </Button>
        </div>
      </Dialog.Content>      
  </Dialog.Root>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-4">
    {#each events as event}
    <Dialog.Root>
        <Dialog.Trigger class="w-full">
          <Card.Root class="h-4.5rem flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
            <!-- Image Section -->
            <Card.Content
              class="flex-none aspect-[16/9] bg-gray-800"
              style="background-image: url({event.picture}); background-size: cover; background-position: center;"
            ></Card.Content>
      
            <!-- Text Section -->
            <Card.Content class="p-4 flex-1 flex flex-col space-y-2 overflow-hidden">
              <h3 class="text-lg font-semibold text-indigo-400 truncate">{event.event_name}</h3>
              <p class="text-sm text-gray-400">Time: {event.time} {event.date}</p>
              <p class="text-sm text-gray-400">Location: {event.location}</p>
              <p class="text-sm text-gray-500 overflow-hidden">{event.description}</p>
            </Card.Content>
          </Card.Root>
        </Dialog.Trigger>

        <!-- Dialog Content -->
        <Dialog.Content class="sm:max-w-[900px] bg-gray-800 text-white p-6 rounded-md">
          <Dialog.Header>
            <Dialog.Title class="text-2xl font-bold">{event.event_name}</Dialog.Title>
          </Dialog.Header>

          <div class="flex flex-col md:flex-row gap-6">
            <!-- Event Image -->
            <div class="flex-none w-full md:w-1/2">
              <img src={event.picture} alt={event.event_name} class="w-full h-auto rounded-md" />
            </div>

            <!-- Event Details -->
            <div class="flex-1 space-y-4">
                <p class="text-xl"><strong>Organizer:</strong> John Doe</p>
                <p class="text-xl"><strong>Time:</strong> {event.time} {event.date}</p>
                <p class="text-xl"><strong>Location:</strong> {event.location}</p>
                <p class="text-gray-500">{event.description}</p>
            </div>
          </div>

          <!-- Join Button -->
          <div class="flex justify-end mt-4">
            <Button
            class="mt-6 self-end px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md"
            on:click={handleJoin}
            >
            Join
            </Button>
          </div>

        <!-- Alert Component -->
        {#if showAlert}
        <div class="fixed bottom-3 right-4">
        <Alert.Root class="bg-green-800 text-white p-4 rounded-md flex items-center space-x-2 shadow-lg">
            <Terminal class="h-5 w-5" />
            <div>
            <Alert.Title>Success!</Alert.Title>
            <Alert.Description>You have signed up for the event.</Alert.Description>
            </div>
        </Alert.Root>
        </div>
        {/if}
        </Dialog.Content>
      </Dialog.Root>
    {/each}
  </div>
  