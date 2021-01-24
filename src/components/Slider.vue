<template>
  <div class="flex flex-wrap w-full relative">
    <section class="w-screen absolute"
              style="height: 60vh"
             v-for="(image, index) in backgroundsToDisplay" :key="index"
    >
      <transition name="fade">
        <div v-if="CurrentSlide === index" class="w-full" >
          <div class="w-full absolute" style="height: 60vh">
            <div class="w-full h-full flex justify-left items-center">
              <p class="font-black p-10 md:text-6xl text-4xl text-white"
              >{{ image.text }}
              </p>
            </div>

          </div>
          <img class="w-full object-cover" style="height: 70vh"
              v-bind:src="image.link">
        </div>
      </transition>
    </section>
    <div class="absolute w-full" style="height: 60vh">
      <div class="w-full h-full flex justify-center items-end">
        <div
            v-for="(image, index) in backgroundsToDisplay"
            :key="image"
            @click="ChangeCurrent(index)"
            class="w-4 mx-2 h-4 rounded-full cursor-pointer"
            :class="CurrentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import {onBeforeUnmount, onMounted, ref} from "vue";

export default {
name: "Slider",
  setup() {
    const Interval = ref('');

    const CurrentSlide = ref(null);

    const backgroundsToDisplay = ref([
      {text: 'Kim jesteśmy?', link: 'https://www.polska.travel/images/pl-PL/glowne-miasta/wroclaw/wroclaw_panorama_1170.jpg'},
      {text: 'Cel projektu',link: 'https://meteor-turystyka.pl/images/places/0/36.jpg'},
      {text: 'Nasi partroni',link: 'https://pliki.propertynews.pl/i/06/18/83/061883_r0_940.jpg'},
    ])

    function ChangeCurrent(index) {
      CurrentSlide.value = index
    }

    onMounted(() => {
      Interval.value = setInterval(() => {
        CurrentSlide.value = CurrentSlide.value === 2 ? CurrentSlide.value = 0 : CurrentSlide.value + 1
      }, 3000);
    })

    onBeforeUnmount(() => {
      clearInterval(Interval.value)
    })

    return {
      backgroundsToDisplay,
      Interval,
      CurrentSlide,
      ChangeCurrent
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>