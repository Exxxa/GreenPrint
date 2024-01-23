<!-- src/routes/settings/Settings.svelte -->
<script>
    let selectedSection = 'General';
  
    const sections = [
      'General',
      'Security',
      'Privacy',
      'Notifications',
      'Account',
      'Activity',
      'Devices',
      'Subscriptions',
      'Delete Account',
      'Help & Support',
    ];
  
    //example for data structure, to be removed with database
    let generalSettings = {
      name: 'Pierre LOPEZ',
      email: 'lopez@et.esiea.fr',
      profilePicture: 'https://example.com/profile-picture.jpg',
    };
  </script>
  
  
<div class="flex">
    <div class="w-1/4 p-8">
      <h2 class="text-lg font-semibold mb-4">Settings</h2>
      {#each sections as section}
        <p
          class="cursor-pointer hover:text-primary-500 transition duration-300"
          on:click={() => (selectedSection = section)}
          class:font-bold={selectedSection === section}
        >
          {section}
        </p>
      {/each}
    </div>
  
    <div class="w-3/4 p-4">
    {#if selectedSection === 'General'}
        <!-- General Settings -->
        <h3 class="text-xl font-semibold mb-4">General Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Name</label>
          <input type="text" bind:value={generalSettings.name} class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
  
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Email</label>
          <input type="email" bind:value={generalSettings.email} class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
  
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Profile Picture URL</label>
          <input type="url" bind:value={generalSettings.profilePicture} class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
    {/if}
    {#if selectedSection === 'Security'}
    <h3 class="text-xl font-semibold mb-4">Security Settings</h3>
    {/if}
    {#if selectedSection === 'Privacy'}
    <h3 class="text-xl font-semibold mb-4">Privacy</h3>
    {/if}
    {#if selectedSection === 'Notifications'}
    <h3 class="text-xl font-semibold mb-4">Notifications</h3>
    {/if}
    {#if selectedSection === 'Account'}
    <h3 class="text-xl font-semibold mb-4">Account</h3>
    {/if}
    {#if selectedSection === 'Activity'}
    <h3 class="text-xl font-semibold mb-4">Activity</h3>
    {/if}
    {#if selectedSection === 'Devices'}
    <h3 class="text-xl font-semibold mb-4">Devices</h3>
    {/if}
    {#if selectedSection === 'Subscription'}
    <h3 class="text-xl font-semibold mb-4">Subscription</h3>
    {/if}
    {#if selectedSection === 'Delete Account'}
    <h3 class="text-xl font-semibold mb-4">Delete Account</h3>
    {/if}
    {#if selectedSection === 'Help & Support'}
    <h3 class="text-xl font-semibold mb-4">Help & Support</h3>
    {/if}
    </div>
  </div>
  