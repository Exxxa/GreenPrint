<!-- src/routes/settings/Settings.svelte -->

<script>
    import { FileDropzone, SlideToggle  } from '@skeletonlabs/skeleton';
    import { writable } from 'svelte/store';
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
    let showPassword = false ;
    let profileVisibility = 'Public';
    let generalSettings = {
      name: 'Pierre LOPEZ',
      email: 'lopez@et.esiea.fr',
      profilePicture: 'https://example.com/profile-picture.jpg',
      phoneNumber: '0692303467', 
      is2FAEnabled: false, 
    };
    let showSettings = {
      Name: true,
      Email: true,
      Profile_Picture: true,
      Phone_Number: true,
    };
    let emailNotifications = writable(false);
    let smsNotifications = writable(false);
    let pushNotifications = writable(false);


</script>

<div class="flex">
  <div class="w-1/4 p-8">
    <h2 class="text-lg font-semibold mb-4">Settings</h2>
    {#each sections as section}
        <p
            class="cursor-pointer hover:text-primary-500 transition duration-300 px-4 py-2 rounded-md shadow-md hover:bg-primary-500 hover:text-white mb-4"
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
          <FileDropzone name="files" />
        </div>
        <div class="mb-4">
          <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
    {/if}
    {#if selectedSection === 'Security'}
    <!-- Security Settings -->
    <h3 class="text-xl font-semibold mb-4">Security Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Password</label>
          <div class="relative">
            <input type={showPassword ? 'text' : 'password'} class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
            <button class="absolute right-2 top-1/2 transform -translate-y-1/2" on:click={() => showPassword = !showPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button class="mt-1 p-2 bg-blue-600 text-white rounded-md">
            Modify Password
          </button>
        </div>
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600">Phone Number</label>
      <input type="tel" class="text-gray-600 mt-1 p-2 border rounded-md w-full" value={generalSettings.phoneNumber} />
    </div>
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600">Two-Factor Authentication</label>
      <button class="mt-1 p-2 {generalSettings.is2FAEnabled ? 'bg-green-600' : 'bg-red-600'} text-white rounded-md" on:click={() => generalSettings.is2FAEnabled = !generalSettings.is2FAEnabled}>
        {generalSettings.is2FAEnabled ? 'Enabled' : 'Disabled'}
      </button>
    </div>
    {/if}

    {#if selectedSection === 'Privacy'}
      <!-- Privacy Settings -->
      <h3 class="text-2xl font-semibold mb-4">Privacy Settings</h3>
      <div class="mb-4">
        <label class="block text-lg font-medium text-gray-600">Profile Visibility</label>
        <select bind:value={profileVisibility} class="text-gray-600 mt-1 p-2 border rounded-md w-full">
          <option>Public</option>
          <option>Private</option>
        </select>
      </div>
      {#if profileVisibility === 'Private'}
        <p class="text-lg">No information is provided, not even email, username or profile picture if you wish not.</p>
        {#each Object.keys(showSettings) as setting (setting)}
          <div class="mb-4">
            <label class="block text-lg font-medium text-gray-600">{setting}</label>
            <SlideToggle name="slide" bind:checked={setting} />
          </div>
        {/each}
      {/if}
      {#if profileVisibility === 'Public'}
        <p class="text-lg">All information is public.</p>
      {/if}
    {/if}

    
    {#if selectedSection === 'Notifications'}
      <!-- Notifications Settings -->
      <h3 class="text-xl font-semibold mb-4">Notifications Settings</h3>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Email Notifications</label>
        <SlideToggle name="emailNotifications" bind:checked={emailNotifications} />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">SMS Notifications</label>
        <SlideToggle name="smsNotifications" bind:checked={smsNotifications} />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-600">Push Notifications</label>
        <SlideToggle name="pushNotifications" bind:checked={pushNotifications} />
      </div>
    {/if}
      {#if selectedSection === 'Account'}
        <!-- Account Settings -->
        <h3 class="text-xl font-semibold mb-4">Account Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Username</label>
          <input type="text" class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
    {/if}
    {#if selectedSection === 'Activity'}
        <!-- Activity Settings -->
        <h3 class="text-xl font-semibold mb-4">Activity Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Activity Status</label>
          <input type="checkbox" class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
    {/if}
    {#if selectedSection === 'Devices'}
        <!-- Devices Settings -->
        <h3 class="text-xl font-semibold mb-4">Devices Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Connected Devices</label>
          <input type="text" class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
    {/if}
    {#if selectedSection === 'Subscriptions'}
        <!-- Subscriptions Settings -->
        <h3 class="text-xl font-semibold mb-4">Subscriptions Settings</h3>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Email Subscriptions</label>
          <input type="checkbox" class="text-gray-600 mt-1 p-2 border rounded-md w-full" />
        </div>
    {/if}
    {#if selectedSection === 'Delete Account'}
        <!-- Delete Account Settings -->
        <h3 class="text-xl font-semibold mb-4">Delete Account Settings</h3>
        <div class="mb-4">
          <button class="text-red-500 mt-1 p-2 border rounded-md w-full">Delete Account</button>
        </div>
    {/if}
    {#if selectedSection === 'Help & Support'}
    <!-- Help & Support Settings -->
    <h3 class="text-xl font-semibold mb-4">Help & Support</h3>
    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">What happens to my data when I delete my account?</h4>
      <p>When you delete your account, all your personal data is permanently erased from our servers. This includes your name, email, and any other information associated with your account.</p>
    </div>
    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">What do you do with the data I provide?</h4>
      <p>We use your data to improve your experience with our services. We do not sell your data to third parties.</p>
    </div>
    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">How do you protect my data?</h4>
      <p>We use industry-standard security measures to protect your data. This includes encryption, secure servers, and regular audits of our security practices.</p>
    </div>
    <div class="mb-4">
      <h4 class="text-lg font-semibold mb-2">Ask us a question</h4>
      <textarea class="text-gray-600 mt-1 p-2 border rounded-md w-full" placeholder="Write your question here..."></textarea>
      <button class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
    {/if}
    </div>
</div>
