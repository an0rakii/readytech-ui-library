<template>
  <div class="avatar-wrapper">
    <v-avatar
      :size="size"
      class="avatar"
      :rounded="rounded"
      tabindex="0"
      role="img"
      :aria-label="ariaLabel"
    >
      <template v-if="avatarImage">
        <RtImage :src="avatarImage" :alt="alt"></RtImage>
      </template>
      <template v-else>
        <span class="initials">{{ initials }}</span>
      </template>
    </v-avatar>
  </div>
</template>

<script>
import RtImage from '../image/image.vue';
export default {
  name: 'RtAvatar',
  components: {
    RtImage,
  },
  props: {
    avatarImage: {
      type: String,
      default: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    alt: {
      type: String,
      default: 'Alt',
    },
    ariaLabel: {
      type: String,
      default: 'Aria Label',
    },
    name: {
      type: String,
      default: 'Name',
    },
    size: {
      type: Number,
      default: 50,
    },
    rounded: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    initials() {
      if (!this.name) return '';
      return this.name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase();
    },
  },
};
</script>

<style scoped>
.avatar-wrapper {
  display: flex;
  gap: 16px;
  justify-content: space-around;
}

.avatar {
  transition: transform 0.3s ease;
  outline: none; /* Prevent browser outline */
}

.avatar:focus {
  outline: 2px solid #005fcc; /* Add a high-contrast focus indicator */
  outline-offset: 4px;
}

.avatar:hover {
  transform: scale(1.1);
}

.avatar img {
  border-radius: 50%;
  object-fit: cover;
}
</style>
