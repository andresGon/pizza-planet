<template>
  <div class="about">
    <section class="intro">
      <div class="info_text_wrapper">
        <h3>quality pizza For 30 years</h3>
        <p class="info_text">
          Nothing but the best quality ingredients, whit a friendly atmosfere.
        </p>
      </div>
      <img src="../assets/images/calzone.jpg" alt="calzone close up image" class="info_img">
    </section>
    <section class="more_info_wrapper">
      <h3>Click on the links below for more info</h3>
      <nav>
        <ul>
          <RouterLink class="link" :to="{name: 'historyLink'}">
            Our history
          </RouterLink>
          <RouterLink class="link" :to="{name: 'deliveryLink'}">
            Delivery
          </RouterLink>
          <RouterLink class="link" :to="{name: 'locationsLink'}">
            Locations
          </RouterLink>
        </ul>
      </nav>
      <RouterView />
    </section>
  </div>
</template>

