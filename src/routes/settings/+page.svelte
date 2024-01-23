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
        <!-- Security Settings -->
        <h3 class="text-xl font-semibold mb-4">Security Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Password</label>
          <input type="password" class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
    {/if}
    {#if selectedSection === 'Privacy'}
        <!-- Privacy Settings -->
        <h3 class="text-xl font-semibold mb-4">Privacy Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Profile Visibility</label>
          <select class="text-gray-600 mt-1 p-2 border rounded-md w-full">
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>
    {/if}
    {#if selectedSection === 'Notifications'}
        <!-- Notifications Settings -->
        <h3 class="text-xl font-semibold mb-4">Notifications Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Email Notifications</label>
          <input type="checkbox" class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
    {/if}
    {#if selectedSection === 'Account'}
        <!-- Account Settings -->
        <h3 class="text-xl font-semibold mb-4">Account Settings</h3>
        <!-- Add your account settings here -->
    {/if}
    {#if selectedSection === 'Activity'}
        <!-- Activity Settings -->
        <h3 class="text-xl font-semibold mb-4">Activity Settings</h3>
        <!-- Add your activity settings here -->
    {/if}
    {#if selectedSection === 'Devices'}
        <!-- Devices Settings -->
        <h3 class="text-xl font-semibold mb-4">Devices Settings</h3>
        <!-- Add your devices settings here -->
    {/if}
    {#if selectedSection === 'Subscriptions'}
        <!-- Subscriptions Settings -->
        <h3 class="text-xl font-semibold mb-4">Subscriptions Settings</h3>
        <!-- Add your subscriptions settings here -->
    {/if}
    {#if selectedSection === 'Delete Account'}
        <!-- Delete Account Settings -->
        <h3 class="text-xl font-semibold mb-4">Delete Account Settings</h3>
        <!-- Add your delete account settings here -->
    {/if}
    {#if selectedSection === 'Help & Support'}
        <!-- Help & Support Settings -->
        <h3 class="text-xl font-semibold mb-4">Help & Support Settings</h3>
        <!-- Add your help & support settings here -->
    {/if}
    </div>
</div>
